import React, { useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Button } from '@mui/material';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import Rating from '@mui/material/Rating';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TuneIcon from '@mui/icons-material/Tune';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import PublishIcon from '@mui/icons-material/Publish';
import GetAppIcon from '@mui/icons-material/GetApp';
import Menu from '@mui/material/Menu';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TablePagination from '@mui/material/TablePagination';
import Slider from '@mui/material/Slider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Skeleton from '@mui/material/Skeleton';
import Popover from '@mui/material/Popover';
import VideoModal from "../tutorials/VideoModal";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import upgradeImg from './upgradeImg.png';
import FactCheckIcon from '@mui/icons-material/FactCheck';
//////////////////////////////////////////////////////////////////////////////

const checkboxArray = ['Varient1', 'Varient2'];
const initialState = checkboxArray.reduce((o, key) => ({ ...o, [key]: false }), {})

//////////////////////////////////////////////////////////////////////////////

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

//////////////////////////////////////////////////////////////////////////////


// table data

const userData = [
  { id: 1, name: "Zeeshan", productId: 'asdf1234', score: '100%', googleStatus: 'Disapproved', error: 'Error From Merchant Center', category: 'Home & Garden', age: 'Adult', gender: 'Male', condition: 'New', brand: 'Daraz/Ali Express', productType: 'Apparel & Accessories', promotionId: 'qwert123', label0: '', label1: '', label2: '', label3: '', label4: '' },
  { id: 2, name: "Kamal", productId: 'asdf1234', score: '100%', googleStatus: 'Disapproved', error: 'Error From Merchant Center', category: 'Home & Garden', age: 'Adult', gender: 'Male', condition: 'New', brand: 'Daraz/Ali Express', productType: 'Apparel & Accessories', promotionId: 'qwert123', label0: '', label1: '', label2: '', label3: '', label4: '' },
  { id: 3, name: "Rizwan", productId: 'asdf1234', score: '100%', googleStatus: 'Disapproved', error: 'Error From Merchant Center', category: 'Home & Garden', age: 'Adult', gender: 'Male', condition: 'New', brand: 'Daraz/Ali Express', productType: 'Apparel & Accessories', promotionId: 'qwert123', label0: '', label1: '', label2: '', label3: '', label4: '' },
]

//////////////////////////////////////////////////////////////////////////////
// table data

const Products = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);


  //////////////////////////////////////////////////////////////////////////////



  // pagination
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //////////////////////////////////////////////////////////////////////////////

  // show and hide error
  const [error, setError] = React.useState(true)
  const [error2, setError2] = React.useState(true)

  //////////////////////////////////////////////////////////////////////////////

  // show and hide Modal
  const [showModal, setShowModal] = useState(false);
  const [showExportModal, setshowExportModal] = useState(false);
  const [showImportModal, setshowImportModal] = useState(false);
  const [showEditProductModal, setshowEditProductModal] = useState(false);
  const [showSyncShopifyModal, setshowSyncShopifyModal] = useState(false);
  const [showSyncGoogleModal, setshowSyncGoogleModal] = useState(false);
  const [showIncludeProductModal, setshowIncludeProductModal] = useState(false);
  const [showExcludeProductModal, setshowExcludeProductModal] = useState(false);
  const [showDeleteProductModal, setshowDeleteProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //////////////////////////////////////////////////////////////////////////////

  // show and hide Toast
  const [showToast, setShowToast] = useState(false);
  setTimeout(function () {
    setShowToast(false);
  }, 5000)


  //////////////////////////////////////////////////////////////////////////////

  //character count 
  const [count, setCount] = React.useState(0);

  //////////////////////////////////////////////////////////////////////////////

  // disable button
  const [inputVal, setInputVal] = useState('')
  const [inputVal2, setInputVal2] = useState(false)
  const [inputVal3, setInputVal3] = useState(false)
  const [inputVal4, setInputVal4] = useState(false)
  const [inputVal5, setInputVal5] = useState('')
  const [inputVal6, setInputVal6] = useState('')
  const [inputVal7, setInputVal7] = useState('')
  const [inputVal8, setInputVal8] = useState('')
  const [inputVal9, setInputVal9] = useState('')
  const [inputVal10, setInputVal10] = useState('')

  //////////////////////////////////////////////////////////////////////////////
  // tabs
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //////////////////////////////////////////////////////////////////////////////

  //show buttons on select
  const [showButtons, setShowButtons] = useState(false)

  const handelButtons = () => {
    // if show button is already true then cannot true it again


  }

  //////////////////////////////////////////////////////////////////////////////

  // export modal checkbox
  const [status, setStatus] = React.useState(2) // 0: no show, 1: show yes, 2: show no.

  const radioHandler = (status) => {
    setStatus(status);
  };

  //////////////////////////////////////////////////////////////////////////////

  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Ads Grouping", "Ads Label", "Adult-Orianted Products", "Color", "Cost Of Goods Sold", "Custom Label 0", "Custom Label 1", "Custom Label 2", "Custom Label 3", "Custom Label 4", "Material", "Pattern", "Product Identifier Exists", "Promotion Id", "Shipping Label", "Size", "Size System", "Size Type", "Tax Category", "Unit Pricing Measure", "Unit Pricing Base Measure", "Energy Efficiency Class", "Expiration Date", "Installment", "Is Bundle?", "Loyalty Points", "Max Energy Efficiency Class", "Max Handling Time", "Min Energy Efficiency Class", "Min Handling Time", "Multipack", "Shipping Height", "Shipping Length", "Shipping Weight", "Shipping Width", "Product Height", "Product Length", "Product Weight", "Product Width", "Transit Time Label", "Pause", "Sale Price Effective Date", "Subscription Cost", 'Product highlights (1,2,3,4,5,6)', 'Featured Image', 'Additional Image Links 0', 'Additional Image Links 1', 'Additional Image Links 2', 'Additional Image Links 3', 'Additional Image Links 4', 'Additional Image Links 5', 'Additional Image Links 6', 'Additional Image Links 7', 'Additional Image Links 8', 'Additional Image Links 9'];

  const defalutValue = ['Feed Id', 'Prduct Id', 'Variant Id', 'Title', 'Description', 'Score', 'Product Type', 'Brand', 'Condition', 'Age Group', 'Gender', 'Product Category', 'GTIN']
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ', ' + item;
    })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  //////////////////////////////////////////////////////////////////////////////

  /// filter dropdown
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  //////////////////////////////////////////////////////////////////////////////

  /// sort by score dropdown
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  //////////////////////////////////////////////////////////////////////////////

  // sort by score input range
  const [value1, setValue1] = React.useState([0, 50]);

  const handleChange1 = (event, newValue, activeThumb) => {

    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

  };

  const handleInputChange = (event) => {
    setValue1(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue1[0](0);
    } else if (value > 50) {
      setValue1[0](50);
    }
  };
  const handleInputChange1 = (event) => {
    setValue1(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur1 = () => {
    if (value < 50) {
      setValue1[1](50);
    } else if (value > 100) {
      setValue1[1](100);
    }
  };

  //////////////////////////////////////////////////////////////////////////////

  // add new product drawer

  const [showDrawer, setShowDrawer] = useState(false)

  // tabs in drawer
  const [tab, setTab] = React.useState('1');

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  // drawer checkbox

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked1, setChecked1] = useState({
    Varient1: false,
    Varient2: false
  });

  /* ################################################ */
  /* #### TOGGLES checK STATE BASED ON inputName #### */
  /* ################################################ */

  const toggleCheck = (inputName) => {
    setChecked1((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  /* ###################################################### */
  /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */
  /* ###################################################### */

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked1((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  /* ############################################# */
  /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */
  /* ############################################# */

  // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
  // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked1) {
      if (checked1[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked1]);

  //////////////////////////////////////////////////////////////////////////////

  // active/deactive button in sycn from shopify modal
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive((active) => !active), []);

  const contentStatus = active ? 'Deactivate' : 'Activate';
  const textStatus = active ? 'activated' : 'deactivated';


  //////////////////////////////////////////////////////////////////////////////

  // duplicate select input in sync from shopify modal

  const [persons, setPerson] = useState([<div key={0} className="flex mt-2 justify-between items-center">
    <div className='mr-2 w-[40%]'>
      <select
        id="countries"
        class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
      >
        <option disabled selected value>
          - - select - -
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div className='w-[40%]'>
      <select
        id="countries"
        class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
      >
        <option disabled selected value>
          - - select - -
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  </div>]);


  let handleAddPerson = (e) => {

    e.preventDefault()
    setPerson([...persons, <div key={persons.length} className="flex mt-2 justify-between items-center">
      <div className='mr-2 w-[40%]'>
        <select
          id="countries"
          class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
        >
          <option disabled selected value>
            - - select - -
          </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className='w-[40%]'>
        <select
          id="countries"
          class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
        >
          <option disabled selected value>
            - - select - -
          </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>]);
  }
  let handleRemovePerson = (e) => {
    e.preventDefault()
    setPerson(persons.slice(0, persons.length - 1));
  }
  ////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////

  // search by filter tags

  const [message, setMessage] = useState('');
  const [tags, setTags] = useState([]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleClick = (e) => {
    setAnchorEl2(null)
    // e.preventDefault();
    if (message) {
      setTags([...tags, message]);
      setMessage('');
    } else if (tags.includes(message)) {
      setTags([...tags, message]);
      setMessage('');
    }


  };

  // delete tag

  const deleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  const [productFilters, setProductFilters] = useState([]);

  //  add new Filters 

  const addNewFilters = () => {

    setProductFilters(values => ([...values, '']));

  }

  const deleteFilters = (index) => {
    const newFilters = [...productFilters];
    newFilters.splice(index, 1);
    setProductFilters(newFilters);

  }

  // duplicate search by filter inputs

  // const [persons2, setPerson2] = useState([
  //   <div key={0} className='flex justify-between items-center p-4'>
  //     <div className='mr-2'>
  //       <select onChange={e => setInputVal5(e.target.value)}
  //         id="countries"
  //         class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
  //       >
  //         <option disabled selected value>
  //           - - select - -
  //         </option>
  //         <option value="UdfgS">United States</option>
  //         <option value="CdfgA">Canada</option>
  //         <option value="FdfgR">France</option>
  //         <option value="DdfgE">Germany</option>
  //       </select>
  //     </div>
  //     <div className='mr-2'>
  //       <select onChange={handleChangeInput}

  //         id="countries"
  //         class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
  //       >
  //         <option value='selected' >
  //           - - select - -
  //         </option>
  //         <option value="US">United States</option>
  //         <option value="CA">Canada</option>
  //         <option value="FR">France</option>
  //         <option value="DE">Germany</option>
  //       </select>
  //     </div>
  //   </div>
  // ]);



  // let handleAddPerson2 = (e) => {

  //   // e.preventDefault()
  //   // add all tags to the array
  //   setTags([...tags, message]);

  //   // cannot add empty tags
  //   if (message === '') {
  //     return;
  //   }
  //   // cannot add duplicate tags
  //   if (tags.includes(message)) {
  //     return;
  //   }
  //   // cannot store already values in the array
  //   if (tags.includes(message)) {
  //     return;
  //   }
  //   // add all tags to the array

  //   setMessage('');
  //   setInputVal5('');
  //   setPerson2([...persons2,
  //   <div key={persons.length} className='flex justify-between items-center p-4'>
  //     <div className='mr-2'>
  //       <select onChange={e => setInputVal5(e.target.value)}
  //         id="countries"
  //         class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
  //       >
  //         <option disabled selected value>
  //           - - select - -
  //         </option>
  //         <option value="UdfgS">United States</option>
  //         <option value="CdfgA">Canada</option>
  //         <option value="FdfgR">France</option>
  //         <option value="DdfgE">Germany</option>
  //       </select>
  //     </div>
  //     <div className='mr-2'>
  //       <select onChange={handleChangeInput}

  //         selected={message}
  //         id="countries"
  //         class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
  //       >
  //         <option value='selected' >
  //           - - select - -
  //         </option>
  //         <option value="US">United States</option>
  //         <option value="CA">Canada</option>
  //         <option value="FR">France</option>
  //         <option value="DE">Germany</option>
  //       </select>
  //     </div>
  //     <div>
  //       <Button style={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize', }} onClick={() => deleteInput()}><RemoveCircleIcon style={{ color: '#d72c0d', marginRight: '5px' }} /></Button>
  //     </div>
  //   </div>




  //   ]);

  //   // is message value is already in the array, then don't add it to the array
  //   // if (tags.includes(message)) {
  //   //   alert('already in the array')
  //   //   setTags([...tags, message]);
  //   //   setMessage('');
  //   // }

  // }



  // delete the same input from the array

  // let deleteInput = (index) => {
  //   if (persons2.length > 1) {
  //     const newPersons = [...persons2];
  //     newPersons.splice(index, 1);
  //     setPerson2(newPersons);
  //   }
  //   else {
  //     setPerson2([]);
  //   }
  //   const newTags = [...tags];
  //   newTags.splice(index, 1);
  //   setTags(newTags);
  // }

  // let deleteInput = (index) => {
  //   const newPersons = [...persons2];
  //   newPersons.splice(index, 1);
  //   setPerson2(newPersons);

  //   // delete the same tag from the array
  //   const newTags = [...tags];
  //   newTags.splice(index, 1);
  //   setTags(newTags);

  // }


  ///////////////////////////////////////////////////////////////////////////////////

  // skeleton  loading

  const [loading, setLoading] = useState(true);
  // flase after some time

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////

  // columns customize dropdown

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickColumn = (event) => {
    setAnchorEl(event.currentTarget);
    setupgradeModal(true)

  };

  const handleCloseColumn = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // customize columns tabel column show and hide

  const [idChecked, setidChecked] = useState(true);
  const idChangeHandler = (e) => {
    setidChecked(e.target.checked)
  }

  const [scoreChecked, setscoreChecked] = useState(true);
  const scoreChangeHandler = (e) => {
    setscoreChecked(e.target.checked)
  }
  const [googleStatusChecked, setgoogleStatusChecked] = useState(true);
  const googleStatusChangeHandler = (e) => {
    setgoogleStatusChecked(e.target.checked)
  }
  const [errorChecked, seterrorChecked] = useState(true);
  const errorChangeHandler = (e) => {
    seterrorChecked(e.target.checked)
  }
  const [productChecked, setproductChecked] = useState(true);
  const productChangeHandler = (e) => {
    setproductChecked(e.target.checked)
  }
  const [ageChecked, setageChecked] = useState(true);
  const ageChangeHandler = (e) => {
    setageChecked(e.target.checked)
  }
  const [genderChecked, setgenderChecked] = useState(true);
  const genderChangeHandler = (e) => {
    setgenderChecked(e.target.checked)
  }
  const [conditionChecked, setconditionChecked] = useState(true);
  const conditionChangeHandler = (e) => {
    setconditionChecked(e.target.checked)
  }
  const [brandChecked, setbrandChecked] = useState(true);
  const brandChangeHandler = (e) => {
    setbrandChecked(e.target.checked)
  }
  const [typeChecked, settypeChecked] = useState(true);
  const typeChangeHandler = (e) => {
    settypeChecked(e.target.checked)
  }
  const [lable0Checked, setlable0Checked] = useState(false);
  const lable0ChangeHandler = (e) => {
    setlable0Checked(e.target.checked)
  }
  const [lable1Checked, setlable1Checked] = useState(false);
  const lable1ChangeHandler = (e) => {
    setlable1Checked(e.target.checked)
  }
  const [lable2Checked, setlable2Checked] = useState(false);
  const lable2ChangeHandler = (e) => {
    setlable2Checked(e.target.checked)
  }
  const [lable3Checked, setlable3Checked] = useState(false);
  const lable3ChangeHandler = (e) => {
    setlable3Checked(e.target.checked)
  }
  const [lable4Checked, setlable4Checked] = useState(false);
  const lable4ChangeHandler = (e) => {
    setlable4Checked(e.target.checked)
  }
  const [promotionChecked, setpromotionChecked] = useState(false);
  const promotionChangeHandler = (e) => {
    setpromotionChecked(e.target.checked)
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  // select all from map

  const [checkedLength, setCheckedLength] = useState(0)

  const handleChangeAll = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      if (e.target.checked == true) {
        setCheckedLength(tempUser.length)
      } else {
        setCheckedLength(0)
      }

      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user

      );
      setUsers(tempUser);
      if (e.target.checked == true) {
        setCheckedLength(checkedLength + 1)
      } else {
        setCheckedLength(checkedLength - 1)
      }
    }



    if (e.target.checked == true && !showButtons) {
      setShowButtons(true)
    }

    else if (e.target.checked == false && showButtons) {
      setShowButtons(false)
    }


  };


  /////////////////////////////////////////////////////////////////////////////////////////////

  // react router 

  const navigate = useNavigate();
  const detailOnClick = useCallback(() => navigate('/detail', { replace: true }), [navigate]);





  /////////////////////////////////////////////////////////////////////////////////////////////
  const [showCsvAlert, setshowCsvAlert] = useState(false);
  const [showFile, setShowFile] = useState(true);
  const [fileOutput, setFileOutput] = useState(false);
  const [file, setFile] = useState();
  console.log(file)
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    // if file type is not csv then show error

    if (e.target.files[0].type !== 'text/csv') {
      setshowCsvAlert(true)
      // and cannot upload file
      setFile(null)
    }

    // cannot upload more then 1 file

    if (e.target.files.length > 1) {
      setFile(null)
      alert('You can upload only one file')
    }

    // if file type is csv then hide error

    if (e.target.files[0].type === 'text/csv') {
      setshowCsvAlert(false)
    }

    // if file is empty show file ture

    if (e.target.files.length === 0) {
      setShowFile(true)
      setFileOutput(false)

    }
    if (e.target.files.length === 1) {
      setShowFile(false)
      setFileOutput(true)
    }
    if (e.target.files.length === null) {
      setShowFile(true)
      setFileOutput(false)
    }

  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };


  /////////////////////////////////////////////


  const bulkEditOptionsArray = [
    { label: 'Ads Grouping', value: 'adsGrouping' },
    { label: 'Ads Label', value: 'adsLabels' },
    { label: 'Adult-Orianted Products', value: 'adult' },
    { label: 'Age Group', value: 'ageGroup' },
    { label: 'Condition', value: 'condition' },
    { label: 'Color - Assigned For Feed', value: 'color' },
    { label: 'Custom Cost Of Goods Sold', value: 'costOfGoodsSold' },
    { label: 'Custom Label 0', value: 'customLabel0' },
    { label: 'Custom Label 1', value: 'customLabel1' },
    { label: 'Custom Label 2', value: 'customLabel2' },
    { label: 'Custom Label 3', value: 'customLabel3' },
    { label: 'Custom Label 4', value: 'customLabel4' },
    { label: 'Gender', value: 'gender' },
    { label: 'Google Product Categories', value: 'product_category_id' },
    { label: 'Material - Assigned For Feed', value: 'material' },
    { label: 'Pattern - Assigned For Feed', value: 'pattern' },
    { label: 'Product Identifiers Control', value: 'identifierExists' },
    { label: 'Product Type', value: 'productTypes' },
    { label: 'Promotion Id', value: 'promotionIds' },
    { label: 'Return Policy Label', value: 'return_policy_label' },
    { label: 'Shipping Label', value: 'shippingLabel' },
    { label: 'Size - Assigned For Feed', value: 'sizes' },
    { label: 'Size System', value: 'sizeSystem' },
    { label: 'Size Type', value: 'sizeType' },
    { label: 'Tax Category', value: 'taxCategory' },
    { label: 'Unit Pricing Measure', value: 'unitPricingMeasure' },
    { label: 'Unit Pricing Base Measure', value: 'unitPricingBaseMeasure' },
    { label: 'Vendor (Brand)', value: 'brand' },
    { label: 'Availability Date', value: 'availabilityDate' },
    { label: 'Availability', value: 'availability' },
    { label: 'Energy Efficiency Class', value: 'energyEfficiencyClass' },
    { label: 'Expiration Date', value: 'expirationDate' },
    { label: 'Installment', value: 'installment' },
    { label: 'Is Bundle?', value: 'isBundle' },
    { label: 'Loyalty Points', value: 'loyaltyPoints' },
    { label: 'Max Energy Efficiency Class', value: 'maxEnergyEfficiencyClass' },
    { label: 'Max Handling Time', value: 'maxHandlingTime' },
    { label: 'Min Energy Efficiency Class', value: 'minEnergyEfficiencyClass' },
    { label: 'Min Handling Time', value: 'minHandlingTime' },
    { label: 'Multipack', value: 'multipack' },
    { label: 'Shipping Height', value: 'shippingHeight' },
    { label: 'Shipping Length', value: 'shippingLength' },
    { label: 'Shipping Weight', value: 'shippingWeight' },
    { label: 'Shipping Width', value: 'shippingWidth' },
    { label: 'Product Height', value: 'productHeight' },
    { label: 'Product Length', value: 'productLength' },
    { label: 'Product Weight', value: 'productWeight' },
    { label: 'Product Width', value: 'productWidth' },
    { label: 'Transit Time Label', value: 'transitTimeLabel' },
    { label: 'Pause', value: 'pause' },
    { label: 'Sale Price Effective Date', value: 'salePriceEffectiveDate' },
    { label: 'Subscription Cost', value: 'subscriptionCost' }
  ];

  const [bulkEditOptions, setBulkEditOptions] = useState([]);

  const handleBulkEditChange = (e) => {
    setBulkEditOptions(e.target.value);



    // setBulkEditOptions([...bulkEditOptions, e.target.value]);

    // console.log(bulkEditOptions);
  }


  const [inputs, setInputs] = useState([<select key={1} name={1} onChange={ handleBulkEditChange}
    id="countries" class="w-[50%] mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
    <option disabled selected value> - - select - - </option>
    {bulkEditOptionsArray.map((value, index) => (
      <option value={value.value}>{value.label}</option>
    ))}
  </select>]);

  const addInput = () => {
    setInputs([...inputs, <select key={inputs.length + 1} onChange={handleBulkEditChange}
      id="countries" class="w-[50%] mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
      <option disabled selected value> - - select - - </option>
      {bulkEditOptionsArray.map((value, index) => (
        <option value={value.value}>{value.label}</option>
      ))}
    </select>]);


  };

  const removeInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));

    // setBulkEditOptions(bulkEditOptions.filter((_, i) => i !== index));


  };

  /////////////////////////////////////////////

  const [upgradeModal, setupgradeModal] = useState(false);

  return (
    <>
      <div className='p-2'>

        {error ? (
          <>
            {loading ? (
              <Skeleton variant="rounded" style={{ width: '100%', height: '30vh', marginTop: '10px' }} />
            ) : (
              <div className="text-black px-6 w-[100%] py-4 rounded relative mb-4 border border-green-700 bg-[#f1f8f5]">
                <span className="inline-block font-medium align-middle mr-8">
                  <FactCheckIcon style={{ color: '#008060', marginRight: '10px' }} />
                  Before your products can be approved or desapproved in Google Merchant, you need to make sure that you meet the following requirements:
                </span>
                <ul className='pt-2'>
                  <li className='text-sm pl-8'>1- Add contact information to your store</li>
                  <li className='text-sm pl-8'>2- Add a refund and terms of service policies to your store</li>
                  <li className='text-sm pl-8'>3- Remove the password from your store</li>
                  <li className='text-sm pl-8'>4- Configure tax and shipping information</li>
                  <li className='text-sm pl-8'>5- Add a valid payment methods</li>
                </ul>
                <button className="absolute flex items-center bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none">
                  <div className='mr-8 flex items-center'>
                  </div>
                  <span onClick={() => setError(false)} className='text-3xl font-medium hover:text-red-700'>×</span>
                </button>
                <div className='mt-4'>
                  <Button variant="outlined" target='_blank' href="https://support.google.com/merchants/answer/6363310?hl=en">Learn More</Button>
                </div>
              </div>)}
          </>
        ) : null}
        {error2 ? (
          <>
            {loading ? (
              <Skeleton variant="rounded" style={{ width: '100%', height: '30vh', marginTop: '10px' }} />
            ) : (
              <div className="text-black px-6 w-[100%] py-4 rounded relative mb-4 border border-[#e0b3b2] bg-[#fff4f4]">
                <span className="text-xl inline-block mr-2 align-middle">
                  <GppMaybeIcon style={{ color: '#d72c0d' }} />
                </span>
                <span className="inline-block font-medium align-middle mr-8">
                  Google Merchant Center Account suspended
                </span>
                <ul className='p-2'>
                  <li className='text-sm pl-12'>Account suspended due to policy violation: Misrepresentation</li>
                  <li className='text-sm pl-12'>Account suspended due to policy violation: Misrepresentation (SurfacesAcrossGoogle)</li>
                  <li className='text-sm pl-12'>Account suspended due to policy violation: Misrepresentation (DisplayAds)</li>
                </ul>
                <p className='text-sm p-2'>A policy violation could have occurred before Simprosys Google Shopping Feed was installed.
                  To resolve a policy violation, We have prepared a help article that can help you. Kindly go through it.
                  If you are not dropshipping, you can submit this form. Our team will review the submission details and help you get your account reinstated.</p>
                <div className='flex'>
                  <Button style={{ marginRight: '10px' }} variant="outlined">Watch Help Video</Button>
                  <Button style={{ marginRight: '10px' }} variant="outlined">Go To Merchant Center</Button>
                  <Button>Refresh Account Status</Button>
                </div>
                <button className="absolute flex items-center bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none">
                  <div className='mr-8 flex items-center'>
                  </div>
                  <span onClick={() => setError2(false)} className='text-3xl font-medium hover:text-red-700'>×</span>
                </button>
              </div>)}
          </>
        ) : null}

        <>
          <>
            {loading ? (
              <Skeleton variant="rounded" style={{ width: '100%', height: '50vh', marginTop: '10px', marginBottom: '10px' }} />
            ) : (
              <TabContext value={value}>
                <VideoModal margin='0 0 10px 0' title='Complete Introduction' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label=
                      <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center">
                        All Products
                        <div class="inline-flex ml-1 justify-center items-center w-8 h-5 text-xs font-bold text-black bg-gray-300 rounded-xl ">20+</div>
                      </button>
                      value="1" />
                    <Tab label=
                      <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center">
                        Approved
                        <div class="inline-flex ml-1 justify-center items-center w-8 h-5 text-xs font-bold text-black bg-green-200 rounded-xl ">20+</div>
                      </button>
                      value="2" />
                    <Tab label=
                      <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center">
                        Disapproved
                        <div class="inline-flex ml-1 justify-center items-center w-8 h-5 text-xs font-bold text-black bg-pink-200 rounded-xl ">20+</div>
                      </button>
                      value="3" />
                    <Tab label=
                      <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center">
                        Pending
                        <div class="inline-flex ml-1 justify-center items-center w-8 h-5 text-xs font-bold text-black bg-yellow-200 rounded-xl ">20+</div>
                      </button>
                      value="4" />
                    <Tab label=
                      <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center">
                        Excluded
                        <div class="inline-flex ml-1 justify-center items-center w-8 h-5 text-xs font-bold text-black bg-[#ff330e] rounded-xl ">20+</div>
                      </button>
                      value="5" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {/* {show ? (
              <>
                <div class="rounded-md" role="group">
                  <button type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border-2 hover:bg-white text-black">
                    <VisibilityIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                    View
                  </button>
                  <button type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border-t border-b hover:bg-white text-black">
                    <DeleteIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                    Delete
                  </button>
                  <button type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border-2 hover:bg-white text-black">
                    <SettingsIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                    Settings
                  </button>
                </div>
              </>
            ) : null} */}
                  <div className="flex flex-col mt-2">
                    <div className="bg-white rounded-lg p-4" style={{
                      boxShadow:
                        "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
                    }}>
                      <div className="py-3 pl-2 lg:flex xl:flex 2xl:flex justify-between">
                        <div className="relative w-full lg:w-[25%] xl:w-[40%] 2xl:w-[50%]">
                          <label htmlFor="hs-table-search" className="sr-only">
                            Search
                          </label>
                          <input
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            className="block w-full p-2 mt-[10px] pl-10 text-sm border border-[#babfc3] rounded-md focus:border-blue-500 focus:ring-blue-500 "
                            placeholder="Search..."
                          />
                          {tags.map((tag, index) => (
                            <span id="badge-dismiss-dark" class="mt-2 inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded ">
                              {tag}
                              <button onClick={() => deleteTag(index)} type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Remove badge</span>
                              </button>
                            </span>
                          ))}
                        </div>
                        <div style={{ alignItems: 'baseline' }} className="flex flex-wrap mt-2 lg:m-0 xl:m-0 2xl:m-0 items-center space-x-2 align-baseline">
                          <div className="relative">
                            <button onClick={() => setshowExportModal(true)} className="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black mr-2 border border-gray-300 rounded-md sm:py-2">
                                <PublishIcon style={{ color: '#5c5f62' }} />
                                Export
                              </span>
                            </button>
                            <button onClick={() => setshowImportModal(true)} className="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black mr-2 border border-gray-300 rounded-md sm:py-2">
                                <GetAppIcon style={{ color: '#5c5f62' }} />
                                Import
                              </span>
                            </button>
                            <button aria-controls={open2 ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open2 ? 'true' : undefined} onClick={handleClick2} className="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black mr-2 border border-gray-300 rounded-md sm:py-2">
                                <TuneIcon style={{ color: '#5c5f62' }} />
                                Filters
                              </span>
                            </button>
                            <Menu style={{ marginTop: '5px' }}
                              id="basic-menu"
                              anchorEl={anchorEl2}
                              open={open2}
                              onClose={handleClose2}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                            >
                              <>
                                <div className='pt-2 pb-2 pr-4 pl-4'>
                                  <p>Search By Filters</p>
                                  <Divider />
                                </div>
                                {productFilters.map((val, index) => (
                                  <>
                                    <div value={index} id={"productHighlight" + index} className='flex justify-between items-center p-4'>
                                      <div className='mr-2'>
                                        <select onChange={e => setInputVal5(e.target.value)}
                                          id="countries"
                                          class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
                                        >
                                          <option disabled selected value>
                                            - - select - -
                                          </option>
                                          <option value="UdfgS">United States</option>
                                          <option value="CdfgA">Canada</option>
                                          <option value="FdfgR">France</option>
                                          <option value="DdfgE">Germany</option>
                                        </select>
                                      </div>
                                      <div className='mr-2'>
                                        <select onChange={handleChangeInput}

                                          id="countries"
                                          class="border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800"
                                        >
                                          <option value='selected' >
                                            - - select - -
                                          </option>
                                          <option value="US">United States</option>
                                          <option value="CA">Canada</option>
                                          <option value="FR">France</option>
                                          <option value="DE">Germany</option>
                                        </select>
                                      </div>
                                      <Button style={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize', }}

                                        onClick={() => { deleteFilters(index) }}
                                      ><RemoveCircleIcon style={{ color: '#d72c0d', marginRight: '5px' }} /></Button>
                                    </div>

                                  </>
                                ))}
                                <div className='flex justify-start items-center mt-2 mb-2 pl-4 pr-4'>
                                  <Button style={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize' }} onClick={() => { addNewFilters() }}><AddCircleIcon style={{ color: '#008060', marginRight: '5px' }} /> Add Filters </Button>
                                </div>
                                <div className='pb-2 pr-4 pl-4 w-full'>
                                  <Divider />
                                  <div className='flex justify-between mt-2'>
                                    <Button onClick={(e) => handleClick()} disabled={!inputVal5 || !message} style={{ background: "#008060" }} variant="contained">Apply</Button>
                                    <Button onClick={(e) => { handleClose2(); }} variant="outlined">Cancel</Button>
                                  </div>
                                </div>
                              </>

                            </Menu>
                            <button onClick={handleClickColumn} className="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black mr-2 border border-gray-300 rounded-md sm:py-2">
                                <ViewWeekIcon style={{ color: '#5c5f62' }} />
                                Columns
                              </span>
                            </button>
                            <>
                              <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleCloseColumn}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                }}
                              >
                                <div className='flex flex-col p-4'>

                                  <FormControlLabel onChange={(e) => idChangeHandler(e)} checked={idChecked} control={<Checkbox style={{ color: '#008060' }} />} label="Id" />

                                  <FormControlLabel onChange={(e) => scoreChangeHandler(e)} checked={scoreChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Score" />

                                  <FormControlLabel onChange={(e) => googleStatusChangeHandler(e)} checked={googleStatusChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Google Status" />

                                  <FormControlLabel onChange={(e) => errorChangeHandler(e)} checked={errorChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Error Form Merchant Center" />

                                  <FormControlLabel onChange={(e) => productChangeHandler(e)} checked={productChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Google Product Category" />

                                  <FormControlLabel onChange={(e) => ageChangeHandler(e)} checked={ageChecked} control={<Checkbox style={{ color: '#008060' }} />} label="Age" />

                                  <FormControlLabel onChange={(e) => genderChangeHandler(e)} checked={genderChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Gender" />

                                  <FormControlLabel onChange={(e) => conditionChangeHandler(e)} checked={conditionChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Condition" />

                                  <FormControlLabel onChange={(e) => brandChangeHandler(e)} checked={brandChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Brand" />

                                  <FormControlLabel onChange={(e) => typeChangeHandler(e)} checked={typeChecked} control={<Checkbox style={{ color: '#008060' }} />} label="Product Type" />

                                  <FormControlLabel onChange={(e) => promotionChangeHandler(e)} checked={promotionChecked} control={<Checkbox style={{ color: '#008060' }} defaultChecked />} label="Promotion Id" />

                                  <FormControlLabel onChange={(e) => lable0ChangeHandler(e)} checked={lable0Checked} control={<Checkbox style={{ color: '#008060' }} />} label="Custom Label 0" />

                                  <FormControlLabel onChange={(e) => lable1ChangeHandler(e)} checked={lable1Checked} control={<Checkbox style={{ color: '#008060' }} />} label="Custom Label 1" />

                                  <FormControlLabel onChange={(e) => lable2ChangeHandler(e)} checked={lable2Checked} control={<Checkbox style={{ color: '#008060' }} />} label="Custom Label 2" />

                                  <FormControlLabel onChange={(e) => lable3ChangeHandler(e)} checked={lable3Checked} control={<Checkbox style={{ color: '#008060' }} />} label="Custom Label 3" />

                                  <FormControlLabel onChange={(e) => lable4ChangeHandler(e)} checked={lable4Checked} control={<Checkbox style={{ color: '#008060' }} />} label="Custom Label 4" />

                                </div>
                              </Popover>
                            </>
                            <button aria-controls={open3 ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open3 ? 'true' : undefined} onClick={handleClick3} className="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black mr-2 border border-gray-300 rounded-md sm:py-2">
                                <ScoreboardIcon style={{ color: '#5c5f62' }} />
                                Sort By Score
                              </span>
                            </button>
                            <Menu style={{ marginTop: '5px' }}
                              id="basic-menu"
                              anchorEl={anchorEl3}
                              open={open3}
                              onClose={handleClose3}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                            >
                              <>
                                <div className='pr-4 pl-4 pt-2 pb-2'>
                                  <p className='mb-2'>Sort Your Product By Score</p>
                                  <Divider />
                                </div>
                                <div className='pr-4 pl-4 pb-2'>
                                  <Box sx={{ width: 300, display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                    <Slider style={{ color: '#008060' }}
                                      getAriaLabel={() => 'Minimum distance'}
                                      value={value1}
                                      onChange={handleChange1}
                                      valueLabelDisplay="auto"
                                      getAriaValueText={valuetext}
                                      disableSwap
                                      step={7}
                                      marks
                                      min={0}
                                      max={100}
                                    />
                                  </Box>
                                  <div className='flex justify-between items-center'>
                                    <div className='w-32'>
                                      <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700" >Minimum Score</label > <input onChange={handleInputChange} onBlur={handleBlur} value={value1[0]} type="number" class=" form-control block w-full px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="exampleNumber0" placeholder="Number input" />
                                    </div>
                                    <div className='w-32'>
                                      <label for="exampleNumber1" class="form-label inline-block mb-2 text-gray-700" >Maximum Score</label > <input onChange={handleInputChange1} onBlur={handleBlur1} value={value1[1]} type="number" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="exampleNumber1" placeholder="Number input" />
                                    </div>
                                  </div>
                                </div>
                                <div className='pb-2 pr-4 pl-4 w-full'>
                                  <Divider />
                                  <div className='flex justify-between mt-2'>
                                    <Button onClick={(e) => handleClose3()} style={{ background: "#008060" }} variant="contained">Apply</Button>
                                    <Button onClick={(e) => handleClose3()} variant="outlined">Cancel</Button>
                                  </div>
                                </div>
                              </>
                            </Menu>
                            <button onClick={() => setShowDrawer(!showDrawer)} className="relative sm:mt-2 z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black border border-gray-300 rounded-md sm:py-2">
                                <AddIcon style={{ color: '#5c5f62' }} />
                                Add New Products
                              </span>
                            </button>
                            <>
                              {showDrawer ? (
                                // <!-- drawer component -->
                                <div className=''>
                                  <div
                                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                                    onClick={() => setShowDrawer(false)}
                                  ></div>
                                  <div style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                                    className={`top-0 right-0  rounded-tl-lg rounded-bl-lg w-[95%] sm:w-[85%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[60%] bg-white transition-all  p-4 text-black fixed h-full z-40  ease-in-out duration-900 ${showDrawer ? "translate-x-0 " : "translate-x-full"
                                      }`}
                                  >
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                      <TabContext value={tab}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                            <Tab label="All Product" value="1" />
                                            <Tab label="Product From Collection" value="2" />
                                          </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                          <>
                                            <div class="flex justify-center mt-2">
                                              <div class="mb-3 w-[100vw]">
                                                <div class="input-group relative flex items-stretch w-full mb-4">
                                                  <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                                                  <button class="btn ml-2 inline-block px-6 py-2 border border-gray-300 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                                                </div>
                                              </div>
                                            </div>

                                            <ul class="divide-y divide-gray-100">
                                              <Checkbox style={{ color: '#008060' }} onChange={(event) => selectAll(event.target.checked)}
                                                checked={checkedAll} /> Select All
                                              <li class="pb-3 sm:pb-4 ">
                                                <div class="flex items-center space-x-4 hover:bg-gray-100 p-2">
                                                  <Checkbox style={{ color: '#008060' }} onChange={(event) => selectAll(event.target.checked)}
                                                    checked={checkedAll} />
                                                  <div class="flex-shrink-0">
                                                    <img class="w-10 h-10 rounded-full" src='https://cdn.shopify.com/s/files/1/0265/5043/5911/products/v--1774937877__-684744191_400x.jpg' alt="Neil image" />
                                                  </div>
                                                  <div class="flex-1 min-w-0">
                                                    <p class="text-md text-black truncate">
                                                      Portable 3 in 1 Multifunction Baby Dining/Car Safety Seat
                                                    </p>
                                                  </div>
                                                  <p className="">US$100</p>
                                                </div>
                                                {checkboxArray.map(data => (
                                                  <>
                                                    <Divider />
                                                    <div className="ml-5 pt-2 relative hover:bg-gray-100">
                                                      <Checkbox style={{ color: '#008060' }}
                                                        name={data}
                                                        onChange={() => toggleCheck(data)}
                                                        checked={checked1[data]}
                                                      />
                                                      <label className="text-sm">{data}</label>
                                                      <p className='absolute right-1 top-4'>US$100</p>
                                                    </div>
                                                  </>
                                                ))}
                                              </li>
                                            </ul>
                                          </>
                                        </TabPanel>
                                        <TabPanel value="2">
                                          <>
                                            <div class="flex justify-center mt-2">
                                              <div class="mb-3 w-[100vw]">
                                                <div class="input-group relative flex items-stretch w-full mb-4">
                                                  <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                                                  <button class="btn ml-2 inline-block px-6 py-2 border border-gray-300 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                                                </div>
                                              </div>
                                            </div>

                                            <ul class="divide-y divide-gray-100">
                                              <li class="pb-3 sm:pb-4 pt-3 hover:bg-gray-100">
                                                <div class="flex items-center space-x-4">
                                                  <Checkbox style={{ color: '#008060' }} />
                                                  <div class="flex-shrink-0">
                                                    <img class="w-12 h-12 rounded-full" src='https://cdn.shopify.com/s/files/1/0265/5043/5911/products/v--1774937877__-684744191_400x.jpg' alt="Neil image" />
                                                  </div>
                                                  <div class="flex-1 min-w-0">
                                                    <p class="text-md text-black truncate">
                                                      Home Page
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                              <li class="pb-3 sm:pb-4 hover:bg-gray-100">
                                                <div class="flex items-center space-x-4 mt-3">
                                                  <Checkbox style={{ color: '#008060' }} />
                                                  <div class="flex-shrink-0">
                                                    <img class="w-12 h-12 rounded-full" src='https://cdn.shopify.com/s/files/1/0265/5043/5911/products/v--1774937877__-684744191_400x.jpg' alt="Neil image" />
                                                  </div>
                                                  <div class="flex-1 min-w-0">
                                                    <p class="text-md text-black truncate">
                                                      Test Collection
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </>
                                        </TabPanel>
                                      </TabContext>
                                    </Box>
                                    <div className='absolute bottom-1 w-[96%]'>
                                      <Divider />
                                      <div className='flex justify-between mt-2'>
                                        <Button onClick={() => setShowDrawer(false)} style={{ background: "#008060" }} variant="contained">Apply</Button>
                                        <Button onClick={() => setShowDrawer(false)} variant="outlined">Cancel</Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </>
                          </div>
                        </div>
                      </div>
                      {showButtons ? (
                        <>
                          <div class="rounded-md ml-2 flex items-center" role="group">
                            <button type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border hover:bg-gray-50 text-black">
                              {checkedLength} Selected
                            </button>
                            <button onClick={() => setshowEditProductModal(!showEditProductModal)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-gray-50 text-black">
                              <EditIcon style={{ fontSize: '20px', marginRight: '5px', color: '#3285fa ' }} />
                              Edit Products
                            </button>
                            <button onClick={() => setshowSyncShopifyModal(!showSyncShopifyModal)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border-t border-b hover:bg-gray-50 text-black">
                              <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px"><path fill="#7cb342" d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"></path><path fill="#558b2f" d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z"></path><path fill="#fff" d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z"></path></svg>
                              Sync From Shopify
                            </button>
                            <button onClick={() => setshowSyncGoogleModal(!showSyncGoogleModal)} type="button" class="inline-flex items-center py-2 px-2 border-l text-sm font-medium bg-transparent border-t border-b hover:bg-gray-50 text-black">
                              <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                              Sync From Google
                            </button>
                            <button onClick={() => setshowIncludeProductModal(!showIncludeProductModal)} type="button" class="inline-flex items-center py-2 px-2 border-l text-sm font-medium bg-transparent border-t border-b hover:bg-gray-50 text-black">
                              <CheckCircleIcon style={{ fontSize: '20px', marginRight: '5px', color: '#4CAF50' }} />
                              Include
                            </button>
                            <button onClick={() => setshowExcludeProductModal(!showExcludeProductModal)} type="button" class="inline-flex items-center py-2 px-2 border-l text-sm font-medium bg-transparent border-t border-b hover:bg-gray-50 text-black">
                              <CancelIcon style={{ fontSize: '20px', marginRight: '5px', color: '#FF3D00' }} />
                              Exclude
                            </button>
                            <button onClick={() => setshowDeleteProductModal(!showDeleteProductModal)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border hover:bg-gray-50 text-black">
                              <DeleteIcon style={{ fontSize: '20px', marginRight: '5px', color: '#d72c0d' }} />
                              Delete
                            </button>
                            <Button style={{ marginLeft: '10px' }}>Select all 50+ products</Button>
                          </div>
                        </>
                      ) : null}
                      <div className="w-full inline-block align-middle overflow-x-scroll">
                        <div className="rounded-lg overflow-x w-fit">
                          <table className="divide-y divide-gray-200 table-auto overflow-scroll w-max">
                            <thead className="overflow-x-scroll">
                              <tr>
                                <th scope="col" className="px-4 py-3 text-xs font-bold text-start text-gray-500 uppercase ">
                                  <Checkbox type="checkbox"
                                    className="form-check-input"
                                    name="allSelect" checked={!users.some((user) => user?.isChecked !== true)}
                                    onChange={handleChangeAll} style={{ color: '#008060' }} />

                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Product Name
                                </th>
                                {idChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Id
                                </th>}
                                {scoreChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Score
                                </th>}
                                {googleStatusChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Google Status
                                </th>}
                                {errorChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Error From Merchant Center
                                </th>}
                                {productChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Google Product Category
                                </th>}
                                {ageChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Age
                                </th>}
                                {genderChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Gender
                                </th>}
                                {conditionChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Condition
                                </th>}
                                {brandChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Brand
                                </th>}
                                {typeChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Product Type
                                </th>}
                                {promotionChecked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Promotion Id
                                </th>}
                                {lable0Checked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Custom Label 0
                                </th>}
                                {lable1Checked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Custom Label 1
                                </th>}
                                {lable2Checked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Custom Label 2
                                </th>}
                                {lable3Checked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Custom Label 3
                                </th>}
                                {lable4Checked && <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Custom Label 4
                                </th>}
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-start text-black uppercase "
                                >
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 overflow-x-scroll">

                              {users.map((user, index) => (

                                <tr className='hover:bg-gray-100 cursor-pointer w-screen' key={index}>
                                  <td className="py-1 pl-4">
                                    <div className="flex items-center h-5">
                                      <Checkbox name={user.name}
                                        checked={user?.isChecked || false}
                                        onChange={handleChangeAll} style={{ color: '#008060' }} />
                                    </div>
                                  </td>
                                  <td onClick={detailOnClick} className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <img className='w-10 mr-2' src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg' />
                                      <p className="text-sm font-medium text-gray-800">{user.name}</p>
                                    </div>

                                  </td>
                                  {idChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.productId}
                                  </td>}
                                  {scoreChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm whitespace-nowrap">
                                    <div class="text-xs px-3 py-[3px] bg-teal-100 text-black rounded-full">{user.score}</div>
                                  </td>}
                                  {googleStatusChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-black whitespace-nowrap">
                                    <div class="text-xs px-3 py-[3px] bg-[#fbcfe8] rounded-full">{user.googleStatus}</div>
                                  </td>}
                                  {errorChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-[#d72c0d] whitespace-nowrap">
                                    <ErrorIcon style={{ color: '#d72c0d', fontSize: '22px', marginRight: '5px' }} />{user.error}
                                  </td>}
                                  {productChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.category}
                                  </td>}
                                  {ageChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.age}
                                  </td>}
                                  {genderChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.gender}
                                  </td>}
                                  {conditionChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.condition}
                                  </td>}
                                  {brandChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.brand}
                                  </td>}
                                  {typeChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.productType}
                                  </td>}
                                  {promotionChecked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.promotionId}
                                  </td>}
                                  {lable0Checked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.label0}
                                  </td>}
                                  {lable1Checked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.label1}
                                  </td>}
                                  {lable2Checked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.label2}
                                  </td>}
                                  {lable3Checked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.label3}
                                  </td>}
                                  {lable4Checked && <td onClick={detailOnClick} className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    {user.label4}
                                  </td>}
                                  <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    <div class="rounded-md" role="group">
                                      <button onClick={detailOnClick} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border hover:bg-white text-black">
                                        <EditIcon style={{ fontSize: '20px', marginRight: '2px', color: '#5c5f62' }} />
                                        Edit
                                      </button>
                                      <button onClick={() => setShowDeleteModal(!showDeleteModal)}
                                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border hover:bg-white text-black">
                                        <DeleteIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}

                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/*  pagination */}
                      <>
                        <div className='flex justify-center items-center'>
                          <div>
                            <TablePagination
                              component="div"
                              count={50}
                              page={page}
                              onPageChange={handleChangePage}
                              rowsPerPage={rowsPerPage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item four</TabPanel>
                <TabPanel value="5">Item five</TabPanel>
              </TabContext>)}
          </>
        </>
      </div>




      {/* ------------Export Modal-------------- */}
      <>
        {showExportModal ? (
          <>
            <div className="fixed inset-0 z-10 w-[100%]">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowExportModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full sm:w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[80%] p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Export Products</p>
                      <VideoModal margin='0 0 0 10px' title='Tutorial For Export Products' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowExportModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <RadioGroup row defaultValue='Customize Fields' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FormControlLabel value="Customize Fields" checked={status === 2} control={<Radio
                          onClick={(e) => { radioHandler(2) }} style={{ color: '#008060' }} />} label="Customize Fields" />
                        <FormControlLabel value="All Fields" checked={status === 1} onClick={() => radioHandler(1)} control={<Radio style={{ color: '#008060' }} />} label="All Fields" />
                      </RadioGroup>
                      {status === 1 && <></>}
                      {status === 2 &&
                        <>
                          <Divider />
                          <div className="flex h-[50vh] overflow-y-scroll">
                            <div>
                              {defalutValue.map((item, index) => (
                                <div key={index}>
                                  <Checkbox checked style={{ color: 'gray' }} value={defalutValue} type="checkbox" />
                                  <span className='ml-2.5'>{item}</span>
                                </div>
                              ))}
                            </div>
                            <ul className="mapCheckbox">
                              {checkList.map((item, index) => (
                                <li className="grid-item-device-type-1" key={index}>
                                  <Checkbox value={item} style={{ color: '#008060' }} type="checkbox" onChange={handleCheck} />
                                  <span className={isChecked(item)}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      }
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowExportModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowExportModal(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Export As CSV</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* ------------Import Modal-------------- */}
      <>
        {showImportModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowImportModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Import Products</p>
                      <VideoModal margin='0 0 0 10px' title='Tutorial For Import Products' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowImportModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      {showCsvAlert ? (
                        <div className="text-black flex items-center px-6 w-[100%] py-4 rounded relative mb-4 border border-[#e0b3b2] bg-[#fff4f4]">
                          <span className="text-xl inline-block mr-2 align-middle">
                            <GppMaybeIcon style={{ color: '#d72c0d' }} />
                          </span>
                          <span className="inline-block font-medium text-sm align-middle mr-8">
                            File type must be .csv
                          </span>
                        </div>) : null}
                      <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 d">
                          {showFile ? (
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <span class="bg-blue-100 mt-2 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Add Files</span>
                              <p class="text-xs text-gray-900 mt-2">Accepts .CSV</p>
                            </div>
                          ) : null}
                          {fileOutput ? (
                            <div className="flex items-center"><TextSnippetIcon style={{ color: '#5c5f62' }} />{file && `${file.name} - ${file.type}`}
                              <p class="inline-flex items-center py-1.5 px-2 text-sm font-medium bg-transparent rounded-md border hover:bg-gray-100 text-black ml-4">Replace</p>
                            </div>
                          ) : null}



                          <input id="dropzone-file" accept="text/csv" onChange={handleFileChange} type="file" class="hidden" />
                        </label>
                      </div>
                      <FormControlLabel control={<Checkbox value={inputVal4} onChange={e => setInputVal4(!inputVal4)} style={{ color: '#008060' }} />} label="Overwrite any current products that have the same product id. Existing values will be used for any missing columns" />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowImportModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button disabled={!inputVal4 || !file} onClick={() => { setshowImportModal(false); setShowToast(true); handleUploadClick() }} style={{ background: "#008060" }} variant="contained">Upload and continue</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
      {/* ------------Edit Product Modal-------------- */}
      <>
        {showEditProductModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowEditProductModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-4xl p-4 mx-auto bg-white rounded-lg"
                  style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                >
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Do Edits In Bulk</p>
                      <VideoModal margin='0 0 0 10px' title='Tutorial For Bulk Editing' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowEditProductModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <>
                          {/* <select onChange={handleBulkEditChange}
                            id="countries" class="w-[50%] mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                            <option disabled selected value> - - select - - </option>
                            {bulkEditOptionsArray.map((value, index) => (
                              <option value={value.value}>{value.label}</option>
                            ))}
                          </select> */}

                          <div>
                            {inputs.map((input, index) => (
                              <div className="flex items-baseline mb-2" key={index}>
                                {input}
                                {/* ///////////    Do bulk in edits    /////////// */}
                                <>
                                  {bulkEditOptions === 'adsGrouping' && <input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />}
                                  {bulkEditOptions === 'adsLabels' && <input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />}
                                  {bulkEditOptions === 'adult' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Yes'> Yes </option>
                                    <option value='No'> No </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324508?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}
                                  {bulkEditOptions === 'ageGroup' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Adult'> Adult </option>
                                    <option value='Newborn'> Newborn </option>
                                    <option value='Kids'> Kids </option>
                                    <option value='Infant'> Infant </option>
                                    <option value='Toddler'> Toddler </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324463?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}
                                  {bulkEditOptions === 'condition' && <div className="w-full"><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Used'> Used </option>
                                    <option value='New'> New </option>
                                    <option value='Refurbished'> Refurbished </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324469?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}
                                  {bulkEditOptions === 'color' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324487?hl=en'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'costOfGoodsSold' && <div><input type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/9017895?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'customLabel0' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324473?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'customLabel1' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324473?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'customLabel2' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324473?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'customLabel3' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324473?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'customLabel4' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324473?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'gender' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Male'> Male </option>
                                    <option value='Female'> Female </option>
                                    <option value='Unisex'> Unisex </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324479?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'product_category_id' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Product'> Product </option>
                                    <option value='Product 1'> Product 1 </option>
                                    <option value='Product 2'> Product 2 </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324436?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'material' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324410?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'pattern' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324483?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'identifierExists' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Yes'> Yes </option>
                                    <option value='No'> No </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324478?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'productTypes' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324406?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'promotionIds' && <div><input maxLength='50' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7050148?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'return_policy_label' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /></div>}

                                  {bulkEditOptions === 'shippingLabel' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324504?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'sizes' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324492?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'sizeSystem' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='AU'> AU </option>
                                    <option value='BR'> BR </option>
                                    <option value='CN'> CN </option>
                                    <option value='DE'> DE </option>
                                    <option value='EU'> EU </option>
                                    <option value='FR'> FR </option>
                                    <option value='IT'> IT </option>
                                    <option value='JP'> JP </option>
                                    <option value='MEX'> MEX </option>
                                    <option value='UK'> UK </option>
                                    <option value='US'> US </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324502?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'sizeType' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Regular'> Regular </option>
                                    <option value='Petite'> Petite </option>
                                    <option value='Plus'> Plus </option>
                                    <option value='Tall'> Tall </option>
                                    <option value='Big'> Big </option>
                                    <option value='Maternity'> Maternity </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324497?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'taxCategory' && <div><input maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7569847?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'unitPricingMeasure' && <div><div className='flex items-center justify-between'><input type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='oz'> oz </option>
                                    <option value='lb'> lb </option>
                                    <option value='mg'> mg </option>
                                    <option value='g'> g </option>
                                    <option value='kg'> kg </option>
                                    <option value='floz'> floz </option>
                                    <option value='pt'> pt </option>
                                    <option value='gal'> gal </option>
                                    <option value='ml'> ml </option>
                                    <option value='cl'> cl </option>
                                    <option value='l'> l </option>
                                    <option value='cbm'> cbm </option>
                                    <option value='in'> in </option>
                                    <option value='ft'> ft </option>
                                    <option value='yd'> yd </option>
                                    <option value='cm'> cm </option>
                                    <option value='m'> m </option>
                                    <option value='sqft'> sqft </option>
                                    <option value='sqm'> sqm </option>
                                    <option value='ct'> ct </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324455?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'unitPricingBaseMeasure' && <div><div className='flex items-center justify-between'><input type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='oz'> oz </option>
                                    <option value='lb'> lb </option>
                                    <option value='mg'> mg </option>
                                    <option value='g'> g </option>
                                    <option value='kg'> kg </option>
                                    <option value='floz'> floz </option>
                                    <option value='pt'> pt </option>
                                    <option value='gal'> gal </option>
                                    <option value='ml'> ml </option>
                                    <option value='cl'> cl </option>
                                    <option value='l'> l </option>
                                    <option value='cbm'> cbm </option>
                                    <option value='in'> in </option>
                                    <option value='ft'> ft </option>
                                    <option value='yd'> yd </option>
                                    <option value='cm'> cm </option>
                                    <option value='m'> m </option>
                                    <option value='sqft'> sqft </option>
                                    <option value='sqm'> sqm </option>
                                    <option value='ct'> ct </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324490?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'brand' && <div><input maxLength='70' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324351?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'availabilityDate' && <div><input className="w-full" type='date' /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324470?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'availability' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='In stock'> In stock </option>
                                    <option value='Out of stock'> Out of stock </option>
                                    <option value='Preorder'> Preorder </option>
                                    <option value='Backorder'> Backorder </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324448?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'energyEfficiencyClass' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='A+++'> A+++ </option>
                                    <option value='A++'> A++ </option>
                                    <option value='A+'> A+ </option>
                                    <option value='A'> A </option>
                                    <option value='B'> B </option>
                                    <option value='C'> C </option>
                                    <option value='D'> D </option>
                                    <option value='E'> E </option>
                                    <option value='F'> F </option>
                                    <option value='G'> G </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7562785?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'expirationDate' && <div><input className="w-full" type='date' /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324351?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'installment' && <div><div className='flex items-center justify-between'><input placeholder=' - - Months - - ' type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><input placeholder=' - - Amount - - ' type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324474?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'isBundle' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='Yes'> Yes </option>
                                    <option value='No'> No </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324449?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'loyaltyPoints' && <div><div className='flex items-center justify-between'><input placeholder=' - - Name - - ' type="text" maxLength='24' class="mr-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><input placeholder=' - - Value - - ' type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><input placeholder=' - - Ratio - - ' type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324456?hl=en&ref_topic=6324338#zippy=%2Ctext-feed'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'maxEnergyEfficiencyClass' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='A+++'> A+++ </option>
                                    <option value='A++'> A++ </option>
                                    <option value='A+'> A+ </option>
                                    <option value='A'> A </option>
                                    <option value='B'> B </option>
                                    <option value='C'> C </option>
                                    <option value='D'> D </option>
                                    <option value='E'> E </option>
                                    <option value='F'> F </option>
                                    <option value='G'> G </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7562785?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'maxHandlingTime' && <div><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7388496?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'minEnergyEfficiencyClass' && <div><select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='A+++'> A+++ </option>
                                    <option value='A++'> A++ </option>
                                    <option value='A+'> A+ </option>
                                    <option value='A'> A </option>
                                    <option value='B'> B </option>
                                    <option value='C'> C </option>
                                    <option value='D'> D </option>
                                    <option value='E'> E </option>
                                    <option value='F'> F </option>
                                    <option value='G'> G </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7562785?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'minHandlingTime' && <div><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7388496?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'multipack' && <div><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324488?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'shippingHeight' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324498?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'shippingLength' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324498?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'shippingWeight' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='lb'> lb </option>
                                    <option value='oz'> oz </option>
                                    <option value='kg'> kg </option>
                                    <option value='g'> g </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324498?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'shippingWidth' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324498?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}


                                  {bulkEditOptions === 'productHeight' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/11018531?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'productLength' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/11018531?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'productWeight' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='lb'> lb </option>
                                    <option value='oz'> oz </option>
                                    <option value='kg'> kg </option>
                                    <option value='g'> g </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/11018531?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'productWidth' && <div><div className="flex items-center justify-between"><input type="number" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='inch'> inch </option>
                                    <option value='cm'> cm </option>
                                  </select></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/11018531?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'transitTimeLabel' && <div><input type="text" class="ml-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/9298965?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'pause' && <div><select
                                    id="countries" class="ml-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - select - - </option>
                                    <option value='ads'> ads </option>
                                    <option value='all'> all </option>
                                  </select><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/11909930?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'salePriceEffectiveDate' && <div><div className='mb-6 flex items-center justify-between'><div className='mr-2'><p>Start Date</p><input type='date' /></div><div><p>End Date</p><input className='mr-2' type='date' /></div></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/6324460?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}

                                  {bulkEditOptions === 'subscriptionCost' && <div><div className='flex items-center justify-between'> <select
                                    id="countries" class="mr-2 border-2 border-[#008060] text-gray-900 text-sm rounded-md focus:ring-green-800 focus:border-green-800 block w-full p-2.5  dark:border-green-800 dark:placeholder-gray-400 active:ring-green-800  dark:focus:ring-green-800 dark:focus:border-green-800">
                                    <option disabled selected value> - - Period - - </option>
                                    <option value='Month'> Month </option>
                                    <option value='Year'> Year </option>
                                  </select><input placeholder=' - - Length - - ' type="number" class="mr-2 input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /><input placeholder=' - - Amount - - ' type="number" class=" input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" /></div><a className="text-blue-600 flex font-bold" target='_blank' href='https://support.google.com/merchants/answer/7437904?hl=en&ref_topic=6324338'><p className="text-black font-medium">See </p>: Defination</a></div>}
                                </>
                                {/* ///////////////  bulk edits end   ////////////// */}
                                <button onClick={() => removeInput(index)}>Remove</button>
                              </div>
                            ))}
                            <button onClick={addInput}>Add Input</button>
                          </div>

                      </>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end mt-2'>
                      <Button style={{ marginRight: '10px' }} onClick={(e) => { setshowEditProductModal(!showEditProductModal); setInputVal10('') }} variant="outlined">Cancel</Button>
                      <Button onClick={(e) => { setshowEditProductModal(!showEditProductModal); setInputVal10('') }} disabled={!inputVal8 || !inputVal9 || !inputVal10} style={{ background: "#008060" }} variant="contained">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>


        ) : null}
      </>

      {/* ------------sync from shopify Modal-------------- */}

      <>
        {showSyncShopifyModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowSyncShopifyModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-[66%] p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Sync From Shopify</p>
                      <VideoModal margin='0 0 0 10px' title='Tutorial For Shopify Sync' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowSyncShopifyModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <div className='p-2 rounded-md'
                        style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                      >
                        <div className='flex justify-between items-center'>
                          <FormControlLabel control={<Checkbox style={{ color: '#008060' }} />} label="Title" />
                          <FormControlLabel labelPlacement="start" control={<Checkbox style={{ color: '#008060' }} />} label="Seo Title" />
                        </div>
                        <div className='flex justify-between items-center'>
                          <FormControlLabel control={<Checkbox style={{ color: '#008060' }} />} label="Description" />
                          <FormControlLabel labelPlacement="start" control={<Checkbox style={{ color: '#008060' }} />} label="Seo Description" />
                        </div>
                        <div className='flex justify-between items-center'>
                          <FormControlLabel control={<Checkbox style={{ color: '#008060' }} />} label="Product Variant Image" />
                          <FormControlLabel labelPlacement="start" control={<Checkbox style={{ color: '#008060' }} />} label="Product Additional Images" />
                        </div>
                      </div>
                      <div className='p-4 rounded-md mt-4'
                        style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                      >
                        <div className="flex justify-between items-center">
                          <p>Metafields settings is {textStatus}.</p>
                          <Button onClick={handleToggle} style={{ background: "#008060", textTransform: 'capitalize' }} variant="contained">{contentStatus}</Button>

                        </div>
                      </div>
                      {
                        active ? (
                          <div className='p-4 rounded-md mt-4'
                            style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                          >

                            <>
                              <p>Please choose which metafields you would like to sync from your store along with product information.</p>
                              <RadioGroup
                                defaultValue="None"
                                row
                                style={{ justifyContent: 'space-between' }}
                              >
                                <FormControlLabel value="Product" control={<Radio style={{ color: '#008060' }} />} label="Product" />
                                <FormControlLabel value="Variant" control={<Radio style={{ color: '#008060' }} />} label="Variant" />
                                <FormControlLabel value="None" control={<Radio style={{ color: '#008060' }} />} label="None" />
                              </RadioGroup>
                              {persons}
                              <div className='flex justify-between items-center mt-2'>
                                <Button style={{ display: 'flex', alignItems: 'center' }} onClick={handleAddPerson}><AddCircleOutlineIcon style={{ color: '#008060', marginRight: '5px' }} /> ADD </Button>
                                <Button style={{ display: 'flex', alignItems: 'center' }} disabled={persons.length === 1} onClick={handleRemovePerson}><RemoveCircleOutlineIcon style={{ color: '#d72c0d', marginRight: '5px' }} /> Remove</Button>
                              </div>
                            </>
                          </div>
                        ) : null}
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowSyncShopifyModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowSyncShopifyModal(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* ------------sync from google Modal-------------- */}

      <>
        {showSyncGoogleModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowSyncGoogleModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Sync From Google</p>
                      <VideoModal margin='0 0 0 10px' title='Tutorial Google Sync' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowSyncGoogleModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p>Our App will itself sync the data from Shopify to Google seamlessly when ever changes are applied. But if you want to do it yourself then click Apply</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowSyncGoogleModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowSyncGoogleModal(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* ------------Include Product Modal-------------- */}
      <>
        {showIncludeProductModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowIncludeProductModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Include Product</p>
                      <VideoModal margin='0 0 0 10px' title='How To Include Product' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowIncludeProductModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p>Do you want to add your product in current feed ?</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowIncludeProductModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowIncludeProductModal(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* ------------Exclude Product Modal-------------- */}

      <>
        {showExcludeProductModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowExcludeProductModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Exclude Product</p>
                      <VideoModal margin='0 0 0 10px' title='How To Exclude Product' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      <CloseIcon onClick={() => setshowExcludeProductModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p>Do you want to remove your product from current feed ?</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowExcludeProductModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowExcludeProductModal(false); setShowToast(true) }} style={{ background: "#008060" }} variant="contained">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* ------------Exclude Product Modal-------------- */}
      <>
        {showDeleteProductModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowDeleteProductModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <p className='text-lg font-medium ml-2'>Delete Product</p>
                      <CloseIcon onClick={() => setshowDeleteProductModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p>Are you sure to delete this product ?</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setshowDeleteProductModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setshowDeleteProductModal(false); setShowToast(true) }} style={{ background: "#d82c0d" }} variant="contained">Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>


      {/* ------------Delete Product Modal-------------- */}
      <>
        {showDeleteModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowDeleteModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <ReportProblemIcon style={{ color: '#d82c0d' }} />
                      <p className='text-lg font-medium ml-2'>Are You Sure ?</p>
                      <CloseIcon onClick={() => setShowDeleteModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p className='text-sm font-normal' >Do you want delete This Product</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setShowDeleteModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button onClick={() => { setShowDeleteModal(false); setShowToast(true) }} style={{ background: "#d82c0d" }} variant="contained">Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>


      {/* ------------Toast-------------- */}
      <>
        {showToast ? (
          <>
            <div id="toast-default" class="flex items-center shadow-black shadow-md p-4 absolute bottom-5 right-5 transition-opacity ease-in-out delay-150 w-full max-w-xs rounded-lg text-white bg-[#202123]" role="alert">
              <div class="ml-3 text-sm font-normal">Submit Successfully.</div>
              <button onClick={() => setShowToast(false)} type="button" class="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </>
        ) : null}
      </>



      {/* ------------  upgrade modal  -------------- */}

      <>
        {upgradeModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setupgradeModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <CloseIcon onClick={() => setupgradeModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <div className='p-4'>
                      <p className='text-2xl text-center font-medium' >It’s Time for Your Upgrade!</p>
                      <p className='text-md text-center font-normal' >You have reached the limit of your current plan.<br />To add extra features,you need to choose a higher plan.</p>
                      <div className="flex justify-center">
                        <img className="w-[70%]" src={upgradeImg} />
                      </div>
                      <p className='text-md text-center font-normal'>By using this coupon <b><i>Tokyo%20</i></b>&nbsp; you will get 20% Off only on Unlimited Plan</p>
                    </div>
                    <div className='flex justify-center'>
                      <Button onClick={() => setupgradeModal(false)} style={{ marginRight: '10px', background: '#fa6102' }} variant="contained">Upgrade Now</Button>
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

export default Products