"use client"
import React,{useState,useEffect} from 'react'
import Movies from '@/components/Movies';
import { useSearchParams } from 'next/navigation';
const Page = () => {
  const [movieData, setMovieData] = useState([]); // State to store fetched movie data
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre") || 'popular'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU0NDE5M2E4MDg1NmIzZDlkNzkwOTU5ZDNmNzgwNSIsInN1YiI6IjY0ZTEwMjYxYjc3ZDRiMTE0MzQ5M2UwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yfqzzJ6IJzTC70QXPx3EQf3BUwygERxqlRK61XrLG3g' // Replace with your actual access token
          }
        };

        const response = await fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`, options);
        const data = await response.json();
        setMovieData(data.results); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genre]);
  
  return (
    <div className='flex items-center justify-center flex-wrap gap-3 mb-20'>
         {movieData?.map((movie, index) => (
          <Movies key={index} dt={movie} />
        ))}
    </div>
  )
}

export default Page