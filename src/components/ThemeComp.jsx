"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {CiDark} from "react-icons/ci"
import {BiSolidSun} from "react-icons/bi"
const ThemeComp = () => {
    const [mounted,setMounted] = useState(false)
    const {systemTheme,theme,setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    },[])

    const themeMode = theme === 'system' ? systemTheme : theme

  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?
                <BiSolidSun onClick={() => setTheme('light')} size={25} className='cursor-pointer'/>:
                <CiDark onClick={() => setTheme('dark')} size={25} className='cursor-pointer'/> 
                
            )
        }
    </div>
  )
}

export default ThemeComp