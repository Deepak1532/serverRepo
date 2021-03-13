    import React from 'react'

function Card(props) {
    return (
       
         <div className="col-md-4">
            <a href="#" className="card-link">
                <div type="button" className="container maincard">
                <img src={props.image} className="card-img-top" alt="..."/>
                
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </a>
        </div>
        
    )
}

export default Card
