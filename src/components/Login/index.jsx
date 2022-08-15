import React from "react";

// Firebase import
import 'firebase/app';
import firebase from 'firebase/app';
import { auth } from "./../../services/firebase";

// material component
import {
  Card,
  CardContent,
  Typography,
  Button,
  styled,
  Box,
  Stack
} from "@mui/material";

// material icons
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
// import styles from './styles'

import favicon from '../../assets/favicon.png'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
}));

const LoginCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#E8F9FD'
}));

const Wrapper = styled('div')(({theme}) =>({
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}))

const SignButton = styled(Button)(({theme}) =>({
  // backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#E8F9FD'
  },
}))

const Login = () => {
  return (
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="center" 
      textAlign="center"
      mt={25}
      >
        <LoginCard
        sx={{p:3}}
        >
          <CardContent alignItems='center'>
              <img src={favicon} width={100} alt=''/>
            <Text variant='h3'>
              Welcome to wiChat
            </Text>
            <Stack spacing={1} 
            justifyContent="center"
            alignItems="center"> 
            <SignButton variant="outlined" startIcon={<GoogleIcon />} onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
              Sign in with Google
            </SignButton>
            <SignButton variant="outlined" startIcon={<FacebookIcon />} onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
              Sign in with Facebook
            </SignButton>
            </Stack>

          </CardContent>
        </LoginCard>
      </Box>
    </Wrapper>
  );
};

export default Login;
