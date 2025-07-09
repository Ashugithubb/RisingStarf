'use client'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { boolean } from 'zod';
// import CircularProgress from '@mui/material/CircularProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from '@mui/system';

export default function LoginFinal(props: any) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [regid, setRegid] = React.useState<number | null>(null);
  const [password, setPassword] = React.useState('');
  const [Loading, setLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const notify = () => toast("Login SuccessFull!");
  const handelLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3333/auth/login', {
        Regid: regid,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      });
      notify()
      setLoading(false);
      await router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      toast("Login failed")
      console.error('Login failed', error);
    }
  }

  return (
    <main style={{
      background: 'linear-gradient(to right, #e0f7fa, #e3f2fd)',
      minHeight: '100vh',
      padding: '2rem',
    }}>
      <ToastContainer />
      <CssVarsProvider {...props}>
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1"><b>Welcome!</b></Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>

          <FormControl>
            <FormLabel>Id</FormLabel>
            <Input
              name="id"
              type="number"
              placeholder="Registration Number"
              value={regid ?? ''}
              onChange={(e) => setRegid(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endDecorator={
                <IconButton variant="plain" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>


          <Button onClick={handelLogin} sx={{ mt: 1 }}>
            Log in
          </Button>

          {Loading ? 
            (<Box sx={{display:"flex", justifyContent:"center"}}><CircularProgress /></Box>)
          : ""}




          <Typography
            endDecorator={<Link href="/sign-up">Forgot password</Link>}
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </main>
  );
}
