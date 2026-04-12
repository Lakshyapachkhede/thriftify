import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardHor from "../components/CardHor";



export default function Profile() {


    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        pincode: ""
    });

    useEffect(() => {
        const fetchItem = async () => {
            const res = await fetch(`http://localhost:3000/api/profile/${id}`);
            const data = await res.json();


            // 👇 populate form
            setFormData({
                name: data.name || "",
                email: data.email || "",
                phone: data.phone || "",
                city: data.city || "",
                address: data.address || "",
                pincode: data.pincode || ""
            });
        };

        fetchItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/profile/${id}`, {
                method: "PUT", // or PATCH
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log("Updated:", data);

            alert("Profile updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Update failed");
        }
    };

const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error(err));
    }, [id]);




    return <>

        <div className="container my-5">
            <div className="profile-card">
                <h3 className="mb-4">User Profile</h3>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label>Full Name</label>
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name" />
                        </div>

                        <div className="col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control" value={formData.email} onChange={handleChange} name="email" />
                        </div>

                        <div className="col-md-6">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" value={formData.phone} onChange={handleChange} name="phone"/>
                        </div>

                        <div className="col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Enter city" value={formData.city} onChange={handleChange} name="city"/>
                        </div>

                        <div className="col-md-6">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Street / Area" value={formData.address} onChange={handleChange} name="address"/>
                        </div>

                        <div className="col-md-6">
                            <label>Pincode</label>
                            <input type="text" className="form-control" placeholder="Enter pincode" value={formData.pincode} onChange={handleChange} name="pincode"/>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Update Profile</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

        <div className="container">
            <h3 className="mb-4">Your Items</h3>


            {items.map((item) => (

                <CardHor key={item.id} props={item} />

            ))}

        </div>

    </>

}