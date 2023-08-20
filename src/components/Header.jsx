"use client"
import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [keyword,setKeyword] = useState("")
  const router = useRouter();


  const searchFunction = (e) => {
      if(e.key === "Enter" && keyword.length >= 2){
        router.push(`/search/${keyword}`)
        setKeyword("")
      }
  }

  const searchFunctionClick = () => {
    if(keyword.length >= 2){
      router.push(`/search/${keyword}`)
      setKeyword("")
    }
  }


  return (
    <div className='flex items-center gap-5 h-20 p-5 header w-full '>
        <div className='es-logo rounded p-3 text-xl font-bold cursor-pointer' onClick={() => router.push("/")}>
          <p>ESmovie</p>
        </div>
        
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg search-div'>
            <input value={keyword} onKeyDown={searchFunction} onChange={e => setKeyword(e.target.value)} className='outline-none flex-1 bg-inherit' placeholder='Search...' type="text" />
            <BiSearch className='cursor-pointer' size={25} onClick={searchFunctionClick} />
        </div>

        <ThemeComp />
        
 
    </div>
  )
}

export default Header