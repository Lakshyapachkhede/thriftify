import { useState } from "react";

export default function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    brand: "",
    size: "",
    condition: "",
    color: "",
    category: "",
    description: "",
    type: "donate",
    images: []
  });

  // Handle text/select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: e.target.files
    }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append all fields
    for (let key in formData) {
      if (key === "images") {
        for (let i = 0; i < formData.images.length; i++) {
          data.append("images", formData.images[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    console.log("Submitting:", formData);

    // Example API call

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      title: "",
      price: "",
      brand: "",
      size: "",
      condition: "",
      color: "",
      category: "",
      description: "",
      type: "donate",
      images: []
    });
  };

  return (
    <div className="container my-5">
      <div className="form-section">
        <h3 className="mb-4">Upload Item</h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Denim Jacket"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 800"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                className="form-control"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Size</label>
              <select
                name="size"
                className="form-select"
                value={formData.size}
                onChange={handleChange}
              >
                <option value="">Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Condition</label>
              <select
                name="condition"
                className="form-select"
                value={formData.condition}
                onChange={handleChange}
              >
                <option value="">Select Condition</option>
                <option>⭐⭐⭐⭐ (Like New)</option>
                <option>⭐⭐⭐ (Good)</option>
                <option>⭐⭐ (Used)</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Color</label>
              <input
                type="text"
                name="color"
                className="form-control"
                value={formData.color}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option>Shirt</option>
                <option>Jacket</option>
                <option>Hoodie</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12">
              <label className="form-label">Upload Images</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={handleFileChange}
              />
            </div>

            <div>
              <label className="form-label d-block mb-2">Type</label>

              <div className="btn-group w-100">

                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="sell"
                  value="sell"
                  checked={formData.type === "sell"}
                  onChange={handleChange}
                />
                <label className="btn btn-outline-success" htmlFor="sell">
                  Sell
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="donate"
                  value="donate"
                  checked={formData.type === "donate"}
                  onChange={handleChange}
                />
                <label className="btn btn-outline-danger" htmlFor="donate">
                  Donate
                </label>

              </div>
            </div>

            <div className="col-12 text-end">
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-outline-secondary me-1"
              >
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Upload Item
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}