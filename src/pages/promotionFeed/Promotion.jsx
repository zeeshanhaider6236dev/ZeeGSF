import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import './style.scss';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import VideoModal from "../tutorials/VideoModal";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Promotion = () => {

  // table data

  const [dataArray, setDataArray] = useState([
    { id: 1, title: "John Doe", ID: "123", promoCode: "bc25", category: 'amount off', type: 'amount off', start: "Aug 18, 2022", end: "Aug 18, 2022", productFilters: "Promotion ID", conLang: "US/Eng/PKR", destination: "Shopping ads, Free listing", status: "Policy review disapproved" },
  ]);



  // drawer

  const [showDrawer, setShowDrawer] = useState(false)

  //radio button content show

  const [status, setStatus] = React.useState(1)

  const radioHandler = (status) => {
    setStatus(status);
  };

  const [status2, setStatus2] = React.useState(1)

  const radioHandler2 = (status2) => {
    setStatus2(status2);
  };
  const [status3, setStatus3] = React.useState(1)

  const radioHandler3 = (status3) => {
    setStatus3(status3);
  };


  const [status4, setStatus4] = React.useState(1)

  const radioHandler4 = (status4) => {
    setStatus4(status4);
  };
  const [status5, setStatus5] = React.useState(1)

  const radioHandler5 = (status5) => {
    setStatus5(status5);
  };
  const [status6, setStatus6] = React.useState(1)

  const radioHandler6 = (status6) => {
    setStatus6(status6);
  };
  const [status7, setStatus7] = React.useState(1)

  const radioHandler7 = (status7) => {
    setStatus7(status7);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /// input date today date value

  const todayDate = new Date().toISOString().substr(0, 10);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [text, setText] = useState('')

  ////////////////////////////////////////////////////////////////////

  const [pauseModal, setpauseModal] = useState(false)

  /////////////////////////////////////////////////////////////////


  const [character, setCharacter] = useState('')

  const handleInput = (e) => {
    // cannot use special characters

    setCount1(e.target.value.length)

    const regex = /^[a-zA-Z0-9-_]*$/;
    if (regex.test(e.target.value)) {
      setCharacter(e.target.value);
    }
  }

  /////////////////////////////////////////////////////////////////

  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  return (
    <>
      <div className='p-8'>
        <>
          <p className='pt-2 pb-4'>Offer discounts and free gifts with your products by setting up promotions. Your promotions must meet the participation requirements. <a className='text-blue-600 font-semibold' target='_blank' href='https://support.google.com/merchants/answer/4588748?hl=en'>Learn more</a></p>
        </>
        <>
          <div className='bg-white rounded-md p-3' style={{ boxShadow: '0 0 0.3125rem rgba(23, 24, 24, .05), 0 0.0625rem 0.125rem rgba(0, 0, 0, .15)' }}>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap items-center justify-between pt-1 pb-2'>
              <div className='mr-2 flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap items-center'>
                <Button startIcon={<AddCircleOutlineIcon />} onClick={() => setShowDrawer(true)} variant='contained' style={{ color: 'white', background: '#008060', textTransform: 'capitalize' }}>Create Promotion</Button>
                <VideoModal margin='0 0 0 10px' title='How to setup promotions ?' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
              </div>
              <div class="relative xl:w-[30%] md:w-[25%] sm:w-[28%] 2xl:w-[30%] w-[20%] mt-2 sm:">
                <input type="text" name="hs-table-search" id="hs-table-search" class="block w-full p-2 pl-10 text-sm border border-[#babfc3] rounded-md focus:border-blue-500 focus:ring-blue-500 " placeholder="Promotion Id and title" />
                <SearchIcon style={{ position: 'absolute', top: '10px', left: '10px' }} />
              </div>
            </div>
            <div className="overflow-x-scroll border rounded-lg bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 overflow-x-scroll">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase ">
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Promotion ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Promo code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Promotion Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Promotion Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Start
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      End
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Product applicability
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Target
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 overflow-x-scroll">

                  {dataArray.map((data, index) => (

                    <tr className='hover:bg-gray-100 cursor-pointer' key={data.id}>

                      <td className="px-6 py-2 text-sm font-medium text-blue-400 whitespace-nowrap">
                        {data.title}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.ID}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.promoCode}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.category}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.type}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.start}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.end}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.productFilters}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.conLang}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.destination}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        {data.status}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                        <div class="rounded-md" role="group">
                          <button onClick={() => setpauseModal(!pauseModal)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-md border-2 hover:bg-white  focus:z-10 focus:bg-[#008060] focus:text-white text-black">
                            <PauseCircleFilledIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                            End Promotion
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>


      {/* create promotion drawer component */}

      <>
        {showDrawer ? (
          // <!-- drawer component -->
          <div className=''>
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowDrawer(false)}
            ></div>
            <div style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
              className={`top-0 right-0 overflow-x-auto  rounded-tl-lg rounded-bl-lg w-[95%] sm:w-[85%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[60%] bg-white transition-all  p-4 text-black fixed h-full z-40  ease-in-out duration-900 ${showDrawer ? "translate-x-0 " : "translate-x-full"
                }`}
            >
              <div className='p-2'>
                <p className='text-xl font-medium'>Create Promotion</p>
                <p className='text-sm font-medium pt-2 pb-2'>Tell us about your promotion and where you want to show it.</p>
                <div className='pt-2 pb-4'>
                  <p className='text-sm font-medium pt-2 pb-2'>Target country/region & language</p>
                  <select id="countries" class="border-2 border-[#008060] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                    <option disabled="" value="true">- - Select - -</option>
                    <option value="value 1">United State - English - Dollar</option>
                    <option value="value">Pakistan - Urdu - Pkr</option>
                  </select>
                </div>
                <>
                  <div class="container">
                    <p className='font-medium pb-2'>Promotion Category</p>
                    <div class="grid-wrapper grid-col-auto">
                      <label for="radio-card-1" class="radio-card">
                        <input checked={status === 1} onClick={(e) => radioHandler(1)} className='radioBtn' type="radio" name="radio-card" id="radio-card-1" defaultChecked />
                        <div class="card-content-wrapper">
                          <span class="check-icon"></span>
                          <div class="card-content">
                            <h4><AttachMoneyIcon style={{ fontSize: '50px' }} /></h4>
                            <h5>Amount off</h5>
                          </div>
                        </div>
                      </label>

                      <label for="radio-card-2" class="radio-card">
                        <input checked={status === 2} onClick={(e) => radioHandler(2)} className='radioBtn' type="radio" name="radio-card" id="radio-card-2" />
                        <div class="card-content-wrapper">
                          <span class="check-icon"></span>
                          <div class="card-content">
                            <h4><PercentIcon style={{ fontSize: '50px' }} /></h4>
                            <h5>Percent off</h5>
                          </div>
                        </div>
                      </label>

                      <label for="radio-card-3" class="radio-card">
                        <input checked={status === 3} onClick={(e) => radioHandler(3)} className='radioBtn' type="radio" name="radio-card" id="radio-card-3" />
                        <div class="card-content-wrapper">
                          <span class="check-icon"></span>
                          <div class="card-content">
                            <h4><CardGiftcardIcon style={{ fontSize: '50px' }} /></h4>
                            <h5>Free gift</h5>
                          </div>
                        </div>
                      </label>
                      <label for="radio-card-4" class="radio-card">
                        <input checked={status === 4} onClick={(e) => radioHandler(4)} className='radioBtn' type="radio" name="radio-card" id="radio-card-4" />
                        <div class="card-content-wrapper">
                          <span class="check-icon"></span>
                          <div class="card-content">

                            <h4><LocalShippingIcon style={{ fontSize: '50px' }} /></h4>
                            <h5>Free shipping</h5>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>


                  <>
                    <div className='bg-[#f6f6f7] mt-4 p-4'>
                      <p className='font-medium pb-2'>Promotion Type</p>
                      {status === 1 &&
                        <>
                          <RadioGroup
                            defaultValue="Amount off"
                          >
                            <FormControlLabel checked={status4 === 1} onChange={(e) => radioHandler4(1)}
                              value="Amount off" control={<Radio style={{ color: '#008060' }} />} label="Amount off" />
                            <FormControlLabel checked={status4 === 2} onChange={(e) => radioHandler4(2)} value="Buy quantity of products, get amount off" control={<Radio style={{ color: '#008060' }} />} label="Buy quantity of products, get amount off" />
                            <FormControlLabel checked={status4 === 3} onChange={(e) => radioHandler4(3)} value="Buy quantity of products, get the same item at a discount" control={<Radio style={{ color: '#008060' }} />} label="Buy quantity of products, get the same item at a discount" />
                          </RadioGroup>
                          <>
                            <div className='mt-8'>
                              {status4 === 1 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please an amount' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount amount *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                </>
                              }
                              {status4 === 2 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please an amount' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity purchased *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount amount *" variant="outlined" />
                                </>
                              }
                              {status4 === 3 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity purchased *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity discounted *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please an amount' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount amount *" variant="outlined" />
                                </>
                              }
                            </div>
                          </>
                        </>
                      }
                      {status === 2 &&
                        <>
                          <RadioGroup
                            defaultValue="Percent off"
                          >
                            <FormControlLabel checked={status5 === 1} onChange={(e) => radioHandler5(1)} value="Percent off" control={<Radio style={{ color: '#008060' }} />} label="Percent off" />
                            <FormControlLabel checked={status5 === 2} onChange={(e) => radioHandler5(2)} value="Buy quantity of products, get percent off" control={<Radio style={{ color: '#008060' }} />} label="Buy quantity of products, get percent off" />
                            <FormControlLabel checked={status5 === 3} onChange={(e) => radioHandler5(3)} value="Buy quantity of products, get the same item at a percent off" control={<Radio style={{ color: '#008060' }} />} label="Buy quantity of products, get the same item at a percent off" />
                          </RadioGroup>
                          <>
                            <div className='mt-8'>
                              {status5 === 1 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount percentage *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                </>
                              }
                              {status5 === 2 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity purchased *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount percentage *" variant="outlined" />
                                </>
                              }
                              {status5 === 3 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity purchased *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Quantity discounted *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Discount percentage *" variant="outlined" />
                                </>
                              }
                            </div>
                          </>
                        </>
                      }
                      {status === 3 &&
                        <>
                          <RadioGroup
                            defaultValue="Get a free gift"
                          >
                            <FormControlLabel checked={status6 === 1} onChange={(e) => radioHandler6(1)} value="Get a free gift" control={<Radio style={{ color: '#008060' }} />} label="Get a free gift" />
                            <FormControlLabel checked={status6 === 2} onChange={(e) => radioHandler6(2)} value="Get a gift card" control={<Radio style={{ color: '#008060' }} />} label="Get a gift card" />
                            <FormControlLabel checked={status6 === 3} onChange={(e) => radioHandler6(3)} value="Give a free gift from your inventory" control={<Radio style={{ color: '#008060' }} />} label="Give a free gift from your inventory" />
                          </RadioGroup>
                          <>
                            <div className='mt-8'>
                              {status6 === 1 &&
                                <>
                                  <TextField type='text' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)}
                                    fullWidth size='small' id="outlined-basic" label="Free gift description *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase quantity (optional)" variant="outlined" />
                                </>
                              }
                              {status6 === 2 &&
                                <>
                                  <TextField type='number' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Gift card value *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase quantity (optional)" variant="outlined" />
                                </>
                              }
                              {status6 === 3 &&
                                <>
                                  <TextField type='text' value={text} error={text === ""} helperText={text === "" ? 'Please a value' : ' '} onChange={(e) => setText(e.target.value)} fullWidth size='small' id="outlined-basic" label="Item ID of free gift *" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                  <br />
                                  <br />
                                  <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase quantity (optional)" variant="outlined" />
                                </>
                              }
                            </div>
                          </>
                        </>
                      }
                      {status === 4 &&
                        <>
                          <RadioGroup
                            defaultValue="Free standard shipping"
                          >
                            <FormControlLabel value="Free standard shipping" control={<Radio style={{ color: '#008060' }} />} label="Free standard shipping" />
                            <FormControlLabel value="Free overnight shipping" control={<Radio style={{ color: '#008060' }} />} label="Free overnight shipping" />
                            <FormControlLabel value="Free 2-day shipping" control={<Radio style={{ color: '#008060' }} />} label="Free 2-day shipping" />
                          </RadioGroup>
                          <>
                            <div className='mt-8'>
                              <>
                                <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase amount (optional)" variant="outlined" />
                                <br />
                                <br />
                                <TextField fullWidth size='small' id="outlined-basic" label="Minimum purchase quantity (optional)" variant="outlined" />
                              </>
                            </div>
                          </>
                        </>
                      }
                    </div>
                  </>
                  <Divider style={{ margin: '20px 0 10px 0' }} />
                  <div>
                    <>
                      <p className='text-sm font-medium pt-2 pb-2'>Title</p>
                      <div class="flex rounded-md w-[100%]">
                        <input onChange={e => setCount(e.target.value.length)} maxlength="60" type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" placeholder='Type your promo as you would explain it to customers' />
                        <div class="flex items-center justify-center px-4 mt-1">
                          <span class="w-10 h-6 text-black text-sm">{count}/60</span>
                        </div>
                      </div>
                    </>
                    <>
                      <div className='mt-4 mb-4'>
                        <p className='text-sm font-medium pt-2 pb-2'>Promotion Id</p>
                        <div class="flex rounded-md w-[100%]">
                          <input  value={character} onChange={handleInput} placeholder='Enter an ID that contains only letters, numbers, hyphens, and underscores' maxlength="50" type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                          <div class="flex items-center justify-center px-4 mt-1">
                            <span class="w-10 h-6 text-black text-sm">{count1}/50</span>
                          </div>
                        </div>
                      </div>
                    </>
                    <>
                      <p className='text-sm font-medium pt-2 pb-2'>Destination</p>
                      <div>
                        <FormGroup
                          row
                        >
                          <FormControlLabel control={<Checkbox defaultChecked style={{ color: '#008060' }} />} label="Shopping ads" />
                          <FormControlLabel control={<Checkbox defaultChecked style={{ color: '#008060' }} />} label="Free listings" />
                        </FormGroup>
                      </div>
                    </>
                    <>
                      <p className='text-sm font-medium pt-2 pb-2'>Promotion display dates</p>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                          <p className='mr-4'>Start</p>
                          <div className='flex items-center'>
                            <input type="date" value={todayDate} />
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <p className='mr-4'>End</p>
                          <div className='flex items-center'>
                            <input type="date" />
                          </div>
                        </div>
                      </div>
                      <Divider style={{ margin: '20px 0 10px 0' }} />
                      <p className='text-sm font-medium pt-2 pb-2'>Redemption code</p>
                      <RadioGroup
                        defaultValue="Generic code"
                      >
                        <FormControlLabel checked={status3 === 1} onClick={(e) => radioHandler3(1)} value="Generic code" control={<Radio style={{ color: '#008060' }} defaultChecked />} label="Generic code" />
                        {status3 === 1 &&
                          <>
                            <div className='bg-[#f6f6f7] p-4'>
                              <div className='flex items-center'>
                                <p className='text-sm font-medium'>Discount code</p>
                                <a className='flex items-center text-[#fd0000] text-sm font-medium ml-2' target='_blank' href='https://www.youtube.com/channel/UCeLIW7MIvYmN-8Nw8sefHRA'><YouTubeIcon style={{ color: '#fd0000' }} />Where to get it ?</a>
                              </div>
                              <div class="flex rounded-md w-[100%]"><input type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /></div>
                            </div>
                          </>
                        }
                        <FormControlLabel checked={status3 === 2} onClick={(e) => radioHandler3(2)} value="No code" control={<Radio style={{ color: '#008060' }} />} label="No code" />
                        {status3 === 2 &&
                          <></>
                        }
                      </RadioGroup>
                      <Divider style={{ margin: '10px 0 10px 0' }} />
                      <p className='text-sm font-medium pt-2 pb-2'>Product applicability</p>
                      <RadioGroup
                        defaultValue="Specific products"
                      >
                        <div>
                          <FormControlLabel value="Specific products" control={<Radio style={{ color: '#008060' }} />} label="Specific products" />
                          <Tooltip title='Map the promotion ID to products in your product feed: For Google to recognize the products included in your promotion, submit a value for the promotion ID [promotion ID] attribute and map that to the eligible products in your products feed.' arrow>
                            <HelpIcon style={{ cursor: 'help', color: '#008060' }} />
                          </Tooltip>
                        </div>
                        <FormControlLabel value="All products" control={<Radio style={{ color: '#008060' }} defaultChecked />} label="All products" />
                      </RadioGroup>
                    </>
                  </div>

                </>
                <div className='w-[96%] mt-8 mb-4'>
                  <Divider />
                  <div className='flex justify-start mt-2'>
                    <Button iconStart={<CheckCircleIcon/>} onClick={() => setShowDrawer(false)} style={{ background: "#008060", marginRight: '10px' }} variant="contained">Create Promotion</Button>
                    <Button onClick={() => setShowDrawer(false)} variant="outlined">Cancel</Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : null}
      </>

      {/*   modal show on pause    */}


      {pauseModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setpauseModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                <div className="">
                  <div className='flex items-center p-2'>
                    {/* <ReportProblemIcon style={{ color: '#d82c0d' }} /> */}
                    <p className='text-lg font-medium ml-2'>End this promotion?</p>
                    <CloseIcon onClick={() => setpauseModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='p-4'>
                    <p className='text-sm font-normal' >If you end this promotion, you won't be able to restart it.</p>
                  </div>
                  <Divider style={{ margin: '10px 0 10px 0' }} />
                  <div className='flex justify-end'>
                    <Button onClick={() => setpauseModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                    <Button onClick={() => setpauseModal(false)} style={{ background: "#d82c0d" }} variant="contained">Confirm</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

    </>
  )
}

export default Promotion