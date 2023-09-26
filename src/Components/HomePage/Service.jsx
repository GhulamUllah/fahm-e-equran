import { Box, Paper, Typography, createTheme } from '@mui/material'
import React from 'react'
import quran from '../../quranpng.png'
import Footer from './Footer'

export default function Service() {
    const theme = createTheme()
    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', rowGap: 2 }}>
            <Paper elevation={2} sx={{ p: 2, px: 5, '&:hover': { boxShadow: theme.shadows[5] } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                    <img src={quran} alt='' style={{ height: '100px', width: '100px', objectFit: 'contain', backgroundColor: 'green', borderRadius: '50%' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h4' sx={{ color: 'secondary.main', fontWeight: 600, cursor: 'default', textAlign: 'center', borderBottom: '2px solid' }}>Online Quran Services</Typography>

                </Box>


                <Box>
                    <Typography variant='h5' sx={{ color: 'success.main', cursor: 'default', textDecoration: 'underline' }}>Key Features:</Typography>
                    <Typography variant='h6' sx={{ color: 'primary.main', cursor: 'default' }}>
                        We have Alhamdulillah 100% verified and experienced online Quran Male and Female Tutors in reasonable fee. All courses consists of Tajweed, Hifz, Recitation, Islamic supplications (Duain), Arabic Language and Hadiths.</Typography>
                </Box>



                <Box>
                    <Typography variant='h5' sx={{ color: 'success.main', cursor: 'default', textDecoration: 'underline' }}>Study Tool:</Typography>
                    <Typography variant='h6' sx={{ color: 'primary.main', cursor: 'default' }}>

                        Classes are held on Skype/Zoom according to the students’ scheduled timings and days. We have our own LMS as well. Start Today and get trial classes with our verified tutors. Our services are 24/7 for national and international students with reasonable fee.</Typography>
                </Box>



                <Box>
                    <Typography variant='h5' sx={{ color: 'success.main', cursor: 'default', textDecoration: 'underline' }}>Study Days & Timings:</Typography>
                    <Typography variant='h6' sx={{ color: 'primary.main', cursor: 'default' }}>


                        We have different packages for 2, 3 & 5 days a week, student can have customized package as well according to his/her availability. We offer weekend classes as well.</Typography>
                </Box>



            </Paper>
            <Footer/>
        </Box>
    )
}
