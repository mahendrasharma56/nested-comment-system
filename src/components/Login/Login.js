import React, { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { authUser } from "../../features/user/authActions";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { isUserLoggedIn ,error } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("isUserLoggedIn")) navigate('/post')
      }, [navigate, isUserLoggedIn])

    const submitForm = (data) => {
        dispatch(authUser(data));
        navigate('/post');
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
                    Sign in
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSubmit(submitForm)}>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

export default Login;