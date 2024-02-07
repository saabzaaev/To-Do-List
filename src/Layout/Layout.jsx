import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, Outlet } from 'react-router-dom';
import Swicher from '../components/Swicher';

const Layout = () => {
  return (
    <div className='dark:bg-black dark:text-white'>
        <div className='flex justify-between items-center w-[90%] m-auto py-[10px] border-b-[1px] border-b-gray-400 ph:flex-row-reverse'>
            <SearchIcon/>
            <Swicher/>
            <p className="text-[40px]">Avion</p>
            <div className='flex items-center gap-3 ph:hidden'>
                <LocalGroceryStoreOutlinedIcon/>
                <AccountCircleOutlinedIcon/>
            </div>
        </div> 
        <ul className='w-[50%] flex justify-between m-auto items-center text-[20px] py-[15px] text-gray-600 ph:w-[90%] ph:text-[12px]'>
            <li><Link to={"/"}> Plant pots</Link></li>
            <li><Link to={"/about"}>Ceramics</Link></li>
            <li><Link to={"/about"}>Tables</Link></li>
            <li><Link to={"/about"}>Chairs</Link></li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
        </ul>

        <div className='dark:bg-black dark:text-white'>
            <Outlet/>
        </div>  
    </div>
  )
}

export default Layout