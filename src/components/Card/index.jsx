import React from 'react'
import './styles.css'
export function Card(props){
  return (
    <>
    <a href={props.links.url}>

      <div className="card-image justify-content-center text-center ">

        <img src={props.links.img} alt="" />
      </div>
    </a>
      <div>
        <h4>{props.links.title}</h4>
        <p>{props.links.description}</p>
      </div>
    </>
  )
}