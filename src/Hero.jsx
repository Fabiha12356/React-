import React from 'react'
import "./Hero.css";


const Hero = (props) => {
  return (
   (props.condition)?<>
    <h1 className="heading">{props.name}</h1>
    <h1 className="heading">{props.fathername}</h1>
    <h1 className="heading">{props.class}</h1>
    <h1 className="heading">{props.skill}</h1>
    </>
    :<>
        <h1 className="heading">{props.name}</h1>
    <h1 className="heading">{props.fathername}</h1>
    <h1 className="heading">{props.class}</h1>
    <h1 className="heading">{props.skill}</h1>
    </>
  )
}

export default Hero