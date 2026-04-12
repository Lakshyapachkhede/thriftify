import React from 'react'
import { Link } from 'react-router-dom'


export default function CardHor({ props }) {
    return (
        <>
            <div className="row item-row p-3 mb-3 align-items-center shadow-sm">
                <div className="col-md-3">
                    <img src={props.image} className="w-100" alt={props.title} />
                </div>
                <div className="col-md-6">
                    <h5><Link
                        to={`/item/${props.id}`}
                        className="text-decoration-none text-dark"
                    >
                        {props.title}
                    </Link></h5>
                    <p className="mb-1">Condition: {"⭐".repeat(props.condition)}</p>
                    <p className="text-muted">Brand: {props.brand} | Size: {props.size} | Color: {props.color}</p>
                </div>
                <div className="col-md-3 text-md-end">
                    <h5 className="text-success">₹{props.price}</h5>
                    <Link to={`/item/${props.id}`} className="btn btn-primary btn-sm">View Item</Link>
                </div>
            </div>
        </>
    )
}


