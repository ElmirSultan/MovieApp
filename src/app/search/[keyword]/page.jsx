import Movies from '@/components/Movies';
import React from 'react'

const getMovie = async (keyword) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU0NDE5M2E4MDg1NmIzZDlkNzkwOTU5ZDNmNzgwNSIsInN1YiI6IjY0ZTEwMjYxYjc3ZDRiMTE0MzQ5M2UwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yfqzzJ6IJzTC70QXPx3EQf3BUwygERxqlRK61XrLG3g'
      }
    };
  
    const encodedKeyword = encodeURIComponent(keyword); 
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=en-US&page=1`;
  
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return []; 
    }
  };
const Page = async ({params}) => {
    const keyword = params.keyword;
    const movieDetail = await getMovie(keyword)

    console.log(movieDetail);
  return (
    <div>
        {
            !movieDetail ? 
            <div>Nothing has founded</div> :
        
                <div className='flex  items-center flex-wrap gap-4 justify-center'>
                    {
                        movieDetail?.map((dt,i) => (
                            <Movies key={i} dt={dt} />
                        ))
                   
                    }
                </div>
        }
    </div>
  )
}

export default Page