import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter"
import '@tremor/react/dist/esm/tremor.css';
import { Provider } from "react-redux";
import { store } from "./app/store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
     <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
       </BrowserRouter>   
      </Provider>
  );
}

export default App;
