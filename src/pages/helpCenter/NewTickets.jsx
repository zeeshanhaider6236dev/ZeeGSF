import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Button } from '@material-ui/core';
import BlockIcon from '@mui/icons-material/Block';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewTickets = () => {

    const navigate = useNavigate();
    const HelpCenterOnClick = useCallback(() => navigate('/HelpCenter', { replace: true }), [navigate]);

    return (
        <>
            <div className='p-16'>
                <Button onClick={HelpCenterOnClick} variant='outlined' style={{ marginBottom: '10px' }} ><ArrowBackIcon /></Button>
                <div className='p-4 rounded-md bg-white' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                    <p className='pb-2 text-sm font-medium'>Create A New Support Tickets</p>
                    <div className='mt-4'>
                        <p className='text-sm font-medium'>Email</p>
                        <input type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm font-medium'>Subject</p>
                        <input type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                    </div>
                    <div className='mt-4'>
                        <label for="message" class="block text-sm font-medium text-gray-900 ">Description</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-[#babfc3]" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm font-medium'>Add an attachment or drop files here</p>
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

                    <div className='flex justify-end pt-4'>
                        <Button variant='contained' style={{ color: 'white', background: '#008060' }} >Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewTickets