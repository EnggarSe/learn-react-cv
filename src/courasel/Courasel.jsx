import React, { Fragment, useState } from 'react'
import "./courasel.css"
import About from '../about/About'
import Skill from '../skill/Skill'
import Project from '../projek/Project'
import Experience from "../about/Experience"
import Enggar from "./foto/enggar.jpeg"

function Courasel() {
   const [button, setButton] = useState("about");

   function about(){
      setButton("about");
   }
   function skill(){
      setButton("skill");
   }
   function project(){
      setButton("project");
   }
   function experience(){
      setButton("experience")
   }
   
   return (
      <Fragment>
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-12 col-xs-12 col-md-12 col-lg-5 animated zoomIn" id="courasel">
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="view overlay zoom">
                              <img id="imgcourasel" src={Enggar} className="w-100" alt="" />
                              <div className="mask flex-center">
                                 <p className="white-text">Enggar Septrinas</p>
                              </div>
                           </div>
                           <div className="carousel-caption d-none d-md-block" id="button">
                              <button type="button" onClick = {about} className="btn btn-light">About</button>
                              <button type="button" onClick = {project} className="btn btn-light">Education</button>
                              <button type="button" onClick = {skill} className="btn btn-light">Skill</button>
                              <button type="button" onClick = {experience} className="btn btn-light">Experience</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-sm-12 col-xs-12 col-md-12 col-lg-7" id="courasel2">
                  {button==="about" ? <About /> : button==="skill" ? <Skill /> :button==="project" ? <Project/> : button==="experience" && <Experience/>   }
               </div>
            </div>
         </div>
      </Fragment>


   )
}
export default Courasel;