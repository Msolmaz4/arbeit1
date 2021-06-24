import React from 'react';

const Card = (props) => {
return (
    
    
    

  <div classNames="card w-100" >  
    <img src="{props.image}" classNames="card-img-top" alt="..."/>
    <div classNames="card-body">
    <h5 classNames="card-title">{props.cardTitle}</h5>
      <p classNames="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p classNames="card-text"><small classNames="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>

); 

};
export default Card ;
