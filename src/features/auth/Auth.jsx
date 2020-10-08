import React, {  useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './Auth.css'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '54ch;',
        },
    },
}));



const Auth = () => {
    const classes = useStyles()
    const [isLogIn, setIsLogIn] = useState(true)

    const [name,setName]=useState('');
    const [password,setPassword]=useState();
    const [email,setEmail]=useState('');

    const userObj={
        name,
        password,
        email
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(email)

        fetch('/api/signup',{
            method:"POST",
            body:JSON.stringify(userObj)
        })
        .then(res=>res.json())
        .then(resp=>console.log('resp',resp))


    }





    return (
        <Grid container style={{marginTop: "50px"}}>
            <Grid item sm={3}></Grid>
            <Grid item sm={6}>
                {/* <Typography  variant="h3">LogIn</Typography>  */}
                
                <LockOpenIcon className="logInIcon"></LockOpenIcon>
                <form onSubmit={(e)=>handleSubmit(e)}  className={classes.root} noValidate autoComplete="off">
                    <TextField onChange={(e)=>setName(e.target.value)}  variant="outlined" name="username" label="Name" /><br />

                    <TextField onChange={(e)=>setPassword(e.target.value)}  variant="outlined" type="number" name="Password" label="Password" /><br />



                        <><TextField onChange={(e)=>setEmail(e.target.value)}  variant="outlined" type="text" name="email" label="Email" /><br /></>

                    <><Button style={{width: "73%"}} variant="contained" color="primary" type="submit">{isLogIn ? 'Login' : 'Create an Account'}</Button><br /></>
                    <div style={{margin:" 0 auto"}}>

                        <p style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setIsLogIn(!isLogIn)}>
                            {isLogIn ? 'No account? Create one' : 'Already have an account?'}
                        </p>
                    </div>


                </form>
            </Grid>
            <Grid item sm={3}></Grid>
        </Grid>
    )
}
export default Auth