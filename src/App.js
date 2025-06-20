import './App.css';
import Login from './components/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
