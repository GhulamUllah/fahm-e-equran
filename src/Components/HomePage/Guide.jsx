import { Box, Divider, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import step1 from '../../step_1.webp'
import step2 from '../../step_2.webp'
import step3 from '../../step_3.webp'

export default function Guide() {
    return (
        <Box sx={{ p: 2 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant='h4' sx={{ color: 'primary.dark', textAlign: 'center', mb: 1, textDecoration: 'underline', textTransform: 'capitalize', cursor: 'default' }}>Taking help is easier than you think</Typography>
                <Typography variant='h5' sx={{ color: 'primary.dark', textAlign: 'center', mb: 1, textTransform: 'capitalize', cursor: 'default' }}>3 Simple Steps</Typography>
                <Box sx={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,300px))',justifyContent:'space-around'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 1 }}>
                        <Typography variant='h5' sx={{ color: 'primary.main', textAlign: 'center',  cursor: 'default',textDecoration:'underline' }}>Step One</Typography>
                        <Box>
                            <img src={step1} alt='' />
                        </Box>

                        <Typography variant='h6' sx={{ color: 'primary.light', textAlign: 'center', textTransform: 'capitalize', cursor: 'default' }}>Get Your Free Trial (Schedule your demonstration timings with our tutor and get demo classes for a week)</Typography>


                    </Box>

                    

                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 1 }}>
                        <Typography variant='h5' sx={{ color: 'primary.main', textAlign: 'center', textTransform: 'capitalize', cursor: 'default',textDecoration:'underline' }}>Step Two</Typography>
                        <Box>
                            <img src={step2} alt='' />
                        </Box>

                        <Typography variant='h6' sx={{ color: 'primary.light', textAlign: 'center', cursor: 'default' }}>Make Payment (Transfer fund to one these accounts <Link href='#'>Payments</Link> and send deposit slip to info@fahm-e-quran.vercel.app)</Typography>


                    </Box>
                    


                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 1 }}>
                        <Typography variant='h5' sx={{ color: 'primary.main', textAlign: 'center', textTransform: 'capitalize', cursor: 'default',textDecoration:'underline' }}>Step Three</Typography>
                        <Box>
                            <img src={step3} alt='' />
                        </Box>

                        <Typography variant='h6' sx={{ color: 'primary.light', textAlign: 'center', cursor: 'default' }}>Start Learning (Start learning according to your timings after depositing the required fee)</Typography>


                    </Box>




                </Box>

            </Paper>
        </Box>
    )
}
