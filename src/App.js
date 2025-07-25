import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Components/Home'));
const Create = lazy(() => import('./Components/Create'));
const Read = lazy(() => import('./Components/Read'));
const Update = lazy(() => import('./Components/Update'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
