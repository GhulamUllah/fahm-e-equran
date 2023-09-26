import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import {  ArrowForward } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function Signup({ isSignup, setisSignup }) {
    const theme = createTheme()
    const [isLogin,setisLogin] = useState(false)
    return (
<>
{
    isLogin && <Login isLogin={isLogin} setisLogin={setisLogin} setisSignup={setisSignup} />
}
        <Dialog open={isSignup} fullWidth>

            <DialogTitle>
            <Typography variant='h5' sx={{ cursor: 'default', fontWeight: 600, color: theme.palette.primary.main, textAlign: 'center', mb: 2, textDecoration: 'underline' }}>Create Your Account</Typography>


            </DialogTitle>
            <DialogContent>
                <Typography variant='h6' sx={{ cursor: 'default', fontWeight: 600, color: theme.palette.primary.main, textAlign: 'center', mb: 2 }}>Fill this Simple Form to Signup</Typography>
                <FormControl sx={{ width: '100%', p: 2, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', rowGap: 1 }}>
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
                    <Autocomplete
                        lab
                        disablePortal
                        
                        options={["Tajweed", "Hifz e Quran", "Quran Recite", "Hadiths", "Quran Translation"]}
                        renderInput={(p) => <TextField {...p} label='Course' />}
                    />
                    <Box>
                        <Link onClick={()=>setisLogin(true)}>Already User?</Link>
                    </Box>
                </FormControl>




            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={() => setisSignup(false)}>Cancel</Button>
                <Button variant='contained' endIcon={<ArrowForward />} onClick={() => setisSignup(false)}>Signup</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
