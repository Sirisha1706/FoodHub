import React, { useRef } from "react";
import style from "./Nav.module.css";

const NavBar= ({handleSearch})=> {
  const inptRef = useRef(null);
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            {/* Second Task */}
              <img
                className={style.logo}
                src="https://i.pinimg.com/564x/ab/ed/f5/abedf520cd1384463835e088bb910215.jpg"
                alt="logo"
              />
            <h1>Food Hub</h1>
          </div>
          <div className={style.nav_details}>
            <input type='text' placeholder='Enter ingredient....' ref={inptRef} />
            <button type='button' onClick={()=> handleSearch(inptRef.current.value)}>Search</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

