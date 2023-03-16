import { Route, Routes } from 'react-router-dom';

import { Home, Login, Public } from './pages';
import Album from './pages/Album';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Public />}>
        <Route path='' element={<Home />} />
        <Route path='album/:title/:pid' element={<Album />} />
        <Route path='playlist/:title/:pid' element={<Album />} />
        <Route path='login' element={<Login />} />
        <Route path='search/:keyword' element={<Search />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
