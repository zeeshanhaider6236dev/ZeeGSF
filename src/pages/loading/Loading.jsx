import React from 'react'
import loadingBG from './loadingBG.png'
import CircularProgress from '@mui/material/CircularProgress';


const Loading = () => {
    return (
        <div>
            <img className='w-[36%] m-auto' src={loadingBG} alt='loadingBG' />
            <p className='text-xl font-bold text-center'>Please wait for a few seconds we are synchronizing data from Shopify to Google Merchant Center</p>
            <div className='flex justify-center m-auto mt-8'>
                <CircularProgress style={{ color: '#008060' }} />
            </div>

        </div>
    )
}

export default Loading