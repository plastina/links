import React from 'react';
import './styles.css';
export function Card(props) {
  return (
    <>
      <div className="col-6 col-md-12">
        <a href={props.links.url}>
          <div className="card-image justify-content-center text-center ">
            <img src={props.links.img} alt="" width={'70px'} height="auto" />
          </div>
        </a>
        <div>
          <h4>{props.links.title}</h4>
          <p>{props.links.description}</p>
        </div>
      </div>
    </>
  );
}