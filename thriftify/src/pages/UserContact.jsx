import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function UserContact()
{

    const { id } = useParams();

    const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`http://localhost:3000/api/profile/${id}`);
      const data = await res.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

    return <>
    
    <div className="container my-5">
  <div className="profile-card">
    <h3 className="mb-4">Seller Contact Information</h3>

    <div className="row g-3">

      <div className="col-md-6">
        <div className="info-label">Full Name</div>
        <div className="info-value">{item.name}</div>
      </div>

      <div className="col-md-6">
        <div className="info-label">Email</div>
        <div className="info-value">{item.email}</div>
      </div>

      <div className="col-md-6">
        <div className="info-label">Phone Number</div>
        <div className="info-value">{item.phone}</div>
      </div>

      <div className="col-md-6">
        <div className="info-label">City</div>
        <div className="info-value">{item.city}</div>
      </div>

      <div className="col-md-6">
        <div className="info-label">Address</div>
        <div className="info-value">{item.address}</div>
      </div>

      <div className="col-md-6">
        <div className="info-label">Pincode</div>
        <div className="info-value">{item.pincode}</div>
      </div>

    </div>

    <div className="mt-4">
      <a href={`tel:${item.phone}`} className="btn btn-primary me-1">Call Seller</a>
      <a href={`https://wa.me/tel:${item.phone}`} className="btn btn-success me-1">WhatsApp</a>
      <a href={`mailto:${item.email}`} className="btn btn-outline-primary me-1">Email Seller</a>
    </div>

  </div>
</div>
    </>
}