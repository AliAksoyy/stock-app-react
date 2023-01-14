import  Button  from '@mui/material/Button'
import  Box  from '@mui/material/Box'
import  TextField  from '@mui/material/TextField'
import { Form } from 'formik'
import React from 'react'
import { flexColumn } from '../styles/globalStyle'
const LoginForm = ({ values,errors,touched,handleChange,handleBlur,handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit}>
    <Box sx={flexColumn}>
        <TextField
         id="email"
         variant='outlined'
         label="Email*"
         name="email"
         type="email"
         onBlur={handleBlur}
         value={values?.email || ""}
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
         value={values?.password || ""}
         onChange={handleChange}
         error={touched.password && Boolean(errors.password)}
         helperText={touched.password && errors.password}
         />
         <Button size="large" variant="contained" type="submit">Login</Button>
    </Box>
    </Form>
  )
}

export default LoginForm