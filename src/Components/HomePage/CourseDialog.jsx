import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField, Typography, createTheme } from '@mui/material'
import React from 'react'

export default function CourseDialog({course,setcourse}) {
    const theme = createTheme()
  return (
    <Dialog
    open={course}
    fullWidth
    
    
    sx={{p:2}}
    >
        <DialogTitle>
        <Typography variant='h6' sx={{fontWeight:700, color:theme.palette.primary.main,textAlign:'center'}}>Please Select Course</Typography>
        </DialogTitle>
        <Divider/>
       <DialogContent sx={{height:'250px'}}>
       <Autocomplete
        lab
        disablePortal
        sx={{m:2}}
        options={["Tajweed","Hifz e Quran", "Quran Recite", "Hadiths", "Quran Translation"]}
        renderInput={(p)=><TextField {...p} label='Course'/>}
        />
       </DialogContent>
       <DialogActions >
        <Button variant='outlined' sx={{mr:3}} onClick={()=>setcourse(false)}>Cancel</Button>
        <Button variant='contained'>Submit</Button>
       </DialogActions>
    </Dialog>
  )
}
