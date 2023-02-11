import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Notifications = () => {

  const [notifications, setNotifications] = useState(false)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setNotifications(true)
  };


  return (
    <>
      <div className='pt-8 pl-20 pr-20'>
        <Card>
          <div className='cursor-pointer' expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <div className='flex justify-between p-3'>
              <div className='flex items-center'>
                {notifications === false ? (
                  <div className='relative'>
                    <span class="flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008060] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[#008060]"></span>
                    </span>
                  </div>
                ) : null}
                <p className={`ml-4 ${notifications ? "font-medium	 text-sm" : "font-medium text-md"}`}><b>Get ready for pea k season: BFCM Partner Guide and Content Hub</b>
                </p>
              </div>
              <div className='flex items-center'>
                <p className='mr-2'>December 19, 2022</p>
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p className='text-sm'>
                With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional strategies and more to help prepare your clients for BFCM. With BFCM just two months away, your merchants are already gearing up for a busy holiday season. Visit the Peak Season Content Hub and download our BFCM Partner Guide for insights into the 2022 season, product highlights, promotional.
              </p>
              <div className='pt-3'>
                <Button variant="contained" style={{ color: 'white', background: '#008060' }}>Learn More</Button>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  )
}

export default Notifications