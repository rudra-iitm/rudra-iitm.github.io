import './App.css';
import Homepage from './pages/Homepage.tsx';
import { HashRouter, Route, Routes } from "react-router-dom";
import Archive from './pages/Archive.tsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/archive' element={<Archive />} />
          {/*visit /#/resume */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;