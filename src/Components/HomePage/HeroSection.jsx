import React, { useState } from 'react'
import heroimage from '../../herobackground.jpg'
import { Box, Button, FormControl, Link, Paper, TextField, Typography, createTheme } from '@mui/material'
import HeroDialog from './HeroDialog'
import CourseDialog from './CourseDialog'
import TutingSection from './TutingSection'

export default function HeroSection() {
    const [open,setopen] = useState(false)
    const [course,setcourse] = useState(false)
    const theme = createTheme()
  return (
    <>
    <div className='HeroSection' style={{position:'relative'}}>
        {
            open && <HeroDialog open={open} setopen={setopen}/>
            
        }
        {
            course && <CourseDialog course={course} setcourse={setcourse}/>
        }
        <img src={heroimage} alt='none'/>
        <Box sx={{width:'100%',height:'100%',position:'absolute',top:'10px',zIndex:2,display:'grid',gridTemplateColumns:'50% 50%',p:2,boxSizing:'border-box',alignItems:'center'}}>
            <Paper elevation={3} sx={{width:'65%', justifySelf:'center',p:2}}>
                <Typography variant='h5' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main,textAlign:'center',mb:2}}>Step Towards Righteousness</Typography>
                <Typography variant='h6' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main}}><marquee>Welcome to Fahm e Quran - Your Gateway to Quranic Understanding!</marquee></Typography>
                <Box sx={{p:2,boxSizing:'border-box'}}>
                <Typography variant='h6' sx={{cursor:'default'}}>
                Learn Quran from qualified Quran tutors! Welcome to the Fahm e Quran. Get Quran classes online for Kids & Adults. Learn Tajweed, learn tafseer, Recitation, Hifz, and Arabic classes in your time from the best Quran teachers.
                <Link href='#' sx={{ml:1}}>Learn more</Link>
                </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',pl:2,pr:2}}>
                    <Button variant='outlined' onClick={()=>setopen(true)}>Select Course</Button>
                    <Button variant='contained'>Start Free Trial</Button>

                </Box>
            </Paper>
            <Paper elevation={3} sx={{width:'50%', justifySelf:'center',p:2}}>
            <Typography variant='h5' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main,textAlign:'center',mb:2,textDecoration:'underline'}}>Create Your Account</Typography>
            <Typography variant='h6' sx={{cursor:'default',fontWeight:600,color:theme.palette.primary.main,textAlign:'center',mb:2}}>Fill this Simple Form to Signup</Typography>
            <FormControl sx={{width:'100%',p:2,boxSizing:'border-box',display:'flex',flexDirection:'column',rowGap:1}}>
                <TextField 
                required
                id="outlined-required"
                label="Name"
                placeholder='Your Good name'
                 />
                <TextField 
                required
                id="outlined-required"
                label="Email"
                placeholder='Your Email'
                 />
                <TextField 
                required
                id="outlined-required"
                label="Confirm"
                placeholder='Confirm Email'
                 />
                <TextField 
                required
                id="outlined-required"
                label="Password"
                placeholder='Password'
                 />
                 <Box>
                    <Link href='#'>Already User?</Link>
                 </Box>
                <Button variant='contained' onClick={()=>setcourse(true)}>Submit</Button>
            </FormControl>
                

            </Paper>

        </Box>
    </div>
    <TutingSection/>

    </>
  )
}
