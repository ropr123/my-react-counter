import './App.css';
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom';
import Counter from './components/Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/'>Normal</Link>
          <Link to='/even'>Even</Link>
          <Link to='/odd'>Odd</Link>
        </nav>
      </div>
       <Routes>
        <Route path='/' element={<Counter type='normal'/>}/>
        <Route path='/even' element={<Counter type='even'/>}/>
        <Route path='/odd' element={<Counter type='odd'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
