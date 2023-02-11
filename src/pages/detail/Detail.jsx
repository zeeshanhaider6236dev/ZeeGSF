import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SyncIcon from '@mui/icons-material/Sync';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Divider } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TitleIcon from '@mui/icons-material/Title';
import ErrorIcon from '@mui/icons-material/Error';
import DescriptionIcon from '@mui/icons-material/Description';
import GoogleIcon from '@mui/icons-material/Google';
import InventoryIcon from '@mui/icons-material/Inventory';
import StyleIcon from '@mui/icons-material/Style';
import DiscountIcon from '@mui/icons-material/Discount';
import PhotoIcon from '@mui/icons-material/Photo';
import GppGoodIcon from '@mui/icons-material/GppGood';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BackupIcon from '@mui/icons-material/Backup';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SortableList, { SortableItem } from "react-easy-sort";
import { makeStyles } from "@material-ui/core";
import arrayMove from "array-move";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoModal from "../tutorials/VideoModal";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    userSelect: "none",
    alignItems: "start",
  },
  item: {
    position: "relative",
    height: 'fitContent',
    flexShrink: 0,
    display: "flex",
    margin: 8,
    cursor: "grab",
    userSelect: "none",
    boxShadow: "0px 6px 6px -3px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: 150,
    height: 150,
    pointerEvents: "none",
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0
  },
  dragged: {
    boxShadow:
      "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
    "& button": {
      opacity: 0
    }
  }
});

const Detail = (props) => {

  ///////////////////////////////////////////////////////////////////////////////////

  // tabs 

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // active tab on button click

  const handleScoreTab = () => {
    setValue('2');
  }
  const handleDetailTab = () => {
    setValue('1');
  }

  ///////////////////////////////////////////////////////////////////////////////////

  // 1st input character count / score / color / persentage / banner

  const [scoreData, setScoreData] = React.useState({
    count: 0,
    color: '#ffd79d',
    score: 'Poor',
    persent: 10
  })


  const handelScoreData = (e) => {

    //  banner show hide

    if (e.target.value.length > 0 && !showBanner) {
      setShowBanner(true)
    } else if (e.target.value.length === 0) {
      setShowBanner(false)
    }

    //  score data change on condition

    setScoreData({
      count: e.target.value.length,
      color: '#ffd79d',
      score: 'Poor',
      persent: 10
    })
    if (scoreData.count >= 30 && scoreData.count <= 50) {
      setScoreData({
        count: e.target.value.length,
        color: '#fed3d1',
        score: 'Okay',
        persent: 30
      })
    } else if (scoreData.count >= 50 && scoreData.count <= 80) {
      setScoreData({
        count: e.target.value.length,
        color: '#aee9d1',
        score: 'Good',
        persent: 50
      })
    } else if (scoreData.count >= 80) {
      setScoreData({
        count: e.target.value.length,
        color: '#a4e8f2',
        score: 'Excellent',
        persent: 100
      })
    }

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////

  //   Quill text editor
  const [value1, setValue1] = useState('');

  ////////////////////////////////////////////////////////////////////

  //  input chracter counter state

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);
  const [count6, setCount6] = React.useState(0);
  const [count7, setCount7] = React.useState(0);
  const [count8, setCount8] = React.useState(0);
  const [count9, setCount9] = React.useState(0);
  const [count10, setCount10] = React.useState(0);
  const [count11, setCount11] = React.useState(0);
  const [count12, setCount12] = React.useState(0);
  const [count13, setCount13] = React.useState(0);
  const [count14, setCount14] = React.useState(0);
  const [count15, setCount15] = React.useState(0);
  const [count16, setCount16] = React.useState(0);
  const [count17, setCount17] = React.useState(0);
  const [count18, setCount18] = React.useState(0);
  const [count19, setCount19] = React.useState(0);
  const [count20, setCount20] = React.useState(0);


  ////////////////////////////////////////////////////////////////////////////

  //input field with tags  //    promotion id field

  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  // duplicate product highlights component

  const [productHighlights, setProductHighlights] = useState([]);

  //  add new highlights 

  const addNewHighlights = () => {

    setProductHighlights(values => ([...values, '']));

  }

  //  delete highlights

  const deleteHighlights = (e) => {
    const index = e.target.id;
    const values = [...productHighlights];
    values.splice(index, 1);
    setProductHighlights(values);
  }

  ////////////////////////////////////////////////////////////////////////////

  //  duplicate section component

  const [productSection, setProductSection] = useState([]);

  //  add new section 

  const addSection = () => {

    setProductSection(values => ([...values, '']));

  }

  //  delete section

  const deleteSection = (e) => {
    const index = e.target.id;
    const values = [...productSection];
    values.splice(index, 1);
    setProductSection(values);
  }

  ////////////////////////////////////////////////////////////////////////

  // save and discard banner

  const [showBanner, setShowBanner] = useState(false);

  const handelBanner = (event) => {

    setCount1(event.target.value.length)

    if (event.target.value.length > 0 && !showBanner) {
      setShowBanner(true)
    } else if (event.target.value.length === 0) {
      setShowBanner(false)
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  // delete modal

  const [DiscardModal, setDiscardModal] = useState(false);

  // upolad modal

  const [showUploadModal, setShowUploadModal] = useState(false);

  // sycn from shopify modal

  const [showSyncShopifyModal, setshowSyncShopifyModal] = useState(false);

  // active/deactive button in sycn from shopify modal
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive((active) => !active), []);

  const contentStatus = active ? 'Deactivate' : 'Activate';
  const textStatus = active ? 'activated' : 'deactivated';

  ///////////////////////////////////////////////////////////////////////////////

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
  //////////////////////////////////////////////////////////////////////////////


  // show and hide Toast
  const [showToast, setShowToast] = useState(false);
  setTimeout(function () {
    setShowToast(false);
  }, 5000)


  //////////////////////////////////////////////////////////////////////////////

  // upolad image form ulr

  const [valueInput, setValueInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handelUpolad = () => {
    setImgUrl(valueInput)

  }


  ///////////////////////////////////////////////////////////////////////////////
  const classes = useStyles();
  const [items, setItems] = React.useState([
    {
      name: "Alpha",
      image:
        "https://i.pinimg.com/originals/b4/ca/d3/b4cad383cb86d190895c881f630de028.gif"
    },
    {
      name: "Bravo",
      image:
        "https://photographyfirm.co.uk/wp-content/uploads/2019/02/01-BIOMEL-LIFESTYLE-10.gif"
    },
    {
      name: "Charlie",
      image:
        "https://cdn.dribbble.com/users/1431073/screenshots/3924276/dribbble-12.gif"
    },
    {
      name: "Delta",
      image:
        "https://thumbs.gfycat.com/FixedDarkCony-max-1mb.gif"
    },
    {
      name: "Echo",
      image:
        "https://images.squarespace-cdn.com/content/v1/5a8b6da0ccc5c51cc17dbfad/1579397290150-NXA42X77BAXC86O7022Q/Matchless+Coffee+Soda+GIF+3.gif?format=1500w"
    },
    {
      name: "Foxtrot",
      image:
        "https://i.pinimg.com/originals/54/28/5f/54285ff330c3efb53ca1fdbdc526c718.gif"
    },
    {
      name: "Golf",
      image:
        "https://images.squarespace-cdn.com/content/v1/60294430a09a6e274c894620/83040c04-2718-43c1-a6b6-8aa649e438eb/Balance-me-skincare-STOP-MOTION-Vera-Change.gif?format=500w"
    },
    {
      name: "Hotel",
      image:
        "https://www.pixeleyesphotography.co.uk/wp-content/uploads/2019/03/play.gif"
    },
    {
      name: "India",
      image:
        "https://images.squarespace-cdn.com/content/v1/55876e97e4b04f0a4c0ab059/1554750784458-J76B1UVY3OEDBMAF6973/NEW_WASH_OG.gif"
    },
    {
      name: "Juliett",
      image:
        "https://www.pocko.com/wp-content/uploads/2021/06/Josh.Dickinson.MCJ4_.jpg"
    },
    {
      name: "Kilo",
      image:
        "https://michaelheeney.com/wp-content/uploads/2020/03/CLEANSERS_LINEUP_2020_GIF.gif"
    },
  ]);


  // slice in arry

  const [items2, setItems2] = React.useState(items.slice(0, 12));



  console.log('items', items)



  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));

  };

  ///////////////////////////////////////////////////////////////////////////////

  // upolad image  from computer


  const onChangePicture = e => {
    if (e.target.files) {
      console.log('e.target.files', e.target.files[0].name)
      //  if image length is greater than 11 than show a alert
      if (items.length >= 11) {
        alert("you can't add more than 11 images")
        return;
      }
      for (var i = 0; i < e.target.files.length; i++) {

        //only add png and jpg files
        if (e.target.files[i].type !== "image/png" && e.target.files[i].type !== "image/jpeg" && e.target.files[i].type !== "image/webp" && e.target.files[i].type !== "image/gif" && e.target.files[i].type !== "image/bmp" && e.target.files[i].type !== "image/tiff") {
          alert("you can only upload JPEG,WebP,PNG,GIF,BMP,and TIFF files")
          return;
        }

        // if file name is same then give random name

        for (var j = 0; j < items.length; j++) {
          if (items[j].name === e.target.files[i].name) {
            let name = e.target.files[i].name.split(".")[0];
            let ext = e.target.files[i].name.split(".")[1];
            let newName = name + Math.floor(Math.random() * 1000) + "." + ext;
            e.target.files[i].name = newName;
          }
        }

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.addEventListener("load", () => {
          let dddd = 0;
          let name = e.target.files[dddd].name.split(".")[0];
          let ext = e.target.files[dddd].name.split(".")[1];
          let newName = name + Math.floor(Math.random() * 1000) + "." + ext;

          setItems(items => [...items, { name: newName, image: reader.result }])
          dddd++;
        });

      }
    }

  };

  ///////////////////////////////////////////////////////////////////////////////
  // delete the checked item

  const [checkedItem, setCheckedItem] = useState([])


  const handleChecked = (index) => {

    setCheckedItem([...checkedItem, index])

  }

  // delete the checked item from the array

  const deleteItem = () => {
    setItems(items.filter((item, index) => !checkedItem.includes(index)))
    setCheckedItem([])
  }


  ///////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();
  const dashboardOnClick = useCallback(() => navigate('/products', { replace: true }), [navigate]);



  ///////////////////////////////////////////////////////////////////////////////

  // additionl setting

  const [setting, setSetting] = useState(false)

  ///////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {/*    save and discard banner    */}
      <>
        {showBanner ? (
          <div className='fixed top-0 bg-[#202123] w-full p-4 z-10'>
            <div className='flex justify-end'>
              <Button onClick={() => setDiscardModal(!DiscardModal)} style={{ marginRight: '10px' }} variant="outlined"><span className=' text-white '>Discard</span></Button>
              <Button onClick={() => setShowBanner(false)} style={{ background: '#008060' }} variant="contained" color="primary">Save Changes</Button>
            </div>
          </div>
        ) : null}
      </>

      <div className='p-3'>
        <div className='pt-2 pb-2'>
          <Button onClick={dashboardOnClick} variant='outlined'><ArrowBackIcon /></Button>
        </div>
        <>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab icon={<DisplaySettingsIcon />} iconPosition="start" label="Detail" value="1" />
                  <Tab icon={<ScoreboardIcon />} iconPosition="start" label="Score" value="2" />
                  <Tab icon={<CollectionsIcon />} iconPosition="start" label=<div>
                    Gallery
                    <span class="inline-block blink px-1 ml-2 text-center align-baseline font-medium bg-gradient-to-r from-[#fe6447] to-[#f49989] text-white rounded-md text-sm">New</span>
                  </div>
                    value="3" />
                </TabList>
              </Box>
              <TabPanel style={{ margin: '10px' }} value="1">

                <>

                  <div className='flex flex-wrap items-center justify-between mt-4'>
                    <div className='flex items-center'>
                      <div>
                        <img className='w-28' src='https://static.livebooks.com/abc61dbc6e9c403b917975eb48d2d97d/i/f2c81f819c994f5eb2312f9948520c2a/1/4SoifmQp7LJ6yDtMuFY2x/Swan-Optic-22089.jpg' />
                      </div>
                      <div className='flex flex-col items-center'>
                        <h1 class='text-xl p-1'>Magic Deshedding Glove</h1>
                        <div className='flex items-center ml-4 p-1'>Product Score: 16 / 100 <span class="bg-[#ffd79d] ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span> </div>
                        <VideoModal margin='0 0 10px 0' title='Do You Want To Improve Score?' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      </div>
                    </div>
                    <div class="rounded-md" role="group">
                      <button onClick={handleScoreTab} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border hover:bg-white text-black">
                        <SummarizeIcon style={{ fontSize: '20px', marginRight: '2px', color: '#5c5f62' }} />
                        View Summary
                      </button>
                      <button
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-white text-black">
                        <EditIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        Edit In Shopify
                      </button>
                      <button
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-white text-black">
                        <RemoveRedEyeIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        View Product
                      </button>
                      <button onClick={() => setshowSyncShopifyModal(!showSyncShopifyModal)}
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border hover:bg-white text-black">
                        <SyncIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        Sync From Shopify
                      </button>
                    </div>
                  </div>
                  <>
                    <div className='mt-4'>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] '>
                          <p class='text-md font-medium'>Title</p>
                          <span className='text-sm'>Use between 120-150 characters to describe your product. The title is shown prominently in Google Shopping ads.</span>
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div>
                            <div class="flex items-center">
                              <div class="flex rounded-md w-[100%]">
                                <input maxLength='150' onChange={handelScoreData} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {scoreData.count}/150
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            <div className='flex items-center'>
                              <p>{scoreData.persent} / 100</p>
                              <span style={{ background: scoreData.color }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{scoreData.score}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Description</p>
                          <span className='text-sm'>Describe your product in detail. Try to be as descriptive as possible and have a character length between 2000-5000.Minimum 750 characters.</span>
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div>
                            <div class="">
                              <ReactQuill onChange={handelBanner} width='100%' theme="snow" value={value1} />
                              <div class="flex items-center pt-2 mt-1">
                                <span class="text-black text-sm">
                                  0 out of 5000 characters used
                                </span>
                              </div>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            <div className='flex items-center'>
                              <p>10 / 100</p>
                              <span style={{ background: '#ffd79d' }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Compulsory Details</p>
                          <span className='text-sm'>These fields help Google to identify your product type,brand and associated category. Accurate data here will help you get more clicks in Google Shopping ads.</span>
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div>
                            <div>
                              <p className='py-1 text-sm'>Product Type</p>
                              <div class="flex rounded-md w-[100%]">
                                <input maxLength='120' onChange={handelBanner} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count1}/120
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center mt-2'>
                              <p>10 / 100</p>
                              <span style={{ background: '#ffd79d' }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            <div>
                              <p className='py-1 text-sm'>Brand</p>
                              <div class="flex rounded-md w-[100%]">
                                <input maxLength='120' onChange={e => setCount2(e.target.value.length)} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count2}/120
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center mt-2'>
                              <p>10 / 100</p>
                              <span style={{ background: '#ffd79d' }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            <div>
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
                            <div className='flex items-center mt-2'>
                              <p>10 / 100</p>
                              <span style={{ background: '#ffd79d' }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Custom Attributes</p>
                          <span className='text-sm'>You can define Custom Color, Size, Material, Pattern and COGS. It will not write back to Shopify but it will be submitted to connected feed. Also, these attributes will be considered only if a particular attribute is not defined in Shopify.</span>
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div className='flex justify-between flex-wrap w-full'>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]'>
                              <p className='py-1 text-sm'>Color</p>
                              <div className='flex items-center'>
                                <div class="flex rounded-md w-[100%]">
                                  <input maxLength='100' onChange={e => setCount3(e.target.value.length)} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                  <div class="flex items-center justify-center px-4 mt-1">
                                    <span class="w-10 h-6 text-black text-sm">
                                      {count3}/100
                                    </span>
                                  </div>
                                </div>
                                <Tooltip title="Assignment of 'Color' attribute will be limited to Feed only. This modification will not be written back to Shopify. Product data in your Shopify store will not be changed by this assignment." arrow>
                                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                </Tooltip>
                              </div>
                            </div>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]'>
                              <p className='py-1 text-sm'>Size</p>
                              <div className='flex items-center'>
                                <div class="flex rounded-md w-[100%]">
                                  <input maxLength='100' onChange={e => setCount4(e.target.value.length)} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                  <div class="flex items-center justify-center px-4 mt-1">
                                    <span class="w-10 h-6 text-black text-sm">
                                      {count4}/100
                                    </span>
                                  </div>
                                </div>
                                <Tooltip title="Assignment of 'Size' attribute will be limited to Feed only. This modification will not be written back to Shopify. Product data in your Shopify store will not be changed by this assignment." arrow>
                                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                          <div className='flex justify-between flex-wrap w-full'>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]'>
                              <p className='py-1 text-sm'>Material</p>
                              <div className='flex items-center'>
                                <div class="flex rounded-md w-[100%]">
                                  <input maxLength='100' onChange={e => setCount5(e.target.value.length)} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                  <div class="flex items-center justify-center px-4 mt-1">
                                    <span class="w-10 h-6 text-black text-sm">
                                      {count5}/100
                                    </span>
                                  </div>
                                </div>
                                <Tooltip title="Assignment of 'Material' attribute will be limited to Feed only. This modification will not be written back to Shopify. Product data in your Shopify store will not be changed by this assignment." arrow>
                                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                </Tooltip>
                              </div>
                            </div>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]'>
                              <p className='py-1 text-sm'>Pattern</p>
                              <div className='flex items-center'>
                                <div class="flex rounded-md w-[100%]">
                                  <input maxLength='100' onChange={e => setCount6(e.target.value.length)} type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                  <div class="flex items-center justify-center px-4 mt-1">
                                    <span class="w-10 h-6 text-black text-sm">
                                      {count6}/100
                                    </span>
                                  </div>
                                </div>
                                <Tooltip title="Assignment of 'Pattern' attribute will be limited to Feed only. This modification will not be written back to Shopify. Product data in your Shopify store will not be changed by this assignment." arrow>
                                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-between flex-wrap w-full'>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]'>
                              <p className='py-1 text-sm'>Cost of Goods Sold (COGS)</p>
                              <div class="flex rounded-md w-[100%]">
                                <input type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                              </div>
                            </div>
                            <div className='w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] flex items-center'>
                              <FormControlLabel style={{ display: 'flex', justifyContent: 'end' }} control={<Checkbox style={{ color: '#008060' }} />} label="Check this if Product is Adult-oriented" />
                              <Tooltip title=<p>Use this to indicate that this product is Adult-oriented because they contain adult merchandise or sexually explicit content such as nudity, sexually suggestive content, or are intended to enhance sexual activity.<Button target='_blank' href='https://support.google.com/merchants/answer/6324508?hl=en&ref_topic=6324338' >Learn More</Button></p> arrow>
                                <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                              </Tooltip>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Detailed Product Characteristics</p>
                          <span className='text-sm'>These attributes are used to submit particular product characteristics that users commonly search for. The attributes can help you control your ads appearance when you advertise products. These attributes are also used to help potential customers filter by attributes.</span>
                          <VideoModal margin='0 0 10px 0' title='Product Characteristics - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div>
                            <div class="flex items-center justify-between mb-4">
                              <div className='w-[30%]'>
                                <p className='text-sm py-1'>Condition</p>
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
                              <div className='w-[30%]'>
                                <p className='text-sm py-1'>Age</p>
                                <select
                                  id="countries"
                                  class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                                >
                                  <option disabled selected value>
                                    - - select - -
                                  </option>
                                  <option value="Newborn">Newborn</option>
                                  <option value="Infant">Infant</option>
                                  <option value="Toddler">Toddler</option>
                                  <option value="Kids">Kids</option>
                                  <option value="Adult">Adult</option>
                                </select>
                              </div>
                              <div className='w-[30%]'>
                                <p className='text-sm py-1'>Gender</p>
                                <select
                                  id="countries"
                                  class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                                >
                                  <option disabled selected value>
                                    - - select - -
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Unisex">Unisex</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                          <div className='flex justify-between'>
                            <div className='w-[45%]'>
                              <p className='text-sm py-1'>Size System</p>
                              <select
                                id="countries"
                                class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                              >
                                <option disabled selected value>
                                  - - select - -
                                </option>
                                <option value="AU">AU</option>
                                <option value="BR">BR</option>
                                <option value="CN">CN</option>
                              </select>
                            </div>
                            <div className='w-[45%]'>
                              <p className='text-sm py-1'>Size Type</p>
                              <select
                                id="countries"
                                class="text-gray-900 text-sm rounded-md w-[100%] p-2.5"
                              >
                                <option disabled selected value>
                                  - - select - -
                                </option>
                                <option value="Male">Regular</option>
                                <option value="Female">Petite</option>
                                <option value="Unisex">Plus</option>
                              </select>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-between mb-4 mt-1.5'>
                            <div className='flex items-center'>
                              <div>
                                <p className='text-sm py-1'>Unit Pricing Measure</p>
                                <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                              </div>
                              <div>
                                <p className='text-sm py-1'>Value</p>
                                <select
                                  id="countries"
                                  class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]"
                                >
                                  <option disabled selected value>
                                    - - select - -
                                  </option>
                                  <option value="Male">Regular</option>
                                  <option value="Female">Petite</option>
                                  <option value="Unisex">Plus</option>
                                </select>
                              </div>
                            </div>
                            <div className='flex items-center'>
                              <div>
                                <p className='text-sm py-1'>Unit Pricing Base Measure</p>
                                <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                              </div>
                              <div>
                                <p className='text-sm py-1'>Value</p>
                                <select
                                  id="countries"
                                  class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]"
                                >
                                  <option disabled selected value>
                                    - - select - -
                                  </option>
                                  <option value="Male">Regular</option>
                                  <option value="Female">Petite</option>
                                  <option value="Unisex">Plus</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                          <div className='flex flex-wrap justify-between items-center mb-4'>
                            <div className='w-full sm:w-full md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]'>
                              <p className='text-sm py-1'>Multipack</p>
                              <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                            </div>
                            <div className='flex items-center'>
                              <p className='mr-2'>Is it bundle?</p>
                              <RadioGroup

                                // defaultValue="Yes / No / None"

                                row
                              >
                                <FormControlLabel value="Yes" control={<Radio style={{ color: '#008060' }} />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio style={{ color: '#008060' }} />} label="No" />
                                <FormControlLabel value="None" control={<Radio style={{ color: '#008060' }} />} label="None" />
                              </RadioGroup>
                            </div>
                          </div>
                          <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                          <div>
                            <div className='flex justify-between items-center'>
                              <div className='flex items-center'>
                                <p className='text-sm py-1'>Product Identifier Exists</p>
                                <Tooltip title=<p>This option will submit all the required product identifiers in the feed. If any identifier value is missing, it will not be submitted. Use this option when your products are updated with all correct unique product identifiers(UPI) same as other merchants for the same product/variant. UPI defines exactly which product you're selling.<Button target='_blank' href='https://support.google.com/merchants/answer/6324478?hl=en&ref_topic=6324338' >Learn More</Button></p> arrow>
                                  <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                </Tooltip>
                              </div>
                              <RadioGroup
                                row
                              >
                                <FormControlLabel value="Yes" control={<Radio style={{ color: '#008060' }} />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio style={{ color: '#008060' }} />} label="No" />
                              </RadioGroup>
                            </div>
                          </div>

                        </div>

                      </div>

                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Product Labels</p>
                          <span className='text-sm'>Custom Labels are used to structure your campaigns. Shipping Labels is used to setup different Shipping Cost in the Merchant Center for different products.Ads Label are used to create dynamic remarketing ads of particular group of products only.</span>
                          <VideoModal margin='0 0 10px 0' title='Custom Label - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                          <VideoModal margin='0 0 10px 0' title='Ads Label - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                          <VideoModal margin='0 0 10px 0' title='Shipping Label - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div className='flex items-center justify-between flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Custom Label 0</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount7(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count7}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Custom Label 1</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount8(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count8}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-between flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Custom Label 2</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount9(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count9}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Custom Label 3</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount10(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count10}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-between flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Custom Label 4</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount11(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count11}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Ads Label</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount12(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count12}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-between flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Ads Grouping</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount13(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count13}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Shipping Label</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount14(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count14}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-between flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Tax Category</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount15(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count15}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p className='text-sm py-1'>Return Policy</p>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount20(e.target.value.length)} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count20}/100
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Merchant Promotions</p>
                          <span className='text-sm'>Promotion ID field will only include Promotion Ids which are created for Specific Products only. You can assign multiple Promotion Ids to same product.</span>
                          <VideoModal margin='0 0 10px 0' title='How to setup Promotions' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <div>
                            <div class="flex items-center">
                              <div class="rounded-md w-[100%]">
                                {tags.map((tag, index) => (
                                  <span id="badge-dismiss-dark" class="inline-flex items-center mb-2 py-1 px-2 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded">
                                    {tag}
                                    <button onClick={() => deleteTag(index)} type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 " data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                      <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      <span class="sr-only">Remove badge</span>
                                    </button>
                                  </span>
                                ))}
                                <input class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md"
                                  value={input}
                                  placeholder="Promotion Id field"
                                  onKeyDown={onKeyDown}
                                  onChange={onChange}
                                />
                              </div>
                            </div>
                            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            <div className='flex items-center'>
                              <p>0 / 100</p>
                              <span style={{ background: '#ffd79d' }} class="ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                          <p class='text-md font-medium'>Recommended Details</p>
                          <span className='text-sm'>Adding data in these fields is recommended but not compulsory. Any addition will help Google to increase your ads in Google Shopping ads.</span>
                          <VideoModal margin='0 0 10px 0' title='Product highlights - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                          <VideoModal margin='0 0 10px 0' title='Product Details - Must Watch' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <p>Product highlights</p>
                          {productHighlights.slice(0, 6).map((val, index) => (
                            <div value={val} id={"productHighlight" + index} className='flex items-center mt-2'>
                              <div class="flex rounded-md w-[100%]">
                                <input onChange={e => setCount16(e.target.value.length)} maxLength='150' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                <div class="flex items-center justify-center px-4 mt-1">
                                  <span class="w-10 h-6 text-black text-sm">
                                    {count16}/150
                                  </span>
                                </div>
                              </div>
                              <div>
                                <DeleteIcon onClick={(e) => deleteHighlights(e)} style={{ color: '#d82c0d', cursor: 'pointer' }} />
                              </div>
                            </div>
                          ))}
                          <Button disabled={productHighlights.length >= 6} onClick={addNewHighlights} style={{ marginTop: '10px' }} startIcon={<AddCircleIcon style={{ color: '#008060' }} />} variant="outlined" color="primary">
                            Add Highlights
                          </Button>
                        </div>
                      </div>
                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>

                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                          <p>Product Details</p>
                          {productSection.slice(0, 1000).map((val, index) => (
                            <>
                              <div className='p-4 rounded-md' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                                <div className='flex justify-end'>
                                  <DeleteIcon onClick={(e) => deleteSection(e)} style={{ color: '#d82c0d', cursor: 'pointer' }} />
                                </div>
                                <div value={val} id={"productHighlight" + index} className='mt-2'>
                                  <>
                                    <div class="flex rounded-md w-[100%]">
                                      <input onChange={e => setCount17(e.target.value.length)} maxLength='140' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" placeholder='Section Name' />
                                      <div class="flex items-center justify-center px-4 mt-1">
                                        <span class="w-10 h-6 text-black text-sm">
                                          {count17}/140
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                  <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap justify-between mt-2'>
                                    <>
                                      <div class="flex rounded-md w-[100%]">
                                        <input onChange={e => setCount18(e.target.value.length)} maxLength='140' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" placeholder='Attribute Name' />
                                        <div class="flex items-center justify-center px-4 mt-1">
                                          <span class="w-10 h-6 text-black text-sm">
                                            {count18}/140
                                          </span>
                                        </div>
                                      </div>
                                    </>
                                    <>
                                      <div class="flex rounded-md w-[100%]">
                                        <input onChange={e => setCount19(e.target.value.length)} maxLength='1000' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" placeholder='Attribute Value' />
                                        <div class="flex items-center justify-center px-4 mt-1">
                                          <span class="w-10 h-6 text-black text-sm">
                                            {count19}/1000
                                          </span>
                                        </div>
                                      </div>
                                    </>
                                  </div>
                                </div>
                              </div>
                              <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                            </>
                          ))}
                          <Button disabled={productSection.length >= 1000} onClick={addSection} style={{ marginTop: '10px' }} startIcon={<AddCircleIcon style={{ color: '#008060' }} />} variant="outlined" color="primary">
                            Add Section
                          </Button>
                        </div>
                      </div>

                      <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                        <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>

                        </div>
                        <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%]'>
                          <div className=' bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                            <div>
                              <div class="flex justify-between items-baseline">
                                <div class="rounded-md w-[45%]">
                                  <p className='text-sm py-1'>GTIN</p>
                                  <input disabled placeholder='hello value' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                  <div className='flex items-center mt-2'>
                                    <p>10 / 100</p>
                                    <span class="ml-2 bg-[#ffd79d] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                                  </div>
                                  <Divider style={{ marginTop: '5px', marginBottom: '10px' }} />
                                </div>
                                <div class="rounded-md w-[45%]">
                                  <p className='text-sm py-1'>MPN</p>
                                  <input disabled placeholder='hello value' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                </div>
                              </div>
                              <div class="flex justify-between items-center">
                                <div class="rounded-md w-[45%]">
                                  <p className='text-sm py-1'>Price</p>
                                  <input disabled placeholder='345236243' type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                </div>
                                <div class="rounded-md w-[45%]">
                                  <p className='text-sm py-1'>Sale Price</p>
                                  <input disabled placeholder='23462456' type="number" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='mt-4'><Button onClick={() => setSetting(!setting)} style={{ background: '#008060', color: 'white' }} variant='contained'>
                            {setting ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                            see additionl product data</Button></div>
                        </div>
                      </div>

                      {/* //////////////////////////  start here   ////////////////////////////////////// */}
                      {setting ? (
                        <>
                          <div className='flex justify-between mt-3 mb-8 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                            <div className='pr-2 w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
                              <p class='text-md font-medium'>Additional Details</p>
                              <span className='text-sm'>These fields contain additional information  of the products. Adding this data might not have a huge impact on clicks but could be necessary for some categories.</span>
                            </div>
                            <div className='w-full sm:w-full md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%]'>
                              <div className=' bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                  <div className='w-[30%]'>
                                    <div className='flex items-center'>
                                      <p>Subscription Cost</p>
                                      <Tooltip title=<p>If this product is a mobile phone or tablet that can be bundled with a service contract, use subscription cost to include the details of the monthly or annual payment plan<Button target='_blank' href='https://support.google.com/merchants/answer/7437904' >Learn More</Button></p> arrow>
                                        <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                      </Tooltip>
                                    </div>
                                  </div>
                                  <div className='w-[70%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Period</p>
                                      <select id="countries" class="text-gray-900 text-sm rounded-md w-[100%] p-2.5">
                                        <option disabled="" value="true">- - select - -</option>
                                        <option value="New">New</option>
                                        <option value="Refurbished">Refurbished</option>
                                        <option value="Used">Used</option>
                                      </select>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Period length</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Amount</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>

                                  <div className='w-[30%]'>
                                    <div className='flex items-center'>
                                      <p>Loyalty Points</p>
                                      <Tooltip title=<p>If your country of sale is Japan and you offer loyalty points when someone purchases this product, use loyalty points to include the details of your loyalty points program. Loyalty points must have a specific monetary value and must be issued by your business.<Button target='_blank' href='https://support.google.com/merchants/answer/6324456' >Learn More</Button></p> arrow>
                                        <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                      </Tooltip>
                                    </div>
                                  </div>
                                  <div className='w-[70%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Period length</p>
                                      <input maxLength='24' type="text" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Value</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Ratio</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                  <div className='w-[30%]'>
                                    <div className='flex items-center'>
                                      <p>Installment</p>
                                      <Tooltip title=<p>Installment lets you offer your customers a monthly payment plan to pay for this product. The “Price” will be treated as the first payment. In countries outside of Latin America, you can offer installment payments only for mobile phones and tablets.<Button target='_blank' href='https://support.google.com/merchants/answer/6324474' >Learn More</Button></p> arrow>
                                        <HelpIcon style={{ cursor: 'help', color: '#008060', marginLeft: '10px' }} />
                                      </Tooltip>
                                    </div>
                                  </div>
                                  <div className='w-[70%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]">
                                      <p class="text-sm py-1">Months</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]">
                                      <p class="text-sm py-1">Amount</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                  <div className='w-[100%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                      <div class="flex items-end">
                                        <div>
                                          <p class="text-sm py-1">Product Height</p>
                                          <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                        </div>
                                        <div>
                                          
                                          <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                            <option disabled="" value="true">- - select - -</option>
                                            <option value="Male">Regular</option>
                                            <option value="Female">Petite</option>
                                            <option value="Unisex">Plus</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                      <div class="flex items-end">
                                        <div>
                                          <p class="text-sm py-1">Product Width</p>
                                          <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                        </div>
                                        <div>
                                          
                                          <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                            <option disabled="" value="true">- - select - -</option>
                                            <option value="Male">Regular</option>
                                            <option value="Female">Petite</option>
                                            <option value="Unisex">Plus</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                      <div class="flex items-end">
                                        <div>
                                          <p class="text-sm py-1">Product Length</p>
                                          <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                        </div>
                                        <div>
                                          
                                          <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                            <option disabled="" value="true">- - select - -</option>
                                            <option value="Male">Regular</option>
                                            <option value="Female">Petite</option>
                                            <option value="Unisex">Plus</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                      <div class="flex items-end">
                                        <div>
                                          <p class="text-sm py-1">Product Weight</p>
                                          <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                        </div>
                                        <div>
                                          
                                          <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                            <option disabled="" value="true">- - select - -</option>
                                            <option value="Male">Regular</option>
                                            <option value="Female">Petite</option>
                                            <option value="Unisex">Plus</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div>
                                  <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div className='w-[100%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                      <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                        <div class="flex items-end">
                                          <div>
                                            <p class="text-sm py-1">Shipping Height</p>
                                            <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                          </div>
                                          <div>
                                            
                                            <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                              <option disabled="" value="true">- - select - -</option>
                                              <option value="Male">Regular</option>
                                              <option value="Female">Petite</option>
                                              <option value="Unisex">Plus</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                        <div class="flex items-end">
                                          <div>
                                            <p class="text-sm py-1">Shipping Width</p>
                                            <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                          </div>
                                          <div>
                                            
                                            <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                              <option disabled="" value="true">- - select - -</option>
                                              <option value="Male">Regular</option>
                                              <option value="Female">Petite</option>
                                              <option value="Unisex">Plus</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                        <div class="flex items-end">
                                          <div>
                                            <p class="text-sm py-1">Shipping Length</p>
                                            <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                          </div>
                                          <div>
                                            
                                            <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                              <option disabled="" value="true">- - select - -</option>
                                              <option value="Male">Regular</option>
                                              <option value="Female">Petite</option>
                                              <option value="Unisex">Plus</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w-full sm:w-full md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                                        <div class="flex items-end">
                                          <div>
                                            <p class="text-sm py-1">Shipping Weight</p>
                                            <input type="number" class="px-4 py-2 w-[100%] border-t border-l border-b border-[#babfc3] rounded-tl-md rounded-bl-md" />
                                          </div>
                                          <div>
                                            
                                            <select id="countries" class="rounded-tr-md rounded-br-md text-sm w-[100%] p-[0.66rem]">
                                              <option disabled="" value="true">- - select - -</option>
                                              <option value="Male">Regular</option>
                                              <option value="Female">Petite</option>
                                              <option value="Unisex">Plus</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                  <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Transit Time Label</p>
                                      <input type="text" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Min Handling Time</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Max Handling Time</p>
                                      <input type="number" class="px-4 py-2 w-[100%] border border-[#babfc3] rounded-md" />
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                  <div className='w-[100%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
                                      <p class="text-sm py-1">Availability</p>
                                      <select id="countries" class="text-gray-900 text-sm rounded-md w-[100%] p-2.5">
                                        <option disabled="" value="true">- - select - -</option>
                                        <option value="New">New</option>
                                        <option value="Refurbished">Refurbished</option>
                                        <option value="Used">Used</option>
                                      </select>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
                                      <p class="text-sm py-1">Availability Date</p>
                                      <div class="flex items-center"><input className='w-full' type="date" /></div>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
                                      <p class="text-sm py-1">Expiration Date</p>
                                      <div class="flex items-center"><input className='w-full' type="date" /></div>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
                                      <p class="text-sm py-1">Sale Price Effective Date</p>
                                      <div class="flex items-center"><input className='w-full' type="date" /></div>
                                    </div>
                                  </div>
                                </div>
                                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className='flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                  <div className='w-[100%] flex items-center justify-between flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Energy Efficiency Class</p>
                                      <select id="countries" class="text-gray-900 text-sm rounded-md w-[100%] p-2.5">
                                        <option disabled="" value="true">- - select - -</option>
                                        <option value="New">New</option>
                                        <option value="Refurbished">Refurbished</option>
                                        <option value="Used">Used</option>
                                      </select>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Min Energy Efficiency Class</p>
                                      <select id="countries" class="text-gray-900 text-sm rounded-md w-[100%] p-2.5">
                                        <option disabled="" value="true">- - select - -</option>
                                        <option value="New">New</option>
                                        <option value="Refurbished">Refurbished</option>
                                        <option value="Used">Used</option>
                                      </select>
                                    </div>
                                    <div class="w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]">
                                      <p class="text-sm py-1">Max Energy Efficiency Class</p>
                                      <select id="countries" class="text-gray-900 text-sm rounded-md w-[100%] p-2.5">
                                        <option disabled="" value="true">- - select - -</option>
                                        <option value="New">New</option>
                                        <option value="Refurbished">Refurbished</option>
                                        <option value="Used">Used</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}



                    </div>
                  </>
                </>

              </TabPanel>
              <TabPanel style={{ margin: '10px' }} value="2">
                <>
                  <div className='flex flex-wrap items-center justify-between mt-4'>
                    <div className='flex items-center'>
                      <div>
                        <img className='w-28' src='https://static.livebooks.com/abc61dbc6e9c403b917975eb48d2d97d/i/f2c81f819c994f5eb2312f9948520c2a/1/4SoifmQp7LJ6yDtMuFY2x/Swan-Optic-22089.jpg' />
                      </div>
                      <div className='flex flex-col items-center'>
                        <h1 class='text-xl p-1'>Magic Deshedding Glove</h1>
                        <div className='flex items-center ml-4 p-1'>Product Score: 16 / 100 <span class="bg-[#ffd79d] ml-2 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span> </div>
                        <VideoModal margin='0 0 10px 0' title='Do You Want To Improve Score?' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                      </div>
                    </div>
                    <div class="rounded-md" role="group">
                      <button onClick={handleDetailTab} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border hover:bg-white text-black">
                        <ConstructionIcon style={{ fontSize: '20px', marginRight: '2px', color: '#5c5f62' }} />
                        Improve Score
                      </button>
                      <button
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-white text-black">
                        <EditIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        Edit In Shopify
                      </button>
                      <button
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-white text-black">
                        <RemoveRedEyeIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        View Product
                      </button>
                      <button onClick={() => setshowSyncShopifyModal(!showSyncShopifyModal)}
                        type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-md border hover:bg-white text-black">
                        <SyncIcon style={{ fontSize: '20px', marginRight: '5px', color: '#5c5f62' }} />
                        Sync From Shopify
                      </button>
                    </div>
                  </div>

                  <>
                    <h3 className='mt-4 text-2xl font-normal pt-2 pb-2 pl-1'>Scores</h3>
                    <div className='w-[100%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                      <div className='p-2'>
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><TitleIcon style={{ fontSize: '35px', marginRight: '2px', color: '#636363' }} />Title</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />The title should be maxed at 150 chars. The minimum recommended length is 70 chars (Ideal product title length: 75 – 100 characters)</span>
                          </div>
                          <div className='flex items-center'>
                            <p>10/100</p>
                            <span class="ml-2 bg-[#ffd79d] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><DescriptionIcon style={{ fontSize: '30px', marginRight: '8px', color: '#e97b16' }} />Description</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Only a few HTML tags are allowed in the description</span>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Description should ideally be between 2000 to 5000 characters. The Minimum recommended is 750 chars</span>
                          </div>
                          <div className='flex items-center'>
                            <p>30/100</p>
                            <span class="ml-2 bg-[#fed3d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Okay</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><GoogleIcon style={{ fontSize: '30px', marginRight: '8px', color: '#3e6fd4' }} />Google Product Category</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Google Product Category is a recommended field</span>
                          </div>
                          <div className='flex items-center'>
                            <p>50/100</p>
                            <span class="ml-2 bg-[#aee9d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Good</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><InventoryIcon style={{ fontSize: '30px', marginRight: '8px', color: '#709109' }} />Product Types</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Product Type is a recommended field</span>
                          </div>
                          <div className='flex items-center'>
                            <p>80/100</p>
                            <span class="ml-2 bg-[#a4e8f2] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Excellent</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><DiscountIcon style={{ fontSize: '30px', marginRight: '8px', color: '#f2404e' }} />Promotion Ids</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Promotions are recommended to increase click through rate</span>
                          </div>
                          <div className='flex items-center'>
                            <p>10/100</p>
                            <span class="ml-2 bg-[#ffd79d] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Poor</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><PhotoIcon style={{ fontSize: '30px', marginRight: '8px', color: '#eed604' }} />Images</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Both too small and too big images will cause an error on your Google Merchant Center account and your listing will not go live. Pay the highest attention to the size requirements that Google provides:</span>
                            <div className='flex items-center ml-3 mt-2'>
                              <p>Learn More for further details</p>
                              <a className='ml-2' target='_blank' href='https://support.google.com/merchants/answer/6324350?hl=en'>
                                <OpenInNewIcon style={{ color: '#1a73e8', fontSize: '20px' }} />
                              </a>
                            </div>
                          </div>
                          <div className='flex items-center'>
                            <p>30/100</p>
                            <span class="ml-2 bg-[#fed3d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Okay</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><GppGoodIcon style={{ fontSize: '30px', marginRight: '8px', color: '#20406a' }} />GTIN</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Required (For all new products with a GTIN assigned by the manufacturer) and Optional (strongly recommended) for all other products</span>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />GTIN should not include dashes and spaces</span>
                          </div>
                          <div className='flex items-center'>
                            <p>50/100</p>
                            <span class="ml-2 bg-[#aee9d1] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Good</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-xl pb-2 pt-2'><QrCodeIcon style={{ fontSize: '30px', marginRight: '8px', color: '#f29111' }} />Brand</p>
                            <span className='text-[#d72c0d] text-sm flex items-center pl-2'><ErrorIcon style={{ fontSize: '19px', marginRight: '10px' }} />Brand is recommended field</span>
                          </div>
                          <div className='flex items-center'>
                            <p>75/100</p>
                            <span class="ml-2 bg-[#a4e8f2] text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Excellent</span>
                          </div>
                        </div>
                        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
                      </div>
                    </div>

                  </>
                </>

              </TabPanel>
              <TabPanel style={{ margin: '10px' }} value="3">
                <div className='flex justify-between mt-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap sm:flex-wrap'>
                  <div className='pr-2 w-full sm:w-full md:w-[30%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%]'>
                    <p class='text-md font-medium'>Upload Custom Images</p>
                    <br />
                    <span className='text-sm'>This is our Top of the Line feature. Images you upload here will only be updated in Google Merchant Center and also the images you will delete will not be deleted from your store products.</span>
                    <br />
                    <br />
                    <span className='text-sm'>Google Merchant Center allows up to 11 images to upload.</span>
                    <br />
                    <br />
                    <div className='flex items-center'>
                      <p className='text-sm'>Learn More for further details</p>
                      <a className='ml-2' target='_blank' href='https://support.google.com/merchants/answer/6324350?hl=en'>
                        <OpenInNewIcon style={{ color: '#1a73e8', fontSize: '20px' }} />
                      </a>
                    </div>
                    <br />
                    <p><strong className='flex items-center font-medium text-base text-red-600'>Note: </strong> <p className='text-sm'>when you opt for this feature we will host images inside your store using draft products. Remember don't delete those products.</p></p>

                  </div>
                  <div className='image-container w-[100%] bg-white rounded-md p-4' style={{ boxShadow: '0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)' }}>
                    <div>
                      <>
                        <div className='flex flex-wrap justify-end items-end'>
                          <VideoModal margin='0 10px 5px 0' title='Tutorial For Customize Image' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
                          <label for="dropzone-file" class="inline-flex cursor-pointer items-center py-2 px-2 text-sm font-medium bg-transparent rounded-l-lg border hover:bg-gray-100 text-black">
                            <BackupIcon style={{ fontSize: '20px', marginRight: '2px', color: '#008060' }} />
                            Upload Image
                            <input onChange={onChangePicture} multiple id="dropzone-file" type="file" class="hidden" />
                          </label>
                          <button disabled={items.length === 11} onClick={() => setShowUploadModal(true)} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent border hover:bg-gray-100 text-black">
                            <CloudSyncIcon style={{ fontSize: '20px', marginRight: '2px', color: '#047fcb' }} />
                            Upolad From Url
                          </button>
                          <button onClick={deleteItem} type="button" class="inline-flex items-center py-2 px-2 text-sm font-medium bg-transparent rounded-r-lg border hover:bg-gray-100 text-black">
                            <DeleteIcon style={{ fontSize: '20px', marginRight: '2px', color: '#d82c0d' }} />
                            Delete
                          </button>
                        </div>
                      </>
                      <>
                        <p className='ml-4 font-medium text-lg'>Featured Image</p>
                        <div cl-assName='flex items-center pl-2 pr-2 pb-2'>
                          <div>

                            <SortableList
                              onSortEnd={onSortEnd}
                              className={classes.root}
                              draggedItemClassName={classes.dragged}
                            >
                              {items.slice(0, 11).map(({ name, image }, index) => (
                                <SortableItem key={name}>
                                  <div className={index === 0 ? 'classOfFirstEl' : 'otherClass'}>

                                    <div className='relative'>

                                      <img id='img'
                                        // className={classes.image}

                                        alt={name}
                                        src={image}
                                        imgProps={{ draggable: false }}
                                      />
                                      <Checkbox
                                        onChange={() => handleChecked(index)}
                                        color="primary"
                                        size="small"
                                        style={{ position: 'absolute', top: '0', left: '0', color: '#454545' }}
                                      // onClick={() => alert(name)}
                                      />
                                    </div>
                                  </div>
                                </SortableItem>
                              ))}
                            </SortableList>
                          </div>
                        </div>
                      </>
                    </div>
                    <div className='flex flex-wrap justify-end items-end mt-4'>
                      <Button variant='outlined' style={{ marginRight: '10px' }}>Cancel</Button>
                      <Button variant='contained' style={{ color: 'white', background: '#008060' }}>Upload In Merchant Center</Button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </>
      </div >







      <>
        {/* save bar discard modal  */}
        {DiscardModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setDiscardModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <ReportProblemIcon style={{ color: '#d82c0d' }} />
                      <p className='text-lg font-medium ml-2'>Discard all unsaved changes</p>
                      <CloseIcon onClick={() => setDiscardModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <p className='text-sm font-normal' >If you discard changes, you’ll delete any edits you made since you last saved.</p>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setDiscardModal(false)} style={{ marginRight: '10px' }} variant="outlined">Continue</Button>
                      <Button onClick={() => { setDiscardModal(false); setShowBanner(false) }} style={{ background: "#d82c0d" }} variant="contained">Discard</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* upload image from ulr modal */}

      <>
        {showUploadModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowUploadModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div className="">
                    <div className='flex items-center p-2'>
                      <UploadFileIcon style={{ color: '#d82c0d' }} />
                      <p className='text-lg font-medium ml-2'>Upolad an image from url</p>
                      <CloseIcon onClick={() => setShowUploadModal(false)} className='absolute right-3 hover:bg-gray-100 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer' />
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='p-4'>
                      <div class="rounded-md w-[100%]">
                        <p className='text-sm py-1'>Enter Your Image Url</p>
                        <input value={valueInput} onChange={(e) => { setValueInput(e.target.value) }} maxLength='100' type="text" class="input-focus-none px-4 py-2 w-[100%] focus:border-none focus:ring-none border border-[#babfc3] rounded-md" />
                      </div>
                    </div>
                    <Divider style={{ margin: '10px 0 10px 0' }} />
                    <div className='flex justify-end'>
                      <Button onClick={() => setShowUploadModal(false)} style={{ marginRight: '10px' }} variant="outlined">Cancel</Button>
                      <Button disabled={!valueInput} onClick={() => { setShowUploadModal(false); handelUpolad() }} style={{ background: "#008060" }} variant="contained">Upload</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* sync from shopify modal */}

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
                      <VideoModal margin='0 0 0 0' title='Tutorial For Shopify Sync' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
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
                          <p>Metafields Setting is {textStatus}.</p>
                          <Button onClick={handleToggle} style={{ background: "#008060", textTransform: 'capitalize' }} variant="contained">{contentStatus}</Button>

                        </div>
                      </div>
                      {
                        active ? (
                          <div className='p-4 rounded-md mt-4'
                            style={{ boxShadow: "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)" }}
                          >
                            <>
                              <p>Please choose which Metafields you would like to Sync from Shopify along with Product Information.</p>
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

    </>
  )
}



export default Detail










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