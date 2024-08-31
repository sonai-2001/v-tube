import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/default/NavBar';
import SideBar from './components/default/SideBar';
import { Provider } from 'react-redux';
import store from '../src/utils/store';

function App() {
//p
  return (
    <div className='h-screen'>
       < Provider store={store}>
        <NavBar/>
       <div className='flex   '>
        <SideBar/>
        <Outlet />
       </div>
       </Provider>

    </div>
  );
}

export default App;
