import { Box, Button, Dialog, Paper, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import Signup from './Signup';

export default function HeroDialog({open,setopen}) {
    const theme = createTheme()
    const [isSignup, setisSignup] = useState(false)
    const [course,setcourse] = useState()
    console.log(course,isSignup)
  return (
    <Dialog open={open} >
      {
        isSignup && <Signup isSignup={isSignup} setisSignup={setisSignup} course={course}/>
      }
        <Paper elevation={3} sx={{display:'flex', flexDirection:'column',alignItems:'center',p:4,rowGap:2}}>
                <Typography variant='h5' sx={{color:theme.palette.primary.dark}}>Select Your Prefered Course</Typography>
                <Box sx={{width:'80%'}}>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}} onClick={()=>{setcourse("Quran Recite");  setisSignup(true)}}>Quran Recitation</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}} onClick={()=>{setcourse("Tajweed"); setisSignup(true)}}>Quran Tajweed</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}} onClick={()=>{setcourse("Quran Translation"); setisSignup(true)}}>Quran Translation</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}} onClick={()=>{setcourse("Hifz e Quran"); setisSignup(true)}}>Hifz e Quran</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}} onClick={()=>{setcourse("Hadiths"); setisSignup(true)}}>Hadiths</Button>
                </Box>

            </Paper>
            <CancelIcon onClick={()=>setopen(false)} sx={{position:'absolute',top:10,right:10,color:theme.palette.secondary.dark,cursor:'pointer'}}/> 
            
    </Dialog>
  )
}
