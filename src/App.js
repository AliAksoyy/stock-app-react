import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter"
import '@tremor/react/dist/esm/tremor.css';
import { Provider } from "react-redux";
import { store } from "./app/store";


function App() {
  return (
     <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
       </BrowserRouter>   
      </Provider>
  );
}

export default App;
