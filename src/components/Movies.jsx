"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({dt}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='w-[400px] h-[300px]  cursor-pointer my-5 p-3'>
        <img src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} className='h-60 object-contain'/>
        <div>
            <p className='text-2xl font-bold'>{dt?.original_title}</p>
            <p className='font-bold text-xl'>IMDB: {dt?.vote_average.toFixed(1)}</p>
        </div>
    </div>
  )
}

export default Movies