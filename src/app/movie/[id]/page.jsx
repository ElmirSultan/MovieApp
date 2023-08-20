import React from 'react'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU0NDE5M2E4MDg1NmIzZDlkNzkwOTU5ZDNmNzgwNSIsInN1YiI6IjY0ZTEwMjYxYjc3ZDRiMTE0MzQ5M2UwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yfqzzJ6IJzTC70QXPx3EQf3BUwygERxqlRK61XrLG3g' // Replace with your actual access token
    }
  };

const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,options)
    return await res.json()
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

    console.log(movieDetail,"movieDetail");
  return (
    <div className='relative p-7 min-h-screen'>
        <img className='object-cover' src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />

        <div className='absolute'>
            <div className='text-3xl font-bold my-3'>{movieDetail?.title}</div>
            <div className='w-1/2'>{movieDetail?.overview}</div>
            <div className='my-2 flex items-center gap-2'><p>Release Date: </p>{movieDetail?.release_date}</div>
            <div className='my-2 flex items-center gap-2'><p className='font-bold'>IMDB:</p>{movieDetail?.vote_average.toFixed(1)}</div>
            <div className='border w-32 p-2 rounded-md text-center cursor-pointer text-lg hover:bg-amber-400 hover:border-amber-400 transition-all hover:text-black '>Trail</div>
        </div>
    </div>
  )
}

export default Page