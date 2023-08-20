"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"
const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre") || 'popular'

    const tabs = [
        {
            name:"Most Popular",
            url:"popular"
        },
        {
            name:"Coming Soon",
            url:"upcoming"
        },
    ]
  return (
    <div className='p-5 m-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
        {
            tabs.map((tab,i) => (
                <Link key={i} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "font-bold underline underline-offset-8 nav-link" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
        }
    </div>
  )
}

export default Tabs