import React, { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/user/registerActions";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { success, userInfo } = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (success) navigate('/login')
        // redirect authenticated user to profile screen
        if (userInfo) navigate('/post')
      }, [navigate, userInfo, success])

    const submitForm = (data) => {
        dispatch(registerUser(data));
    }
   
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                {...register('name')}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                {...register('email')}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('password')}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Already have account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Box>
        </Container>
    )
}

export default Register;