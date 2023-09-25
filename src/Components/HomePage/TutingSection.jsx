import { Box, Button, Paper, Typography, createTheme } from '@mui/material'
import tajweed from '../../tajweed.png'
import nazra from '../../Nazra.jpg'
import hifz from '../../hifz.jpg'
import translation from '../../translation.png'
import React from 'react'

export default function TutingSection() {
    const theme = createTheme()
  return (
    <Box sx={{p:2}}>
        <Paper elevation={2} sx={{p:2}}>
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Typography variant='h5' sx={{color:'secondary.main',cursor:'default',textAlign:'center', transition:'.6s all ease-in-out',borderBottom:'2px solid','&:hover':{pb:1}}}>Select Your Favourite</Typography>
        </Box>


        <Box sx={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,250px))',gap:2,boxSizing:'border-box',justifyContent:'space-around',my:3}}>
       



     <Paper elevation={1} sx={{p:2,display:'flex',flexDirection:'column',rowGap:1,alignItems:'center','&:hover':{boxShadow:theme.shadows[5]}}}>
            <Box sx={{height:'150px',width:'150px',borderRadius:'50%',overflow:'hidden',border:'2px solid',color:'primary.main'}}>
                <img src={tajweed} alt='No internet' style={{height:'100%'}}/>
            </Box>
            <Box>
            <Typography variant='h6' sx={{color:'secondary.dark',cursor:'default'}}>Tajweed ul Quran</Typography>
            </Box>
            <Box>
            <Typography sx={{color:'primary.light',cursor:'default'}}><b>Description: </b> 1 Week Free Trial, This is Your Perfect Place to Learn Tajweed</Typography>
            </Box>
            <Button variant='contained'>Start Trial</Button>
        </Paper>
       
       



     <Paper elevation={1} sx={{p:2,display:'flex',flexDirection:'column',rowGap:1,alignItems:'center','&:hover':{boxShadow:theme.shadows[5]}}}>
            <Box sx={{height:'150px',width:'150px',borderRadius:'50%',overflow:'hidden',border:'2px solid',color:'primary.main'}}>
                <img src={nazra} alt='No internet' style={{height:'100%'}}/>
            </Box>
            <Box>
            <Typography variant='h6' sx={{color:'secondary.dark',cursor:'default'}}>Recitation</Typography>
            </Box>
            <Box>
            <Typography sx={{color:'primary.light',cursor:'default'}}><b>Description: </b> One Week Free Trial, This is Your Perfect Place to Learn Recitation</Typography>
            </Box>
            <Button variant='contained'>Start Trial</Button>
        </Paper>
       
       



     <Paper elevation={1} sx={{p:2,display:'flex',flexDirection:'column',rowGap:1,alignItems:'center','&:hover':{boxShadow:theme.shadows[5]}}}>
            <Box sx={{height:'150px',width:'150px',borderRadius:'50%',overflow:'hidden',border:'2px solid',color:'primary.main'}}>
                <img src={translation} alt='No internet' style={{height:'100%'}}/>
            </Box>
            <Box>
            <Typography variant='h6' sx={{color:'secondary.dark',cursor:'default'}}>Quran Translation</Typography>
            </Box>
            <Box>
            <Typography sx={{color:'primary.light',cursor:'default'}}><b>Description: </b> 1 Week Free Trial, This is Your Perfect Place for Quran Translation</Typography>
            </Box>
            <Button variant='contained'>Start Trial</Button>
        </Paper>
       
       



     <Paper elevation={1} sx={{p:2,display:'flex',flexDirection:'column',rowGap:1,alignItems:'center','&:hover':{boxShadow:theme.shadows[5]}}}>
            <Box sx={{height:'150px',width:'150px',borderRadius:'50%',overflow:'hidden',border:'2px solid',color:'primary.main'}}>
                <img src={hifz} alt='No internet' style={{height:'100%'}}/>
            </Box>
            <Box>
            <Typography variant='h6' sx={{color:'secondary.dark',cursor:'default'}}>Hifz ul Quran</Typography>
            </Box>
            <Box>
            <Typography sx={{color:'primary.light',cursor:'default'}}><b>Description: </b> 1 Week Free Trial, This is Your Perfect Place for Hifz ul Quran</Typography>
            </Box>
            <Button variant='contained'>Start Trial</Button>
        </Paper>
       




    



        </Box>
        </Paper>
    </Box>
  )
}
