import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../context/ContextProvider';



import {links} from '../data/dummy';
 // console.log(links);
const Sidebar = () => {
  const {activeMenu , setActiveMenu ,screenSize ,currentColor }  = useStateContext();
  //console.log(activeMenu);
   const handleCloseSidebar = () =>{
      if(activeMenu &&  screenSize <= 900 ){
        setActiveMenu(false);
      }
   }
  const activeLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg   text-md text-black ';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-grey-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 '
  return (
    <div className='ml-3 h-screen md:overflow-hidden  overflow-auto md:hover:auto pb-10'>
 {activeMenu && (<>
  <div className='flex justify-between items-center'>
    <Link to='/' onClick={() =>{}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
    <SiShopware/> <span>Shoopy</span>
    </Link>
    <TooltipComponent content ='Close' position ='BottomCenter'>
   <button onClick={() =>{setActiveMenu((prev) => setActiveMenu(!prev))}} type='button' className='text-l rounded-full p-3 hover:bg-light-gray mt-4  block md:hidden' >
    <MdOutlineCancel/>
   </button>

    </TooltipComponent>
  </div>
  <div>
    <div className='mt-10'>
      {links.map((items)=>(
       <div key={items.title}>
        <p className='text-gray-400 m-3 mt-4 uppercase '>
        {items.title}
        </p>
        {
          items.links.map((link)=>(
            <NavLink 
            to={`${link.name}`}
            key={link.name}
            onClick={handleCloseSidebar}
            style={({isActive}) => ({backgroundColor : isActive ?  currentColor : ""}) }
            className={(isActive)=> isActive ? activeLink :normalLink }
            >
              {link.icon}
              <span className='capitalize'>{link.name}</span>
            </NavLink>
          ))
        }
         </div>
      ))}
    </div>
  </div>
 </>) }
    </div>
  )
}

export default Sidebar