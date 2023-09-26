import { Box, Button, Dialog, Paper, Typography, createTheme } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

export default function HeroDialog({open,setopen}) {
    const theme = createTheme()
  return (
    <Dialog open={open} >
        <Paper elevation={3} sx={{display:'flex', flexDirection:'column',alignItems:'center',p:4,rowGap:2}}>
                <Typography variant='h5' sx={{color:theme.palette.primary.dark}}>Select Your Prefered Course</Typography>
                <Box sx={{width:'80%'}}>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}}>Quran Recitation</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}}>Quran Tajweed</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}}>Quran Translation</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}}>Hifz e Quran</Button>
                <Button variant='contained' sx={{display:'block',width:'100%',mb:2}}>Hadiths</Button>
                </Box>

            </Paper>
            <CancelIcon onClick={()=>setopen(false)} sx={{position:'absolute',top:10,right:10,color:theme.palette.secondary.dark,cursor:'pointer'}}/> 
            
    </Dialog>
  )
}
