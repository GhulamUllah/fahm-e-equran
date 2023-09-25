import React, { useState } from 'react'
import {Box, Divider, Typography, createTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../quranpng.png'
export default function Header() {
  const theme = createTheme()
  const [isBarClicked,setisBarClicked] = useState(false)
  return (
    <Box className='headermain' sx={{boxShadow:theme.shadows[2] }}>
        <Box className='header_logo'>
          <img src={logo} alt='' style={{height:'4rem',cursor:'pointer'}}/>
         <Box sx={{cursor:'pointer'}}>
         <Typography variant='h6' sx={{fontWeight:700, color:theme.palette.primary.main}}>Fahm-e-Quran</Typography>
          <Divider sx={{bgcolor:theme.palette.secondary.main}}/>
          <Divider sx={{bgcolor:theme.palette.secondary.main}}/>
          <Divider sx={{bgcolor:theme.palette.secondary.main}}/>
          <Typography variant='h7' sx={{color:theme.palette.primary.light}}>Step Towards Righteousness</Typography>
    
         </Box>
        </Box>
        <Box className='header_links'>
            <Box component={'ul'} className={isBarClicked ? 'mobile_ul' : 'header_ul'}>
                <Box component={'li'} sx={{color:theme.palette.secondary.light,fontSize:'1.15rem',fontWeight:600,cursor:'pointer','&:hover':{color:theme.palette.secondary.main}}}>Home</Box>
                <Box component={'li'} sx={{color:theme.palette.secondary.light,fontSize:'1.15rem',fontWeight:600,cursor:'pointer','&:hover':{color:theme.palette.secondary.main}}}>About</Box>
                <Box component={'li'} sx={{color:theme.palette.secondary.light,fontSize:'1.15rem',fontWeight:600,cursor:'pointer','&:hover':{color:theme.palette.secondary.main}}}>Services</Box>
                <Box component={'li'} sx={{color:theme.palette.secondary.light,fontSize:'1.15rem',fontWeight:600,cursor:'pointer','&:hover':{color:theme.palette.secondary.main}}}>Contact</Box>
                <Box component={'li'} sx={{color:theme.palette.secondary.light,fontSize:'1.15rem',fontWeight:600,cursor:'pointer','&:hover':{color:theme.palette.secondary.main}}}>FAQs</Box>
            </Box>
            <MenuIcon className='mobile_head_menu' sx={{display:'none',fontSize:'40px',color:theme.palette.secondary.main,cursor:'pointer',position:'relative'}} onClick={()=>setisBarClicked(!isBarClicked)}/>
             
        </Box>
    </Box>
  )
}
