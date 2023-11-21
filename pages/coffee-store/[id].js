import React from 'react'
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import cls from "classnames";
import coffeeStoresData from '../../data/coffee-stores.json'

import styles from '../../styles/coffee-store.module.css';
import Image from "next/image";


export async function getStaticProps(staticProps) {
  const { params } = staticProps;
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === params.id //dynamic id
      })
    }
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map(coffeeStore => ({ params: { id: coffeeStore.id.toString() } }))
  return {
    paths: paths,
    fallback: true,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>
  }
  const { address, name, imgUrl, neighbourhood } = props.coffeeStore;

  const handleUpvoteButton = () => console.log("up vote")
  return (
    <div className={styles.col1}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.backToHomeLink}>
            <Link href="/" scroll={false}>Back to Home</Link><br />
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <div className={styles.storeImgWrapper}>
            <Image src={imgUrl} alt={name} width={600} height={360} className={styles.storeImg} />
          </div>
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/icons/places.svg" width={24} height={24} alt="" />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/nearMe.svg" width={24} height={24} alt="" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width={24} height={24} alt="" />
            <p className={styles.text}>{1}</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={handleUpvoteButton}
          >
            Upvote
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore;