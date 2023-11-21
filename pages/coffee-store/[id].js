import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps(staticProps) {
  const { params } = staticProps;
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === '0' //params.id //dynamic id
      })
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '0' } },
      { params: { id: '1' } },
      { params: { id: '300' } },
    ],
    fallback: true,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log('router: ', router)
  console.log('props: ', props)
  
  if(router.isFallback) {
    return <div>Loading</div>
  }

  return (
    <div>Coffee Store Page {router.query.id}<br/>
      <Link href="/" scroll={false}>Back to Home</Link><br/>
      <Link href="/coffee-store/dynamic">Go to page Dynamic</Link><br/>
      <br/>
      <p>{props.coffeeStore.name}</p>
      <p>{prop?.coffeeStore.address}</p>
    </div>
  )
}

export default CoffeeStore;