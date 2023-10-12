import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log('router: ', router)
  return (
    <div>Coffee Store Page {router.query.id}
      <Link href="/" scroll={false}>Back to Home</Link>
    </div>
  )
}

export default CoffeeStore;