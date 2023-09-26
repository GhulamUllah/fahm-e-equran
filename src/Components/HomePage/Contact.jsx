import React from 'react'
import {Box,Button,Paper, Typography} from '@mui/material'
import Footer from './Footer'
import help from '../../helpimage.PNG'
import image from '../../help.jpg'
import assist from '../../assiting.jpg'
import service from '../../servicehelp.png'


export default function Contact() {
  return (
    <Box sx={{p:2}}>
        <Paper elevation={2} sx={{p:2,mb:2}}>
            <Typography variant='h4' sx={{color:'secondary.main',textAlign:'center',my:2}}>Need Any Help? Its More Than Easy</Typography>
            <Box sx={{display:'grid',gridTemplateColumns:'60% 40%',width:'100%',height:'40vh',boxSizing:'border-box',overflow:'hidden',bgcolor:'primary.dark',borderRadius:'8px'}}>
                <Box sx={{display:'flex',flexDirection:'column',mt:4,alignItems:'center',mr:1}}>
                <Typography variant='h5' sx={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>We're Just a Click Away</Typography>
                <Typography variant='h6' sx={{color:'#fff',width:'60%',textAlign:'justify'}}>Whether you have questions, feedback, or just want to say hello, we're here and ready to assist</Typography>
                </Box>
                <img src={help} alt='' style={{height:'100%',width:'100%',objectFit:'cover',borderTopLeftRadius:'50%',borderBottomLeftRadius:'50%'}}/>

            </Box>

            <Box sx={{height:'100%'}}>
                  <img src={image} alt='' style={{height:'100%',width:'100%',objectFit:'contain',}}/>
              </Box>

            <Box sx={{display:'flex',boxSizing:'border-box',height:'70vh'}}>
              
              <Box sx={{my:2,position:'relative',width:'100%'}}>
                <Typography variant='h4' sx={{fontWeight:'bold',textAlign:'center',color:'primary.main'}}>Support Team</Typography>
                <Box sx={{display:'flex',justifyContent:'space-around',mt:2}}>
                  <Paper elevation={2} sx={{p:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:1,maxWidth:'200px'}}>
                          <img src={assist} alt='' style={{height:'70px', width:'70px',borderRadius:'50%', border:'1px solid green'}}/>
                          <Typography variant='h6' sx={{fontWeight:'bold',color:'primary.main'}}>Talk to a Member of Costumer Care </Typography>
                  <Typography sx={{color:'primary.light'}}>If You are our Student and Having Any issue Retaled to Your Account We are Available 24/7</Typography>
                    <Button variant='contained' size={'small'}>Costumer Care</Button>
                  </Paper>
                  <Paper elevation={2} sx={{p:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:1,maxWidth:'200px'}}>
                  <img src={service} alt='' style={{height:'70px', width:'70px',borderRadius:'50%', border:'1px solid green'}}/>
                  <Typography variant='h6' sx={{fontWeight:'bold',color:'primary.main'}}>Courses and Accounts Support </Typography>
                  <Typography sx={{color:'primary.light'}}>You can Get help on Your Click Away, It would be our pleasure to reply you </Typography>
                  <Button variant='contained' size={'small'}>Students Help</Button>

                  </Paper>
                </Box>
              </Box>
              



            </Box>
        </Paper>
        <Footer/>
    </Box>
  )
}
