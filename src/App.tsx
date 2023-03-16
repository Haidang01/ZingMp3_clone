import { Route, Routes } from 'react-router-dom';

import { Home, Login, Public } from './pages';
import Album from './pages/Album';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Public />}>
        <Route path='' element={<Home />} />
        <Route path='album/:title/:pid' element={<Album />} />
        <Route path='playlist/:title/:pid' element={<Album />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
