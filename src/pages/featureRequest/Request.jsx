import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import VideoModal from "../tutorials/VideoModal";




const Request = () => {

  const navigate = useNavigate();
  const YourSuggestionOnClick = useCallback(() => navigate('/YourSuggestion', { replace: true }), [navigate]);
  const SuggestionsOnClick = useCallback(() => navigate('/Suggestions', { replace: true }), [navigate]);

  const [dataArray2, setDataArray2] = useState([
    { id: 1, suggestion: "[#3453452] - My order is not delivered", goodVote: '10', badVote: '2' },
    { id: 2, suggestion: "[#3453452] - My order is not delivered", goodVote: '10', badVote: '2' },
    { id: 3, suggestion: "[#3453452] - My order is not delivered", goodVote: '10', badVote: '2' },
    { id: 4, suggestion: "[#3453452] - My order is not delivered", goodVote: '10', badVote: '2' },
    { id: 5, suggestion: "[#3453452] - My order is not delivered", goodVote: '10', badVote: '2' },
  ]);

  return (
    <>
      <div className='pt-12 pr-2 pl-2 sm:pr-4 md:pr-32 lg:pr-32 xl:pr-32 2xl:pr-32 sm:pl-4 md:pl-32 lg:pl-32 xl:pl-32 2xl:pl-32'>
        <div className='flex flex-wrap justify-between'>
          <VideoModal title='How To Submit Request' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
          <Button onClick={YourSuggestionOnClick} variant='contained' style={{ color: 'white', background: '#008060' }}>Your Suggestion</Button>
        </div>
        <div className='overflow-x-scroll' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
          <table className="overflow-x-scroll min-w-full divide-y divide-gray-200 mt-4 rounded-md">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                >
                  Suggestions List
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                >
                  Vote
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 overflow-x-scroll bg-white">

              {dataArray2.map((data) => (

                <tr className='hover:bg-gray-100 cursor-pointer border-b' key={data.id}>
                  <td onClick={SuggestionsOnClick} className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {data.suggestion}
                    <span class="ml-2 bg-[#aee9d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">In-Review</span>
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                    <div className='flex'>
                      <Button style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }} variant='outlined'><ThumbUpAltIcon style={{ color: '#008060' }} />{data.goodVote}</Button>
                      <Button style={{ display: 'flex', alignItems: 'center' }} variant='outlined'><ThumbDownAltIcon style={{ color: '#d82c0d' }} />{data.badVote}</Button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Request