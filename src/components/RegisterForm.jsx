import { Form } from 'formik'
import React from 'react'
import * as Yup from "yup"
import TextField  from '@mui/material/TextField'
import { LoadingButton } from '@mui/lab'
import { Box } from '@mui/material'
import { flexColumn } from '../styles/globalStyle'
import { useSelector } from 'react-redux'

export const registerSchema = Yup.object().shape({

    username: Yup.string()
      .max(20, "first name must have less than 20 chars")
      .required(),
    first_name: Yup.string()
      .max(20, "first name must have less than 20 chars")
      .required(),
    last_name: Yup.string()
      .max(20, "last name must have less than 20 chars")
      .required(),
  
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Password must have min 8 chars")
      .max(16, "Password must have max 16 chars")
      .matches(/\d+/, "Password must have a number")
      .matches(/[a-z]+/, "Password must have a lowercase")
      .matches(/[A-Z]+/, "Password must have an uppercase")
      .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char").required(),
  });


const RegisterForm = ({values,errors,handleBlur,handleChange,touched}) => {

  const {loading}=useSelector(state=>state.auth)
    
   
  return (
    <Form>
    <Box sx={flexColumn}>
        <TextField
        label="User Name"
        id="username"
        name="username"
        variant="outlined"
        value={values.username || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
         />
        <TextField
        label="First Name"
        id="first_name"
        name="first_name"
        variant="outlined"
        value={values.first_name || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.first_name && Boolean(errors.first_name)}
        helperText={touched.first_name && errors.first_name}
         />
        <TextField
        label="Last Name"
        id="last_name"
        name="last_name"
        variant="outlined"
        value={values.last_name || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.last_name && Boolean(errors.last_name)}
        helperText={touched.last_name && errors.last_name}
         />
        <TextField
        label="Email"
        id="email"
        name="email"
        variant="outlined"
        value={values.email || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
         />
        <TextField
        label="Password"
        id="password"
        name="password"
        variant="outlined"
        value={values.password || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
         />
         <LoadingButton size="large" variant="contained" loading={loading} loadingPosition="center" type="submit" sx={{marginBottom:"1rem"}}>Register</LoadingButton>
    </Box>   
    </Form>
  )
}

export default RegisterForm