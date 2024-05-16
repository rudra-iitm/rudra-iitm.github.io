import './App.css';
import Homepage from './pages/Homepage.tsx';
import { HashRouter, Route, Routes } from "react-router-dom";
import Resume from './pages/Resume.tsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/resume' element={<Resume />} />
          {/*visit /#/resume */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;