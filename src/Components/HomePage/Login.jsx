import {  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ArrowForward } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from '../../Redux/Action/userAction'

export default function Login({ isLogin, setisLogin }) {
    const theme = createTheme()
    const auth = useSelector(state=>state.User)
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hanldeLogin = () => {
        const option = {email,password}
        dispatch(userLogin(option,navigate,setisLogin))
    }
    useEffect(()=>{
        if(auth.isAuthenticated) navigate('/dashboard')
    },[auth.isAuthenticated])
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
                        type='email'
                        placeholder='Your Email'
                        onChange={(e)=>setemail(e.target.value)}
                    />
                   
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type='password'
                        placeholder='Password'
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                   
                    <Box>
                        <Link onClick={()=>setisLogin(false)}>Not a User?</Link>
                    </Box>
                </FormControl>




            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={() => setisLogin(false)}>Cancel</Button>
                <Button variant='contained' endIcon={<ArrowForward />} onClick={hanldeLogin}>Login</Button>
            </DialogActions>
        </Dialog>
    )
}

