import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Button } from '@material-ui/core';
import BlockIcon from '@mui/icons-material/Block';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const Suggestions = () => {

    const navigate = useNavigate();
    const RequestOnClick = useCallback(() => navigate('/Request', { replace: true }), [navigate]);

    return (
        <>
            <div className='p-2 sm:p-4 md:p-12 lg:p-12 xl:p-12 2xl:p-12'>
                <Button onClick={RequestOnClick} variant='outlined' style={{ marginBottom: '10px' }} ><ArrowBackIcon /></Button>
                <div className='bg-white p-4 rounded-md' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                    <p className='font-medium text-base'>[#3453452] - My order is not delivered</p>
                    <div className='pt-2'>
                        <div className='flex justify-between items-baseline'>
                            <div className=' p-4 rounded-md' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                                <div className='flex items-center flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap justify-between'>
                                    <div className='flex items-center'>
                                        <AccountCircleIcon style={{ color: '#008060', fontSize: '40px' }} />
                                        <p className='ml-2 font-medium'>kamal.wixpa.com@gmail.com</p>
                                    </div>
                                    <p className='text-sm'>September 3, 2022 at 12:30 Pm</p>
                                </div>
                                <p className='p-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className='p-4 overflow-x-scroll flex justify-between'>
                                    <div className='w-full'>
                                        <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                                    </div>
                                    <div className='w-full mr-2'>
                                        <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                                    </div>
                                    <div className='w-full mr-2'>
                                        <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                                    </div>
                                    <div className='w-full mr-2'>
                                        <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className='w-[20%] rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                                <div className='p-2'>
                                    <p className='pt-4 font-medium'>Status</p>
                                    <p className='pt-4'>Open</p>
                                    <Button variant='contained' style={{ color: 'white', background: '#d82c0d', marginTop: '10px' }}>
                                        <BlockIcon style={{ fontSize: '20px', marginRight: '2px', color: '#fff' }} />
                                        Close Ticket
                                    </Button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className=' mt-4 p-4 rounded-md' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                        <div className='flex items-center flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap justify-between'>
                            <div className='flex items-center'>
                                <SupportAgentIcon style={{ color: '#008060', fontSize: '40px' }} />
                                <p className='ml-2 font-medium'>@Support</p>
                            </div>
                            <p className='text-sm'>September 3, 2022 at 12:30 Pm</p>
                        </div>
                        <p className='p-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className='p-4 overflow-x-scroll flex justify-between'>
                            <div className='w-full'>
                                <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                            </div>
                            <div className='w-full mr-2'>
                                <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                            </div>
                            <div className='w-full mr-2'>
                                <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                            </div>
                            <div className='w-full mr-2'>
                                <img className='w-[70%]' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
                            </div>
                        </div>
                    </div>

                    <>
                        <div className='mt-4'>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div>
                            <div class="w-full mt-4">
                                <p className='text-sm font-medium text-gray-900'>Add an attachment or drop files here</p>
                                <label
                                    class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                    <span class="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span class="font-medium text-gray-600">
                                            Drop files to Attach, or
                                            <span class="text-blue-600 underline ml-1">browse</span>
                                        </span>
                                    </span>
                                    <input type="file" name="file_upload" class="hidden" />
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-end pt-4 pb-4'>
                            <Button style={{ color: 'white', background: '#008060' }} >Relpy</Button>
                        </div>
                    </>

                </div>
            </div>
        </>
    )
}

export default Suggestions