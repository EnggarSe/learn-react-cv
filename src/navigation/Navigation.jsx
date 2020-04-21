import React, { Fragment } from 'react';
import "./navigation.css";

function navigation() {
   return (
      <Fragment>
         <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="collapse navbar-collapse animated slideInLeft " id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto" id ="listnav">
                  <li className="nav-item active">
                     <a className="nav-link" id="git" href="https://github.com/EnggarSe"><img src="https://img.icons8.com/ios/50/000000/gitlab.png"alt=""/></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="https://instagram.com/enggarseptrinas"><img src="https://img.icons8.com/metro/50/000000/instagram-new.png" alt=""/></a>
                  </li>
                  <a className="navbar-brand animated pulse infinite"  id = "username" href="/">ENGGAR</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <li className="nav-item" >
                     <a className="nav-link" href="https://github.com/EnggarSe"><img src="https://img.icons8.com/metro/50/000000/github.png" alt=""/></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="https://www.linkedin.com/in/enggar-septrinas-91aa34168/"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt=""/></a>
                  </li>
               </ul>
            </div>
         </nav>
      </Fragment>

   )
}
export default navigation;