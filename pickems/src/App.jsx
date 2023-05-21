import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;