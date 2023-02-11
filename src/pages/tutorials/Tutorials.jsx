import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const Tutorials = () => {

  const [videoModal, setVideoModal] = React.useState(false)

  const [videoSrc, setVideoSrc] = React.useState('')
  console.log(videoSrc)


  return (
    <>




      <Grid className="Grid_video_tutorial" style={{ padding: '10px' }} container spacing={1}>
        <Grid className='cursor-pointer' onClick={() => { setVideoSrc('https://www.youtube.com/embed/xu1O3lTBaYE'); setVideoModal(!videoModal) }} style={{ padding: '10px' }} xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }} style={{ padding: '10px' }}>
            <img src='http://img.youtube.com/vi/xu1O3lTBaYE/maxresdefault.jpg' />
          </Card>
        </Grid>
        <Grid className='cursor-pointer' onClick={() => { setVideoSrc('https://www.youtube.com/embed/xu1O3lTBaYE'); setVideoModal(!videoModal) }} style={{ padding: '10px' }} xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }} style={{ padding: '10px' }}>
            <img src='http://img.youtube.com/vi/xu1O3lTBaYE/maxresdefault.jpg' />
          </Card>
        </Grid>
        <Grid className='cursor-pointer' onClick={() => { setVideoSrc('https://www.youtube.com/embed/xu1O3lTBaYE'); setVideoModal(!videoModal) }} style={{ padding: '10px' }} xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }} style={{ padding: '10px' }}>
            <img src='http://img.youtube.com/vi/xu1O3lTBaYE/maxresdefault.jpg' />
          </Card>
        </Grid>
      </Grid>


      {
        videoModal ? (
          <>
            <div className="fixed inset-0 z-40 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-70"
                onClick={() => setVideoModal(false)}
              ></div>
              <div className="flex w-full h-full items-center px-4 py-8">
                <div className="relative w-[80%] p-4 mx-auto">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <CloseIcon style={{ color: 'white', fontSize: '35px' }} onClick={() => setVideoModal(false)} className='absolute top-0 right-0 hover:transition-all transition ease-in-out delay-250 hover:rotate-180 cursor-pointer' />
                    </div>
                    <div className='p-4'>
                      <iframe width="100%" height="600vh" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      }

    </>
  )
}

export default Tutorials