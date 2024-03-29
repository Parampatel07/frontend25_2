import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './home';
import Blogs from './blog';
import Common from './layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Common></Common>}>
            <Route path='/home' element={<HomePage></HomePage>}  ></Route>
            <Route path='/blog' element={<Blogs></Blogs>}  ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
