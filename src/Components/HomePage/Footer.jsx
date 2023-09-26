import { Box, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Paper  elevation={3} sx={{bgcolor:'#555555',p:5,display:'flex',flexDirection:'column',rowGap:5}}>
       <Box className='footer' sx={{display:'flex',justifyContent:'space-around'}}>
        <Box>
            <Typography variant='h6' sx={{color:'#fff'}}>Select any Subject Subject</Typography>
            <ul>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Tajweed</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Recitation</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Hifz e Quran</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Quran with Translation</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Arabic Learning</Link>

                </li>
            </ul>
        </Box>



        
        <Box>
            <Typography variant='h6' sx={{color:'#fff'}}>Services Information</Typography>
            <ul>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>FAQs</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Payments</Link>

                </li>
           
            </ul>
        </Box>




        <Box>
            <Typography variant='h6' sx={{color:'#fff'}}>Support Section</Typography>
            <ul style={{listStyle:'none'}}>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)','&:hover':{color:'#fff'}}}>Contact Us</Link>

                </li>
                <li>
            <Link href='#' underline='hover' variant='h6' sx={{color:'rgba(255,255,255,.5)',display:'flex',gap:1,alignItems:'center','&:hover':{color:'#fff'}}}><EmailIcon/>info@fahm-e-quran.vercel.app</Link>

                </li>

            </ul>
        </Box>

       </Box>
       <Typography variant='h6' sx={{color:'rgba(255,255,255,.5)',textAlign:'center'}}>Copyright ©2023 All rights reserved | This Web is made with <Link href='https://fahm-e-equran.vercel.app'>Fahm-e-quran</Link></Typography>
    </Paper>
  )
}
