import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RuleIcon from '@mui/icons-material/Rule';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './pages/promotionFeed/style.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Tooltip from '@mui/material/Tooltip';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export default function NavBar() {

  const navigate = useNavigate();
  const dashboardOnClick = useCallback(() => navigate('/dashboard', { replace: true }), [navigate]);
  const generalSettingOnClick = useCallback(() => navigate('/GeneralSetting', { replace: true }), [navigate]);
  const conversionOnClick = useCallback(() => navigate('/Conversion', { replace: true }), [navigate]);
  const promotionsOnClick = useCallback(() => navigate('/Promotion', { replace: true }), [navigate]);
  const helpCenterOnClick = useCallback(() => navigate('/HelpCenter', { replace: true }), [navigate]);
  const pricingOnClick = useCallback(() => navigate('/Pricing', { replace: true }), [navigate]);
  const tutorialsOnClick = useCallback(() => navigate('/Tutorials', { replace: true }), [navigate]);
  const notificationsOnClick = useCallback(() => navigate('/Notifications', { replace: true }), [navigate]);
  const productReviewOnClick = useCallback(() => navigate('/ProductReview', { replace: true }), [navigate]);
  const faqsOnClick = useCallback(() => navigate('/FAQS', { replace: true }), [navigate]);
  const featureRequestOnClick = useCallback(() => navigate('/Request', { replace: true }), [navigate]);
  const partnerAppsOnClick = useCallback(() => navigate('/PartnerApps', { replace: true }), [navigate]);
  const bookACallOnClick = useCallback(() => navigate('/BookCall', { replace: true }), [navigate]);
  const writeAReviewOnClick = useCallback(() => navigate('/WriteReview', { replace: true }), [navigate]);
  const feedRuleClick = useCallback(() => navigate('/Rule', { replace: true }), [navigate]);
  const expertClick = useCallback(() => navigate('/Expert', { replace: true }), [navigate]);
  const auditClick = useCallback(() => navigate('/Audit', { replace: true }), [navigate]);


  ////////////////////////////////////////////////////////////


  // full screen 

  const [fullScreen, setFullScreen] = React.useState(true);

  ////////////////////////////////////////////////////////////

  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleCloseSelected = () => {
    setSelectedIndex(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


  const options = [
    <MenuItem onClick={() => { expertClick() }} disableRipple>
      <GppGoodIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Feed Experts
    </MenuItem>,
    <MenuItem onClick={() => { tutorialsOnClick() }} disableRipple>
      <PlayCircleIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Tutorials
    </MenuItem>,
    <MenuItem onClick={() => { notificationsOnClick() }} disableRipple>
      <NotificationsIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Notifications
    </MenuItem>,
    <MenuItem onClick={() => { productReviewOnClick() }} disableRipple>
      <StarIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Product Reviews
    </MenuItem>,
    <MenuItem onClick={() => { faqsOnClick() }} disableRipple>
      <HelpIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      FAQs
    </MenuItem>,
    <MenuItem onClick={() => { featureRequestOnClick() }} disableRipple>
      <VolunteerActivismIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Feature Requests
    </MenuItem>,
    <MenuItem onClick={() => { partnerAppsOnClick() }} disableRipple>
      <WidgetsIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Partner Apps
    </MenuItem>,
    <MenuItem onClick={() => { bookACallOnClick() }} disableRipple>
      <CalendarMonthIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Book A Call
    </MenuItem>,
    <MenuItem onClick={() => { writeAReviewOnClick() }} disableRipple>
      <FavoriteIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Write A Review
    </MenuItem>,
    <MenuItem onClick={() => { feedRuleClick() }} disableRipple>
      <RuleIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      Feed Rule
    </MenuItem>,
    <MenuItem onClick={() => { auditClick() }} disableRipple>
      <PlagiarismIcon style={{ color: '#008060', fontSize: '25px', marginRight: '10px' }} />
      GMC Suspension Audit
    </MenuItem>
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => { dashboardOnClick(); handleCloseSelected() }} label="Dashboard" icon={<DashboardIcon style={{ color: '#008060' }} />} />
        <BottomNavigationAction onClick={() => { generalSettingOnClick(); handleCloseSelected() }} label="General Settings" icon={<SettingsIcon style={{ color: '#008060' }} />} />
        <BottomNavigationAction onClick={() => { conversionOnClick(); handleCloseSelected() }} label="Conversion Tracking" icon={<TimelineIcon style={{ color: '#008060' }} />} />
        <BottomNavigationAction onClick={() => { promotionsOnClick(); handleCloseSelected() }} label="Promotion Feed" icon={<RssFeedIcon style={{ color: '#008060' }} />} />
        <BottomNavigationAction onClick={() => { helpCenterOnClick(); handleCloseSelected() }} label="Help Center" icon={<SupportAgentIcon style={{ color: '#008060' }} />} />
        <BottomNavigationAction onClick={() => { pricingOnClick(); handleCloseSelected() }} label="Pricing" icon={<MonetizationOnIcon style={{ color: '#008060' }} />} />

        <BottomNavigationAction button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem} label="More Options" icon={<ArrowDropDownCircleIcon style={{ color: '#008060' }} />} />
        <div className='flex ml-auto items-center pr-2'>
          <div onClick={notificationsOnClick}>
            <div class="box items-start">
              <svg class="bell" width="7%" viewBox="0 0 21 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Bell_SVG</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Bell_SVG" fill="#008060">
                    <path w d="M10.5,23 C12.4329966,23 14,21.4329966 14,19.5 C14,17.5670034 12.4329966,16 10.5,16 C8.56700338,16 7,17.5670034 7,19.5 C7,21.4329966 8.56700338,23 10.5,23 Z M8.48610111,19.034 C8.62220942,19.034 8.68975947,19.101 8.68975947,19.236 C8.68975947,19.73 8.87022901,20.156 9.2331845,20.493 C9.57194296,20.852 10.0024485,21.032 10.5005041,21.032 C10.6356042,21.032 10.7041625,21.099 10.7041625,21.234 C10.7041625,21.368 10.6356042,21.436 10.5005041,21.436 C9.88952902,21.436 9.3682846,21.211 8.93878727,20.785 C8.50828172,20.358 8.28244275,19.842 8.28244275,19.236 C8.28244275,19.101 8.3499928,19.034 8.48610111,19.034 Z" id="Oval-1"></path>
                    <path d="M1.60607806,19.236 L7.26415094,19.236 C7.2641511,19.2360001 13.7358494,19.2360001 13.7358491,19.236 L19.3939219,19.236 C19.8234193,19.236 20.2085554,19.079 20.5251332,18.765 C20.8417111,18.45 21,18.069 21,17.642 C19.3939219,16.296 18.1941524,14.635 17.3795189,12.659 C16.5648855,10.684 16.1575688,8.597 16.1575688,6.419 C16.1575688,5.028 15.7502521,3.95 14.9577992,3.142 C14.1431658,2.312 13.0341351,1.841 11.6317154,1.661 C11.6992654,1.526 11.7224543,1.369 11.7224543,1.212 C11.7224543,0.875 11.6085266,0.584 11.360507,0.359 C11.1336598,0.112 10.8392626,0 10.5005041,0 C10.1607374,0 9.88952902,0.112 9.66268184,0.359 C9.41365404,0.584 9.30073455,0.875 9.30073455,1.212 C9.30073455,1.369 9.32291517,1.526 9.39147343,1.661 C7.98804551,1.841 6.87901484,2.312 6.06438139,3.142 C5.24974795,3.95 4.84243123,5.028 4.84243123,6.419 C4.84243123,8.597 4.4351145,10.684 3.62048106,12.659 C2.80584762,14.635 1.60607806,16.296 0,17.642 C0,18.069 0.158288924,18.45 0.474866772,18.765 C0.79144462,19.079 1.17658073,19.236 1.60607806,19.236 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
              <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full">99+</span>
            </div>
          </div>
          <div className='ml-3'>
            <Tooltip title="Enter and Exit full-screen" arrow>
              {fullScreen ? <FullscreenIcon onClick={() => setFullScreen(!fullScreen)} style={{ color: '#008060', cursor: 'pointer', fontSize: '30px' }} /> : <FullscreenExitIcon onClick={() => setFullScreen(!fullScreen)} style={{ color: '#008060', cursor: 'pointer', fontSize: '30px' }} />}
            </Tooltip>
          </div>
        </div>
      </BottomNavigation>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}