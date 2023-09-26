import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import about1 from '../../about_1.webp'
import about2 from '../../about_2.webp'
import about3 from '../../about_3.webp'
import about4 from '../../about_4.webp'
import Footer from './Footer'

export default function About() {
    return (
        <Box sx={{ p: 2 }}>
            <Paper elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', rowGap: 5 }}>
                <Box className='Inverted' sx={{ display: 'grid', gridTemplateColumns: '50% 50%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <Box >
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Learn Quran Online
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            Fahm-e-Quran is an online platform that provides all the essentials to learn Quran online. Our vision is to help people in read, learn, memorize and understand the noble verses of the Holy Quran. For this very purpose, we have qualified, professional and experienced Quran teachers and instructors. We use the latest state-of-the-art technology for Online Quran classes. It does not matter how old you are or where ever you are located, online Quran classes are accessible to all age groups.
                        </Typography>
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Hire Quran Teachers Online
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            With FAHAD Tutors, you can learn Quran easily with the most interactive online teaching methodologies by expert Quran teachers. Our instructors make learning Quran online convenient for students and they have a great sense of achievement by devoting their precious time to learning the Quran online. Learn Quran online at home by a qualified Quran Teacher, where you can be guided individually as well in group classes. You will just need a computer and internet access and our qualified Quran instructors will help you with the initial setup.
                        </Typography>
                    </Box>
                    <Box className='imageToCenter' sx={{ display: 'grid', height: '100%', width: '100%', boxSizing: 'border-box', justifyContent: 'right', overflow: 'hidden', alignItems: 'center' }}>
                        <img src={about1} alt='' style={{ height: '100%', borderRadius: '30px' }} />
                    </Box>

                </Box>





                <Box className='notInverted' sx={{ display: 'grid', gridTemplateColumns: '50% 50%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <Box className='imageToCenter' sx={{ display: 'flex', height: '100%', width: '100%', boxSizing: 'border-box', justifyContent: 'left', overflow: 'hidden', alignItems: 'center' }}>
                        <img  src={about2} alt='' style={{ height: '100%', borderRadius: '30px' }} />
                    </Box>
                    <Box>
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Online Quran classes
                        </Typography>
                        <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            Fahm e Quran provide Quran teachers for the following courses:

                        </Typography>
                        <ul>
                            <li>
                                <Typography >
                                    A basic reading of the Quran
                                </Typography>
                            </li>
                            <li>
                                <Typography >
                                    Reading with Tajweed
                                </Typography>
                            </li>
                            <li>
                                <Typography >
                                    Hifz/ Memorization of the Quran
                                </Typography>
                            </li>
                            <li>
                                <Typography >
                                    Special Quran classes for kids
                                </Typography>
                            </li>
                            <li>
                                <Typography >
                                    Arabic classes
                                </Typography>
                            </li>


                        </ul>
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Basic reading of the Quran
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            We have dedicated teachers, who teach the Quran starting from the very beginning of the Quran i.e. Qaida. A very easy and effective teaching method is used that our students can catch up easily. All the Quran teachers are trained with proper guidance to meet your needs.
                        </Typography>
                    </Box>
                </Box>



                <Box className='Inverted' sx={{ display: 'grid', gridTemplateColumns: '50% 50%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <Box >
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Hifz-e-Quran
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            Our students can benefit from the service of Hifz in the online Quran classes, the Quran teachers conduct the memorization/ revision of the Complete Holy Quran and also selected surah’s for the Quran.
                        </Typography>
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Online Quran classes for kids
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            Online learning can be challenging if you’re seeking it for your kids. FAHAD Tutors makes it easy for you by offering the best Quran Teachers who conduct special and individual online Quran classes for kids. Now you can easily make your children learn Quran online through our specially designed online Quran classes.
                        </Typography>
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Reading with Tajweed
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}>
                            Our Quran Teachers take online classes for those who want to learn Quran with Tajweed or want to revise the Quran with Tajweed. All the rules of Tajweed are taught in an effective and efficient manner.
                        </Typography>
                    </Box>
                    <Box className='imageToCenter' sx={{ display: 'grid', height: 'auto', width: '100%', boxSizing: 'border-box', justifyContent: 'right', overflow: 'hidden', alignItems: 'center' }}>
                        <img  src={about3} alt='' style={{ height: 'auto', borderRadius: '30px' }} />
                    </Box>

                </Box>




                <Box className='notInverted' sx={{ display: 'grid', gridTemplateColumns: '50% 50%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <Box className='imageToCenter' sx={{ display: 'flex', height: '100%', width: '100%', boxSizing: 'border-box', justifyContent: 'left', overflow: 'hidden', alignItems: 'center' }}>
                        <img  src={about4} alt='' style={{ height: '100%', borderRadius: '30px' }} />
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                       
                        <Typography variant='h4' sx={{ cursor: 'default', color: 'secondary.main' }}>
                            Arabic Classes
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'primary.main',textAlign:'justify' }}>
                        We provide you with the best teachers who conduct Arabic classes in well-known institutes and have complete command of Arabic subjects. Arabic classes are offered to all age groups.
Learning Quran is a very necessary and important act that every Muslim should perform on daily basis. The Holy Quran is the words of Allah (SWT) and contains all aspects of knowledge. The benefits of learning the Quran are uncountable. It guides us through the right path, teaches us how to act rightfully in different situations, brings us closer to Allah Almighty, and will intercede for us on the Day of Judgment.
FAHAD Tutors is the perfect solution for professional Quran learning, memorization, revision and understanding. We are here to help you enhance Quranic education by providing an attractive online interface and well-structured lessons.

                        </Typography>
                    </Box>
                </Box>
            </Paper>
            <Footer/>
        </Box>
    )
}
