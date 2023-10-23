import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  ArrowForward } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { userSignup } from '../../Redux/Action/userAction'

export default function Signup({ isSignup, setisSignup,course }) {
    const theme = createTheme()
    const navigate = useNavigate()
    const auth = useSelector(state=>state.User)
    const [isLogin,setisLogin] = useState(false)
    const [selectedCourse,setSelectedCourse] = useState(course)

    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [confirm_email,setconfirm_email] = useState()
    const [password,setpassword] = useState()

    const dispatch = useDispatch()
    const handleSignup = () =>{
        if(email === confirm_email){
             
        const option = {email,password,name,course:selectedCourse}
        dispatch(userSignup(option,setisSignup))
        }
        else{
            console.log("email not match")
        }
    }
    useEffect(()=>{
        if(auth.isAuthenticated) navigate('/dashboard')
    },[auth.isAuthenticated])
    
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
                        type='text'
                        placeholder='Your Good name'
                        onChange={(e)=>setname(e.target.value)}
                    />
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
                        label="Confirm"
                        type='email'
                        placeholder='Confirm Email'
                        onChange={(e)=>setconfirm_email(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type='password'
                        placeholder='Password'
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                    <Autocomplete
                        lab
                        disablePortal
                        disabled = {course ? true : false}
                        value={selectedCourse ? selectedCourse : null}
                        onChange={(e)=>setSelectedCourse(e.target.outerText)}
                        options={["Tajweed", "Hifz e Quran", "Quran Recite", "Hadiths", "Quran Translation"]}
                        renderInput={(p) => <TextField {...p} label='Select Course'/>}
                    />
                    <Box>
                        <Link onClick={()=>setisLogin(true)}>Already User?</Link>
                    </Box>
                </FormControl>




            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={() => setisSignup(false)}>Cancel</Button>
                <Button variant='contained' endIcon={<ArrowForward />} onClick={handleSignup}>Signup</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
