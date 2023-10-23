import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommentBox from './CommentBox';

export default function StudentCare({isStudentHelp,setisStudentHelp}) {
    const [email,setemail]=useState()
    const [complainttype,setcomplainttype]=useState()
    const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <Dialog
    open={isStudentHelp}
    fullWidth
    >
        <DialogTitle>
            <Typography variant='h5' sx={{textAlign:'center',fontWeight:'bold',color:'primary.dark'}}>Welcome to Help Center</Typography>
        </DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column',rowGap:2}}>
        <Typography variant='h6' sx={{textAlign:'center',color:'primary.main',my:1}}>Our Student are Our First Priorty, Please fill this Form</Typography>
        <TextField
         fullWidth
         required
         placeholder='Your Registered Email *'
         onChange={(e)=>setemail(e.target.value)}

         />
         <Autocomplete
         options={['Tutor Related','Services Related','Fee Related','Suggestion']}
         renderInput={(p)=><TextField required {...p} label="Complaint Type"/>}
         onChange={(e)=>setcomplainttype(e.target.value)}
         
         />
         <CommentBox italic={italic} setItalic={setItalic} fontWeight={fontWeight}  setFontWeight={setFontWeight} anchorEl={anchorEl}  setAnchorEl={setAnchorEl} />
        </DialogContent>
        <DialogActions>
            <Button variant='outlined' size='small' onClick={()=>setisStudentHelp(false)}>Cancel</Button>
            <Button variant='contained' size='small' onClick={()=>setisStudentHelp(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
  )
}
