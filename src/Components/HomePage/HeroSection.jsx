import React, { useState } from 'react'
import heroimage from '../../herobackground.jpg'
import mobilehero from '../../mobilehero.jpg'
import { Box, Button, Link, Paper, TextField, Typography, createTheme } from '@mui/material'
import HeroDialog from './HeroDialog'
import TutingSection from './TutingSection'
import Guide from './Guide'
import Service from './Service'
import About from './About'
import Signup from './Signup'

export default function HeroSection() {
    const [open,setopen] = useState(false)
    const [course,setcourse] = useState()
    const [isSignup,setisSignup] = useState(false)
    const theme = createTheme()
  return (
    <>
    <div className='HeroSection' style={{position:'relative'}}>
        {
            open && <HeroDialog open={open} setopen={setopen}/>
            
        }
        
        {
            isSignup && <Signup isSignup={isSignup} setisSignup={setisSignup} course={course} setcourse={setcourse}/>
        }
        <img src={heroimage} alt='none' className='image1'/>
        <img src={mobilehero} alt='none' className='image2'/>
        <Box sx={{width:'100%',height:'100%',p:2,boxSizing:'border-box'}}>
            <Paper className='herotop' elevation={3} sx={{maxWidth:'450px',mr:2, justifySelf:'center',p:2,position:'absolute',top:'50%',transform:'translateY(-50%)',bgcolor:'rgba(255,255,255,.6)'}}>
                <Typography variant='h5' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main,textAlign:'center',mb:2}}>Step Towards Righteousness</Typography>
                <Typography variant='h6' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main}}><marquee>Welcome to Fahm e Quran - Your Gateway to Quranic Understanding!</marquee></Typography>
                <Box sx={{p:2,boxSizing:'border-box'}}>
                <Typography variant='h6' sx={{cursor:'default'}}>
                Learn Quran from qualified Quran tutors! Welcome to the Fahm e Quran. Get Quran classes online for Kids & Adults. Learn Tajweed, learn tafseer, Recitation, Hifz, and Arabic classes in your time from the best Quran teachers.
                <Link href='#' sx={{ml:1}}>Learn more</Link>
                </Typography>
                </Box>
                <Box className='heroSectionButton' sx={{display:'flex',justifyContent:'space-between',pl:2,pr:2}}>
                    <Button variant='contained' onClick={()=>setopen(true)}>Select Course</Button>
                    <Button variant='contained' onClick={()=>setisSignup(!isSignup)}>Start Free Trial</Button>

                </Box>
            </Paper>
            
        </Box>
    </div>
    <TutingSection/>
    <Guide/>
    <Service/>
    <About/>

    </>
  )
}
