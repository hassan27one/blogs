import React from 'react'

// creat an Array
const blogData = [
    {
    id:1,
    slug:"blog1",
    descrption:"Blog Description-1"
    },
    {
    id:2,
    slug:"blog2",
    descrption:"Blog Description-2"
    },
    {
    id:3,
    slug:"blog3",
    descrption:"Blog Description-3"
    }
]


export default function Blogs ({params} : {params:  {slug: string} } ) 
{
    const selectBlog = blogData.filter((item)=> item.slug === params.slug)
  return (
    <>
        <div>{selectBlog[0]?.descrption}</div>
  </>
  )
}
