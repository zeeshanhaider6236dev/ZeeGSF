import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@material-ui/core';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import VideoModal from '../tutorials/VideoModal'

const HelpCenter = () => {
  //////////////////////////////////////

  // tabs
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //////////////////////////////////////

  // table data

  const [dataArray, setDataArray] = useState([
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Open' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Open' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Open' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Open' },
  ]);
  const [dataArray2, setDataArray2] = useState([
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Closed' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Closed' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Closed' },
    { id: 1, title: "[#3453452] - My order is not delivered", created: "Aug 25, 2020", lastActivity: 'June 24, 2022', status: 'Closed' },
  ]);

  //////////////////////////////////////////////

  const navigate = useNavigate();
  const ReplyTicketsOnClick = useCallback(() => navigate('/ReplyTickets', { replace: true }), [navigate]);
  const NewTicketsOnClick = useCallback(() => navigate('/NewTickets', { replace: true }), [navigate]);
  const CloseTicketsOnClick = useCallback(() => navigate('/CloseTickets', { replace: true }), [navigate]);

  return (
    <>
      <div className='pt-12 pl-2 sm:pl-8 md:pl-20 lg:pl-20 xl:pl-20 2xl:pl-20 pr-2 sm:pr-8 md:pr-20 lg:pr-20 xl:pr-20 2xl:pr-20'>
        <div className='pt-4 pb-4'>
          <div className='flex items-center'>
            <p className='text-xl font-medium'>My Tickets</p>
            <VideoModal margin='0 0 0 10px' title='How To Open Tickets' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
          </div>
          <span>Opening this ticket will lead you to our technical support team</span>
        </div>
        <div className='pt-2 pb-2 flex justify-end'>
          <Button onClick={NewTicketsOnClick} style={{ background: '#008060', color: 'white' }} variant='contained' endIcon={<MessageIcon />}>Create New Tickets</Button>
        </div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Open Tickets" value="1" />
                <Tab label="Close Tickets" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className='overflow-scroll' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                <table className="overflow-scroll min-w-full divide-y divide-gray-200 mt-4 rounded-md">
                  <thead className="bg-white overflow-x-scroll">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Last Activity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 overflow-x-scroll bg-white">

                    {dataArray.map((data) => (

                      <tr onClick={ReplyTicketsOnClick} className='hover:bg-gray-100 cursor-pointer border-b' key={data.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {data.title}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {data.created}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {data.lastActivity}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          <span class="ml-2 bg-[#aee9d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{data.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className='overflow-scroll' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
                <table className="overflow-scroll min-w-full divide-y divide-gray-200 mt-4 rounded-md">
                  <thead className="bg-white overflow-x-scroll">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Last Activity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 overflow-x-scroll bg-white">

                    {dataArray2.map((data) => (

                      <tr onClick={CloseTicketsOnClick} className='hover:bg-gray-100 cursor-pointer border-b' key={data.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {data.title}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {data.created}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {data.lastActivity}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                          <span class="ml-2 bg-[#fed3d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{data.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  )
}

export default HelpCenter