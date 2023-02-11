import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
// import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import VideoModal from "../tutorials/VideoModal";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Rating from '@mui/material/Rating';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '@mui/material/Card';
import '../partnerApps/PartnerResponsive.css'




const Dashboard = () => {

  // table data

  const [dataArray, setDataArray] = useState([
    { id: 1, name: "Zeeshan", merchant: "23534324", country: "Pakistan", language: "En/USD", SKUS: "9100", update: "2022-10-10", },
    { id: 2, name: "Kamal", merchant: "234324", country: "Pakistan", language: "Urdu", SKUS: "9300", update: "2023-10-10", },
    { id: 3, name: "Ahsan", merchant: "233454324", country: "Pakistan", language: "Hindi", SKUS: "9090", update: "2024-10-10", },
  ]);


  // deleting data from table

  const removeSite = async (id) => {
    setDataArray((data) => data.filter((dataEach) => dataEach.id !== id));
  };


  // show modal and toasts

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // set timeout in use effect

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  });

  //////////////////////////////////////////////////////////////////////////////

  //character count 
  const [count, setCount] = React.useState(0);

  //////////////////////////////////////////////////////////////////////////////

  //react router dom

  const navigate = useNavigate();
  const setupOnClick = useCallback(() => navigate('/setup', { replace: true }), [navigate]);
  const productsOnClick = useCallback(() => navigate('/Products', { replace: true }), [navigate]);
  const GeneralSettingOnClick = useCallback(() => navigate('/GeneralSetting', { replace: true }), [navigate]);

  // deleting table data on modal delete button

  const [id, setId] = useState(0);
  const handleModal = useCallback((value) => {
    setShowModal(true);
    setId(value);
  }, []);

  ////////////////////////////////////
  // on off Feed Modal
  const [OnModal, setOnModal] = useState(false)
  const [OffModal, setOffModal] = useState(false)
  const [showModalReview, setShowModalReview] = useState(false)
  const [checked, setChecked] = useState([])
  const [Dataid, setDataid] = useState([])
  // console.log(checked)



  const handelmodalOn = () => {
    setChecked((checked) => [...checked, Dataid])
  }
  const handelmodalOff = () => {
    setChecked(checked.filter((item) => item !== Dataid))
  }


  const handelToast = (data) => {
    if (checked.includes(data.id)) {
      setOffModal(true)
    } else {
      setOnModal(true)
    }
    setDataid(data.id)
  }

  ///////////////////////////////////
  // show and hide error
  const [error, setError] = React.useState(true)

  //////////////////////////////////////////////////////////
  const [inputVal, setInputVal] = useState('')
  const [inputVal2, setInputVal2] = useState(false)

  return (
    <>

      <div className="flex flex-col p-4">
        {error ? (
          <>
            <div className="text-black flex items-center justify-between p-4 px-6 w-[100%] py-4 rounded relative mb-4 border border-[#e9c794] bg-[#fff5ea]">
              <span className="text-xl flex items-center inline-block mr-2 align-middle">
                <ErrorOutlineIcon style={{ color: '#b98900' }} />
                <span className="inline-block align-middle text-base font-medium mr-8">
                  We believe you had best time here, please do let us know how's your experience. It means a lot to us
                </span>
              </span>
              <button className=" flex items-center bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none">
                <div className='mr-8 flex items-center'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-lg font-normal'>Good</span>
                    <img className='w-[40px] mr-8' src='https://media2.giphy.com/media/LOnt6uqjD9OexmQJRB/giphy.gif?cid=6c09b95285b5fb2cdca66df269901e916fea26cafe0b9ec8&rid=giphy.gif&ct=g' />
                  </div>
                  <div onClick={() => setShowModalReview(!showModalReview)} className='flex items-center'>
                    <span className='mr-2 text-lg font-normal'>Bad</span>
                    <img className='w-[40px]' src='https://media2.giphy.com/media/h4OGa0npayrJX2NRPT/giphy.gif?cid=6c09b952y0ccm5pjioqdpb1onvojgj78amyj8e6bmcit2hw1&rid=giphy.gif&ct=g' />
                  </div>
                </div>
                <span onClick={() => setError(false)} className='text-3xl font-medium hover:text-red-700'>×</span>
              </button>
            </div>
          </>
        ) : null}
        <div className='flex items-center'>
          <p className="p-2 text-2xl font-medium">All Feeds</p>
          <VideoModal title='Introduction - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
        </div>
        <div className="overflow-x-auto bg-white rounded-lg p-4" style={{
          boxShadow:
            "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
        }}>
          <div className="flex justify-between py-3 pl-2">
            <div className="xl:w-[85%] md:w-[76%] sm:w-[70%] 2xl:w-[89%] w-[40%]">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-2 pl-10 text-sm border border-[#babfc3] rounded-md focus:border-blue-500 focus:ring-blue-500 "
                placeholder="Search..."
              />
            </div>
            <div>
              <Button style={{ background: '#008060' }} onClick={setupOnClick} variant="contained" className="text-white"><AddIcon /> Create Feed</Button>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-scroll border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 overflow-x-scroll">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase ">
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Feed Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Merchant Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Target Country
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Language/Currency
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Total SKU'S
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Last Updated
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 overflow-x-scroll">

                  {dataArray.map((data, index) => (

                    <tr className='hover:bg-gray-100 cursor-pointer' key={data.id}>
                      <td className="py-3 pl-4">
                        <div class="toggle-onoff">
                          <input
                            checked={checked.includes(data.id) ? true : false}
                            name={'checkbox' + data.id}
                            onChange={(e) => handelToast(data)} class="toggle-onoff-checkbox" id={"toggle-onoff" + data.id} tabindex="0" type="checkbox" />
                          <label class="toggle-onoff-label" for={"toggle-onoff" + data.id}>
                            <span class="toggle-onoff-inner"></span>
                            <span class="toggle-onoff-switch"></span>
                          </label>
                        </div>
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.name}
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.merchant}
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.country}
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.language}
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.SKUS}
                      </td>
                      <td onClick={productsOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.update}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        <div class="rounded-md" role="group">
                          <button onClick={productsOnClick} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border-2 hover:bg-white  focus:z-10 focus:bg-[#008060] focus:text-white text-black">
                            <VisibilityIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                            View
                          </button>
                          <button onClick={(e) => handleModal(data.id)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border-t-2 border-b-2 hover:bg-white  focus:z-10 focus:bg-[#008060] focus:text-white text-black">
                            <DeleteIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                            Delete
                          </button>
                          <button onClick={GeneralSettingOnClick} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border-2 hover:bg-white  focus:z-10 focus:bg-[#008060] focus:text-white text-black">
                            <SettingsIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                            Settings
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



      {/* ///////////////////////////////    partner apps slider     //////////////////////////////////////// */}

      {/* <>
        <div className="p-4">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
          }}
          breakpoints={{
              400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
              },
              2000: {
                  slidesPerView: 4,
                  spaceBetween: 50,
              },
              2500: {
                  slidesPerView: 5,
                  spaceBetween: 50,
              },
              3000: {
                  slidesPerView: 6,
                  spaceBetween: 50,
              },
          }}
          >
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className='Partner_App_Instagram' style={{ padding: '10px', display: 'flex', width: '100%' }}>
                  <img style={{ width: '80px', height: '80px' }} src='https://cdn.shopify.com/app-store/listing_images/a6570830ea8be24a54472b4e701c9d1a/icon/CLyg5NaTp_YCEAE=.jpeg?height=60&quality=90&width=60'></img>
                  <div style={{ margin: '0px 0 0 10px' }}>
                    <p variation="strong"><a className='partner__apps' href='https://bit.ly/3ezdVNL' target="_blank"><b>Short Links & Track By Shortly</b></a></p>
                    <p style={{ wordWrap: 'break-all', marginTop: '10px' }}>Create Influencer link,Short links, Offer Discount,Track Sales</p>
                    
                  </div>
                </div>
                <div className='ml-2'>
                  <Button style={{color:'red'}} variant='outlined'><p className='text-blue-700'>Try It Now</p></Button>
                </div>
              </Card>
            </SwiperSlide>

          </Swiper>
        </div>
      </> */}



      {/* ////////////////////////////////////////////////////////////////////////// */}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                <div className="">
                  <div className='flex items-center p-2'>
                    <ReportProblemIcon style={{ color: '#d82c0d' }} />
                    <p className='text-lg font-medium ml-2'>Are You Sure ?</p>
                    <CloseIcon onClick={() => setShowModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='p-4'>
                    <p className='text-sm font-normal' >If you delete your saved feed keep in mind that your product data will be permanently deleted</p>
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='flex justify-end'>
                    <Button onClick={() => setShowModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                    <Button onClick={() => { removeSite(id); setShowModal(false); setShowToast(true) }} style={{ background: "#d82c0d" }} variant="contained">Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}


      {OnModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setOnModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                <div className="">
                  <div className='flex items-center p-2'>
                    <ReportProblemIcon style={{ color: '#d82c0d' }} />
                    <p className='text-lg font-medium ml-2'>Are You Sure ?</p>
                    <CloseIcon onClick={() => setOnModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='p-4'>
                    <p className='text-sm font-normal' >Once you turn on, seamlessly we start sync product data to Google Merchant Center.</p>
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='flex justify-end'>
                    <Button onClick={() => { setOnModal(false) }} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                    <Button onClick={() => { removeSite(id); setOnModal(false); setShowToast(true); handelmodalOn() }} style={{ background: "#008060" }} variant="contained">Turn On</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {OffModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setOffModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                <div className="">
                  <div className='flex items-center p-2'>
                    <ReportProblemIcon style={{ color: '#d82c0d' }} />
                    <p className='text-lg font-medium ml-2'>Are You Sure ?</p>
                    <CloseIcon onClick={() => setOffModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='p-4'>
                    <p className='text-sm font-normal' >If you want to turn it off, new changes will not affect the Google Merchant Center.</p>
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='flex justify-end'>
                    <Button onClick={() => setOffModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                    <Button onClick={() => { removeSite(id); setOffModal(false); setShowToast(true); handelmodalOff() }} style={{ background: "#d82c0d" }} variant="contained">Turn Off</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* ==============   Toast    ================= */}

      {showToast ? (
        <>
          <div id="toast-default" class="flex items-center shadow-black shadow-md p-4 absolute bottom-5 right-5 transition-opacity ease-in-out delay-150 w-full max-w-xs rounded-lg text-white bg-[#202123]" role="alert">
            <div class="ml-3 text-sm font-normal">Deleted Successfully.</div>
            <button onClick={() => setShowToast(false)} type="button" class="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </>
      ) : null}


      {/* -----------Review Modal--------------- */}
      <>
        {showModalReview ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModalReview(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Tell us about your experience</p>
                      <CloseIcon onClick={() => setShowModalReview(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p className='text-sm font-normal'>How would you rate this app?</p>
                      <Rating name="half-rating" defaultValue={2} precision={1} />
                      <p className='text-sm font-normal pt-2 pb-2'>Provide some detail about what you did or did not enjoy about using this app.</p>
                      <div className='relative'>
                        <textarea value={inputVal} onChange={e => { setCount(e.target.value.length); setInputVal(e.target.value) }} id="message" rows="4" class="relative block p-2.5 w-full text-sm text-black rounded-md border border-gray-300" placeholder="Write your thoughts here...">
                        </textarea>
                        <p className='absolute inset-y-2 right-2 top-[80%] z-50 text-gray-500 text-sm'>{count}</p>
                      </div>
                      <p className='text-sm font-normal pt-2 pb-2'>Minimum 100 characters</p>
                      <div className='flex items-center'>
                        <input
                          value={inputVal2} onChange={e => setInputVal2(!inputVal2)}
                          class="w-5 h-5 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          id="flesdxCheckDefault"
                          type="checkbox"
                        />
                        <p className='flex items-center ml-2'>This review is accurate and compliant with&nbsp;</p>
                        <a className='ml-1 ml-1 border-b border-[#008060] text-[#008060]' target="_blank" href="https://www.shopify.com/legal/terms" class="terms_of_service"> Terms of Service <OpenInNewIcon style={{ color: "#008060" }} /> </a>
                      </div>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setShowModalReview(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button
                        disabled={count < 100 ? true : false || inputVal2 === false ? true : false}
                        onClick={() => { setShowModalReview(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>


    </>





  )
}

export default Dashboard

