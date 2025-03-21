import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MyRoutes from './components/routing/MyRoutes';
import './App.css'

function App() {
  return (
 <><MyRoutes/></>
  );
}

export default App;