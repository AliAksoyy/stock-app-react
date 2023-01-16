import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter"
import '@tremor/react/dist/esm/tremor.css';
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blueGrey } from "@mui/material/colors";
import { PersistGate } from 'redux-persist/integration/react'

function App() {



  const theme = createTheme({
    palette: {
      primary: {
        main: grey["400"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });






  return (
    <ThemeProvider theme={theme}>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
       </BrowserRouter> 
       </PersistGate>  
      </Provider>
      </ThemeProvider>
  );
}

export default App;
