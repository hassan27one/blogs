import Link from 'next/link'
import React from 'react'


export default function blogHome() {
  return (
    <>
    
<h1>Blog Home Page </h1>
<Link href='/blog/blog1'>Blog-1</Link> <br/>
<Link href='/blog/blog2'>Blog-2</Link> <br/>
<Link href='/blog/blog3'>Blog-3</Link> <br/>

    </>
  )
}
