import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter"
import '@tremor/react/dist/esm/tremor.css';



function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
