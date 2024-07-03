import React from 'react';
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from '../../context/DarkModeContext';

function Header({filters,filter,onFilterChange}) {//header안의 중괄호 --> 구조분해 값을 받아야함
  const {darkMode,toggleDarkMode}=useDarkMode();
  return (
    <header className='header'>
      <button className='toggle'onClick={toggleDarkMode}>
        {!darkMode && <IoMoon />} 
        {darkMode && <IoSunnyOutline />}
      </button>
      <ul className='filters'>
        {
          filters.map((value,index)=>{
            return ( //괄호 --> 값
              <li key={index}>
                <button
                  className="filter"
                  onClick={() => {
                    onFilterChange(value);
                  }}
                >
                  {value}
                </button>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
}

export default Header

//수출--> 자식
//수입--> 부모