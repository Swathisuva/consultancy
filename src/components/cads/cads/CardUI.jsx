import React from 'react'

import './card-style.css'
const Card=props=>{
    return(
        <div className='cards'>
        <div className="card text-center">
            <div className="overflow">
                <a href='#'><img src={props.imgsrc} alt="image1" className='card-img-top' /></a>
            </div>
            {/* <div className="card-body text-dark">
                <h4 className="card-title">Samudrika Pattu</h4>
                
            </div> */}
        </div>
        </div>

    );
}

export default Card;