import LoadingButton from "@mui/lab/LoadingButton"
import  Box  from '@mui/material/Box'
import  TextField  from '@mui/material/TextField'
import { Form } from 'formik'
import React from 'react'
import { flexColumn } from '../styles/globalStyle'
import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    email: yup.string()
      .email("Please enter valid email")
      .required("Email is mandatory"),
    password: yup.string().required("Password is mandatory")
      .min(8, "Password must have min 8 chars")
      .max(16, "Password must have max 16 chars")
      .matches(/\d+/, "Password must have a number")
      .matches(/[a-z]+/, "Password must have a lowercase")
      .matches(/[A-Z]+/, "Password must have an uppercase")
      .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
  });




const LoginForm = ({ values,errors,touched,handleChange,handleBlur}) => {

    const loading=false

  return (
    <Form>
    <Box sx={flexColumn}>
        <TextField
        sx={{width:"17.5rem"}}
         id="email"
         variant='outlined'
         label="Email*"
         name="email"
         type="email"
         onBlur={handleBlur}
         value={values.email}
         onChange={handleChange}
         error={touched.email && Boolean(errors.email)}
         helperText={touched.email && errors.email}
         />
        <TextField
         id="password"
         variant='outlined'
         label="Password"
         name="password"
         type="password"
         onBlur={handleBlur}
         value={values.password}
         onChange={handleChange}
         error={touched.password && Boolean(errors.password)}
         helperText={touched.password && errors.password}
         />
         <LoadingButton size="large" loading={loading} loadingPosition="center" variant="contained" type="submit">Login</LoadingButton>
    </Box>
    </Form>
  )
}

export default LoginForm