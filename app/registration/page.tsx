'use client';

import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { studentSchema } from './student.schema.zod';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
type FormData = z.infer<typeof studentSchema>;

export default function StudentRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(studentSchema),
    mode: "onBlur",
    defaultValues: {
      Regid: undefined,
    },
  });

 const notify = () => toast("Student Registered!");
 const notify2 = () => toast("Image Uploaded!");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [cloudUrl, setCloudUrl] = useState<string>("");
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
      try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await axios.post("http://localhost:3333/student/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
         
        });

        setCloudUrl(res.data);
        console.log(res.data);
         notify2();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onSubmit = async (formData: FormData) => {
    const payload = {
      Regid: formData.Regid,
      Name: formData.Name,
      Class: formData.Class,
      School: formData.School,
      PhoneNo: formData.PhoneNo,
      Father_Name: formData.Father_Name,
      ParentNo: formData.Parent_Number,
      Address: formData.Address,
      password: formData.password,
      avatar: cloudUrl
    }

    const res = await axios.post('http://localhost:3333/student/add', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    notify();
    console.log(res);

  };

  return (
   
    <Paper sx={{ maxWidth: 500, p: 4, m: 'auto', mt: 6 }}>
       <ToastContainer />
      <Typography variant="h5" mb={3} textAlign="center">
        Student Registration
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar sx={{ width: 64, height: 64, mb: 1 }} src={avatarPreview || ''} />
        <Button variant="outlined" component="label" size="small">
          Upload Avatar
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </Button>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Registration Number"
          fullWidth
          margin="normal"
          {...register('Regid', { valueAsNumber: true })}
          error={!!errors.Regid}
          helperText={errors.Regid?.message}
        />
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          {...register('Name')}
          error={!!errors.Name}
          helperText={errors.Name?.message}
        />
        <TextField
          label="Class"
          fullWidth
          margin="normal"
          {...register('Class')}
          error={!!errors.Class}
          helperText={errors.Class?.message}
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          {...register('PhoneNo')}
          error={!!errors.PhoneNo}
          helperText={errors.PhoneNo?.message}
        />
        <TextField
          label="School Name"
          fullWidth
          margin="normal"
          {...register('School')}
          error={!!errors.School}
          helperText={errors.School?.message}
        />
        <TextField
          label="Father's Name"
          fullWidth
          margin="normal"
          {...register('Father_Name')}
          error={!!errors.Father_Name}
          helperText={errors.Father_Name?.message}
        />
        <TextField
          label="Parent Phone Number"
          fullWidth
          margin="normal"
          {...register('Parent_Number')}
          error={!!errors.Parent_Number}
          helperText={errors.Parent_Number?.message}
        />
        <TextField
          label="Address"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          {...register('Address')}
          error={!!errors.Address}
          helperText={errors.Address?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
    </Paper>
  );
}
