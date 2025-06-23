// import { z } from 'zod';
// export const studentSchema = z.object({
//   registrationNo: z.string().min(1, "Registration number is required"),
//   name: z.string().min(1, "Name is required"),
//   class: z.string().min(1, "Class is required"),
//   phone: z.string().min(10, "Phone must be at least 10 digits"),
//   school: z.string(),
//   fatherName: z.string(),
//   parentPhone: z.string().min(10),
//   address: z.string(),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });
import { z } from 'zod';

export const studentSchema = z.object({
   Regid: z.number({invalid_type_error:"Registration number must be number"}).min(4, 'Registration number is required'),
  Name: z.string().min(1, 'Name is required'),
  Class: z.string().min(1, 'Class is required'),
  PhoneNo: z.string().min(10, 'Phone must be at least 10 digits'),
  School: z.string().min(1, 'School name is required'),
  Father_Name: z.string().min(1, "Father's name is required"),
  Parent_Number: z.string().min(10, 'Parent phone number must be valid'),
  Address: z.string().min(1, 'Address is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
