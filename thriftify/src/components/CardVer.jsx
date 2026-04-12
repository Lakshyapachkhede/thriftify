import React from 'react'
import { Link } from 'react-router-dom'


export default function CardVer({ props }) {
  return (
    <>

      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card card-ver">
          <img src={props.image} className="card-img-top" alt={props.title} />
          <div className="card-body">

            <h5 className="card-title">
              <Link
                to={`/item/${props.id}`}
                className="text-decoration-none text-dark"
              >
                {props.title}
              </Link>
              </h5>
            <p className="card-text">Price: ₹{props.price}</p>
            <p className="card-text">Condition: {"⭐".repeat(props.condition)}</p>
          </div>
        </div>
      </div>
    </>
  )
}


