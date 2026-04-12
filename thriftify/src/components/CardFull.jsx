import React from 'react'
import { Link } from 'react-router-dom'

export default function CardFull({ props }) {
  return (
    <>
      <div className="container my-5 min-vh-100">
        <div className="row">


          <div className="col-lg-6 mb-4">
            <div id="itemCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                {props.images.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img src={img} className="d-block w-100" alt="Item" />
                  </div>
                ))}


              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#itemCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#itemCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>


          <div className="col-lg-6 item-info">
            <h2>{props.title}</h2>
            <h4 className="text-success">₹{props.price}</h4>
            <p>Condition: {"⭐".repeat(props.condition)}</p>

            <hr />

            <p>
              {props.description}
            </p>

            <ul>
              <li>Brand: {props.brand}</li>
              <li>Size: {props.size}</li>
              <li>Color: {props.color}</li>
              <li>Used: {props.used_times} times</li>
            </ul>


            <Link className="btn btn-outline-secondary" to={`/contact/${props.seller_id}`}>Contact Seller</Link>
          </div>

        </div>
      </div>
    </>
  )
}
