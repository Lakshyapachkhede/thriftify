import { useState, useEffect } from "react";
import CardHor from "../components/CardHor";
import { useSearchParams } from "react-router-dom";


export default function Search() {

    const [params] = useSearchParams();
    const query = params.get("q");


    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/search/${query}`)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error(err));
    }, [query]);

    return <>

        <div className="container my-4">
            <div className="row g-3">

                <div className="col-md-3">
                    <select className="form-select">
                        <option>Category</option>
                        <option>Shirts</option>
                        <option>Jackets</option>
                        <option>Hoodies</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <select className="form-select">
                        <option>Condition</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <select className="form-select">
                        <option>Price Range</option>
                        <option>₹0 - ₹500</option>
                        <option>₹500 - ₹1000</option>
                        <option>₹1000+</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <select className="form-select">
                        <option>Sort By</option>
                        <option>Newest</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                    </select>
                </div>

            </div>
        </div>

        <div className="container">
            <h3>Search Results for "{query}"</h3>
        </div>
        <div className="container">
            {items.map((item) => (

                <CardHor key={item.id} props={item} />

            ))}


        </div>
    </>

}