import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from './Card.module.css'

const Card = (props) => {
  const { name, imgUrl, href } = props;
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2>{name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image src={imgUrl} width={260} height={160} className={styles.cardImage} alt={name}/>
        </div>
      </div>
    </Link>
  )
}

export default Card