import {  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Typography, createTheme } from '@mui/material'
import React from 'react'
import { ArrowForward } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Login({ isLogin, setisLogin ,setisSignup}) {
    const theme = createTheme()
    return (
        <Dialog open={isLogin} fullWidth>
            <DialogTitle>

                <Typography variant='h5' sx={{ cursor: 'default', fontWeight: 600, color: theme.palette.primary.main, textAlign: 'center', mb: 2, textDecoration: 'underline' }}>Welcome Back</Typography>

            </DialogTitle>
            <DialogContent>
                <Typography variant='h6' sx={{ cursor: 'default', fontWeight: 600, color: theme.palette.primary.main, textAlign: 'center', mb: 2 }}>Enter Credientials to Login</Typography>
                <FormControl sx={{ width: '100%', p: 2, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', rowGap: 1 }}>
                   
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder='Your Email'
                    />
                   
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder='Password'
                    />
                   
                    <Box>
                        <Link onClick={()=>setisLogin(false)}>Not a User?</Link>
                    </Box>
                </FormControl>




            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={() => setisLogin(false)}>Cancel</Button>
                <Button variant='contained' endIcon={<ArrowForward />} onClick={() => setisLogin(false)}>Login</Button>
            </DialogActions>
        </Dialog>
    )
}

