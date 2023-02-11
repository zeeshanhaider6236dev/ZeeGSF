import React from 'react'
import { useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@material-ui/core';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import VideoModal from "../tutorials/VideoModal";







const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const GeneralSetting = () => {

  ////////////////////////////////////////////////

  // product from collection Collection show and hide radio state

  const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no.

  const radioHandler = (status) => {
    setStatus(status);
  };

  // Excluded Collection show and hide checkbox state

  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setChecked(!checked);
  }

  //////////////////////////////////////////////////////////////////

  // change account modal

  const [changeAccount, setchangeAccount] = useState(false);

  // save button modal
  const [saveButtonModal, setsaveButtonModal] = useState(false);

  //////////////////////////////////////////////////////////////////


  return (
    <>
      <div className='p-4'>
        <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap items-center mt-2 w-full'>
          <p>Switch to see the saved feed settings</p>
          <select
            id="countries"
            class="text-gray-900 text-sm rounded-md w-[80%] sm:w-[25%] md:w-[20%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] p-2.5 ml-2"
          >
            <option disabled selected value>

              - - select - -
            </option>
            <option value="New">New</option>
            <option value="Refurbished">Refurbished</option>
            <option value="Used">Used</option>
          </select>
          <VideoModal margin='0 0 0 10px' title='Settings - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
        </div>
        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
            <p class='text-md font-medium'>Merchant Details</p>
            <span className='text-sm'>Following are Details that are sent in Google Merchant Center. </span>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>

            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between items-center'>
              <p className='font-medium'>Google Account</p>
              <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap items-center'>
                <p className='mr-2 text-sm'>Wixpa.com@gmail.com</p>
                <button onClick={() => setchangeAccount(!changeAccount)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-md border hover:bg-gray-100 text-black">
                  <ChangeCircleIcon style={{ fontSize: '20px', marginRight: '2px', color: '#d82c0d' }} />
                  Change Account
                </button>
              </div>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between items-center mt-3'>
              <p className='font-medium'>Merchant Center Website</p>
              <div className='flex items-center'>
                <a className='mr-2 text-sm flex items-center border-b border-[#008060] ' target='_blank' href='https://client431.myshopify.com/admin'>https://client431.myshopify.com/admin <CallMadeIcon style={{ fontSize: '16px', color: '#008060', marginLeft: '5px' }} /> </a>
              </div>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between items-center mt-3'>
              <p className='font-medium'>Merchant Center Id</p>
              <p className='mr-2 text-sm'>23452436</p>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between items-center mt-3'>
              <p className='font-medium'>Shopify Markets</p>
              <div class="flex rounded-md w-[100%] sm:w-[42%] md:w-[52%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
                <input disabled value='value from database' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
              </div>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between items-center mt-3'>
              <p className='font-medium'>Primary Feed Settings</p>
              <div class="flex rounded-md w-[100%] sm:w-[42%] md:w-[52%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] justify-between">
                <input disabled value='value' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md mr-2" />
                <input disabled value='value' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md mr-2" />
                <input disabled value='value' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
              </div>
            </div>

          </div>
        </div>
        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
            <p class='text-md font-medium'>Product Webhooks Settings</p>
            <span className='text-sm'>Instantly sync product changes from Shopify</span>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>

            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <RadioGroup

                  defaultValue="Auto"
                  row
                >
                  <div className='flex items-center mr-4 p-2'>
                    <FormControlLabel value="Auto" control={<Radio style={{color:'#008060'}} />} label="Auto" />
                    <Tooltip title="When any changes are performed in your store products, the same changes will be applied simultaneously using Webhooks API inside EasyFeed App." arrow>
                      <HelpIcon style={{ cursor: 'help', color: '#008060' }} />
                    </Tooltip>
                  </div>
                  <div className='flex items-center p-2'>
                    <FormControlLabel value="Manually" control={<Radio style={{color:'#008060'}} />} label="Manually" />
                    <Tooltip title="When any changes are performed in your store products these will not be applied inside EasyFeed App, instead you will be informed through notification by using webhooks API." arrow>
                      <HelpIcon style={{ cursor: 'help', color: '#008060' }} />
                    </Tooltip>
                  </div>
                </RadioGroup>
              </div>
            </div>

          </div>
        </div>
        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
            <p class='text-md font-medium'>Product ID Format</p>
            <span className='text-sm'>Product ID format cannot be changed if submitted feed to Merchant Center is approved.
              Re-approval of feed is required to show ads again once the existing product ID is changed.
              It will take 3-5 days for re-approval, all of the feed history will be deleted. If you still want to change the product id you have to create a new feed and delete the existing feed as well.</span>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>

            <RadioGroup

              defaultValue="value from database"
            >
              <FormControlLabel className='p-2' disabled value="Variant ID" control={<Radio style={{color:'#008060'}} />} label="Variant ID as Product ID (Ex: 123456789)" />
              <FormControlLabel className='p-2' disabled value="SKU as Product ID" control={<Radio style={{color:'#008060'}} />} label="SKU as Product ID (Ex: ABCD1234)" />
              <FormControlLabel className='p-2' disabled value="Global Format" control={<Radio style={{color:'#008060'}} />} label="Global Format (Ex: shopify_US_123456_987654)" />
            </RadioGroup>

          </div>
        </div>
        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
            <p class='text-md font-medium'>Preference Setting</p>
            <span className='text-sm'>This section has the setting options that you have already performed inside configuration page, Any changes in this section will directly affect your feed data so select further options cautiously.</span>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center'>
              <p className='font-medium'>Feed Name</p>
              <div class="flex rounded-md w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
                <input type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Product Title</p>
              <div class="flex rounded-md">
                <RadioGroup
                  row
                  defaultValue="value from database"
                >
                  <FormControlLabel value="Variant ID" control={<Radio style={{color:'#008060'}} />} label="Default Product Title" />
                  <FormControlLabel value="SKU as Product ID" control={<Radio style={{color:'#008060'}} />} label="SEO Title" />
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Product Description</p>
              <div class="flex rounded-md">
                <RadioGroup
                  row
                  defaultValue="value from database"
                >
                  <FormControlLabel value="Variant ID" control={<Radio style={{color:'#008060'}} />} label="Default Product Description" />
                  <FormControlLabel value="SKU as Product ID" control={<Radio style={{color:'#008060'}} />} label="SEO Description" />
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Variant Submission</p>
              <div class="flex rounded-md">
                <RadioGroup
                  row
                  defaultValue="value from database"
                >
                  <FormControlLabel value="Variant ID" control={<Radio style={{color:'#008060'}} />} label="All Variants" />
                  <FormControlLabel value="SKU as Product ID" control={<Radio style={{color:'#008060'}} />} label="First Variant Only" />
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Brand Submission</p>
              <div class="flex rounded-md">
                <RadioGroup
                  row
                  defaultValue="value from database"
                >
                  <FormControlLabel value="Variant ID" control={<Radio style={{color:'#008060'}} />} label="Vendor" />
                  <FormControlLabel value="SKU as Product ID" control={<Radio style={{color:'#008060'}} />} label="Domain" />
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <div className='flex items-center'>
                <p className='font-medium'>Product Identifier Exists</p>
                <Tooltip title="This option will submit all the required product identifiers in the feed. If any identifier value is missing, it will not be submitted. Use this option when your products are updated with all correct unique product identifiers(UPI) same as other merchants for the same product/variant. UPI defines exactly which product you're selling." arrow>
                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                </Tooltip>
              </div>
              <RadioGroup
                row
                defaultValue="value from database"
              >
                <FormControlLabel value="ys" control={<Radio style={{color:'#008060'}} />} label="Yes" />
                <FormControlLabel value="no" control={<Radio style={{color:'#008060'}} />} label="No" />
              </RadioGroup>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <div className='flex items-center'>
                <p className='font-medium'>Barcode (ISBN, UPC, GTIN)</p>
                <Tooltip title="GTIN plays a significant role for data in Google Merchant Center as its major factor for improving your product listing. Products submitted without any GTIN are difficult to classify and may not be eligible for all Shopping programs or features" arrow>
                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                </Tooltip>
              </div>
              <FormControlLabel control={<Checkbox style={{color:'#008060'}} />} label="Do Your Products Have GTINs ?" />
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Sale Price With Compare Price</p>
              <FormControlLabel control={<Checkbox style={{color:'#008060'}} />} label="Enable Sale Price" />
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Product Image Option</p>
              <FormControlLabel control={<Checkbox style={{color:'#008060'}} />} label="Use Second Image For Product Having No Variant" />
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Submit Addtional Images</p>
              <FormControlLabel control={<Checkbox style={{color:'#008060'}} />} label="Check This If You Would Like To Submit Additional Images" />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
            <p class='text-md font-medium'>Sources Management</p>
            <span className='text-sm'>Here you can submit all of your products and also you can
              choose from your collections as well. If you want to exclude
              certain collections you can also do it here.
            </span>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
            <p className='font-medium'>Which Product Needs To Be Submitted in Feed ?</p>
            <RadioGroup

              defaultValue="value from database"
            >
              <FormControlLabel className='p-2' checked={status === 1} onClick={(e) => radioHandler(1)} value="All Products" control={<Radio style={{color:'#008060'}} />} label="All Products" />
              <FormControlLabel className='p-2' checked={status === 2} onClick={(e) => radioHandler(2)} value="Collection" control={<Radio style={{color:'#008060'}} />} label="Products From Collection" />
            </RadioGroup>
            {status === 2 && (
              <div className="mt-2">
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  style={{ width: "auto" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      label="Custom Collections"
                      placeholder="Select Custom Collections"
                    />
                  )}
                />
              </div>
            )}
            <FormControlLabel className='p-2' checked={checked} onChange={handleChecked} control={<Checkbox style={{color:'#008060'}} />} label="Excluded Collection" />
            {checked && (
              <div className="mt-2">
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top10000Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  style={{ width: "auto" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      label="Excluded Collection"
                      placeholder="Select Excluded Collection"
                    />
                  )}
                />
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-between mt-4 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
          <div className='pr-2 w-[50%]'>
          </div>
          <div className='w-[100%] sm:w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center'>
              <p className='font-medium'>Default Google Product Category</p>
              <div className='w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]'>
                <Autocomplete
                  className="Product_Category_SelectDropdoen_1"
                  disablePortal
                  id="combo-box-demo"
                  size="small"
                  options={top1100Films}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Product Category" />
                  )}
                />
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Default Age Group</p>
              <div className='w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]'>
                <select
                  id="countries"
                  class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                >
                  <option disabled selected value>

                    - - select - -
                  </option>
                  <option value="New">New</option>
                  <option value="Refurbished">Refurbished</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Default Gender</p>
              <div className='w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]'>
                <select
                  id="countries"
                  class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                >
                  <option disabled selected value>

                    - - select - -
                  </option>
                  <option value="New">New</option>
                  <option value="Refurbished">Refurbished</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap p-2 2xl:flex-nowrap sm:flex-wrap justify-between items-center mt-3'>
              <p className='font-medium'>Default Product Condition</p>
              <div className='w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]'>
                <select
                  id="countries"
                  class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                >
                  <option disabled selected value>

                    - - select - -
                  </option>
                  <option value="New">New</option>
                  <option value="Refurbished">Refurbished</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end pt-4 pb-4'>
          <Button variant="outlined" style={{ marginRight: '10px' }}>Cancel</Button>
          <Button onClick={() => setsaveButtonModal(!saveButtonModal)} variant="contained" style={{ background: '#008060', color: 'white' }}>Re-Sync</Button>
        </div>

      </div>



      <>
        {/* save bar discard modal  */}
        {changeAccount ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setchangeAccount(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <ReportProblemIcon style={{ color: '#d82c0d' }} />
                      <p className='text-lg font-medium ml-2'>Are you sure ?</p>
                      <CloseIcon onClick={() => setchangeAccount(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p className='text-sm font-normal' >Once you change your gmail account all of your saved product data will be permanently deleted from Google Merchant Center.</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setchangeAccount(false)} style={{ marginRight: '10px' }} variant="outlined">No</Button>
                      <Button onClick={() => { setchangeAccount(false) }} style={{ background: "#d82c0d", color: 'white' }} variant="contained">Change</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
      <>
        {/* save button  modal  */}
        {saveButtonModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setsaveButtonModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <ReportProblemIcon style={{ color: '#ffdf02' }} />
                      <p className='text-lg font-medium ml-2'>Warning</p>
                      <CloseIcon onClick={() => setsaveButtonModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p className='text-sm font-normal' >Upon re-synchronization, earlier changes you have made in product feed settings will be deleted and new product feed settings will be sent to Google Merchant Center.</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setsaveButtonModal(false)} style={{ background: "#d82c0d", marginRight: '10px', color: 'white' }} variant="contained">Discard</Button>
                      <Button onClick={() => { setsaveButtonModal(false) }} style={{ background: "#008060", color: 'white' }} variant="contained">Save</Button>
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
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const top10000Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const top1100Films = [
  { label: "The Shawshank Redemption", value: 1994 },
  { label: "The Godfather", value: 1972 },
  { label: "The Godfather: Part II", value: 1974 },
  { label: "The Dark Knight", value: 2008 },
  { label: "12 Angry Men", value: 1957 },
  { label: "Schindler's List", value: 1993 },
  { label: "Pulp Fiction", value: 1994 },
  { label: "Amadeus", value: 1984 },
  { label: "To Kill a Mockingbird", value: 1962 },
  { label: "Toy Story 3", value: 2010 },
  { label: "Logan", value: 2017 },
  { label: "Full Metal Jacket", value: 1987 },
  { label: "Dangal", value: 2016 },
  { label: "The Sting", value: 1973 },
  { label: "2001: A Space Odyssey", value: 1968 },
  { label: "Singin' in the Rain", value: 1952 },
  { label: "Toy Story", value: 1995 },
  { label: "Bicycle Thieves", value: 1948 },
  { label: "The Kid", value: 1921 },
  { label: "Inglourious Basterds", value: 2009 },
  { label: "Snatch", value: 2000 },
  { label: "3 Idiots", value: 2009 },
  { label: "Monty Python and the Holy Grail", value: 1975 },
];

export default GeneralSetting