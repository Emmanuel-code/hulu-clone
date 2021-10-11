import { ThumbsUpDownOutlined, ThumbUp } from '@material-ui/icons'
import Image from 'next/image'

import React from 'react'

function Thumbnail({result}) {
    const BASE_URL = ' https://image.tmdb.org/t/p/original/'
    return (
        <div className='group p-2 transition duration-200 ease-in transform sm:hover:scale-90 hover:z-50 cursor-pointer '>
            <Image height={1080} width={1920} src='https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'/>
<img src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} layout='responsive' height={1080} width={1920} alt='movie photo'/>
<div className='p-2' >
    <p className='truncate max-w-md'>{result.overview}</p>
    <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold '>{result.title || result.original_name}</h2>
    <p className='flex  items-center opacity-0 group-hover:opacity-100'>
        {result.media_type && `${result.media_type}`}{""}
        {result.release_date || result.first_air_date}
        <ThumbUp className='h-5 mx-2' /> 
        {result.vote_count}
    </p>

</div>
        </div>
    )
}

export default Thumbnail
