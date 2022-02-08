import React from 'react';

const Card = (props) => {
   const {name, text} = props;
      return (<div className="card">
      <div className="card-body">
          <h4 className="card-title"> {name} </h4>
          <p className="card-text"> {text} </p>
          <button type="button" className="btn btn-primary">Go somewhere</button>
      </div>
  </div>);   
}

export default Card;