import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'

// creat an Array
const blogData = [
    {
    id:1,
    slug:"blog1",
    descrption:"Blog-1 page + Details html, css .............. "
    },
    {
    id:2,
    slug:"blog2",
    descrption:"Blog-2 page + Details html, css .............."
    },
    {
    id:3,
    slug:"blog3",
    descrption:"Blog-3 page + Details html, css .............."
    // image: 'blog-1.png'
    }
]


export default function Blogs ({params} : {params:  {slug: string} } ) 
{
    const selectBlog = blogData.filter((item)=> item.slug === params.slug)
  return (
    <>
    {/* <div>< src={`/${selectBlog[0]?.image}`}></div> */}
        <div >{selectBlog[0]?.descrption}</div>
  </>
  )
}
