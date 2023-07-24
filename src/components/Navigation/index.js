import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/fontawesome-free-solid";
function index() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="logo-imdb"
              className="navBarIcon"
            ></img>
          </Link>
          
        </div>
        <div className='hamburger-menu'>
        <FontAwesomeIcon icon={faBars} />
            <span>Menu</span>
          </div>
          <div className='search-bar'>
          <p className='all'>All</p>
           <input className='search-bar-input' type='search' placeholder='search your fav movies'/> 
           <FontAwesomeIcon icon={faSearch} style={{color:'#000', fontSize:'2rem'}} />
          </div>
          <div>
            SignIn
          </div>
      </div>
    </>
  );
}

export default index;