import React from "react";

const PantCollection = () => {
  // প্যান্টের ডেটা (ইমেজ পাথ অপরিবর্তিত রাখা হয়েছে)
  const pants = [
    {
      id: 1,
      name: "Slim Fit Chino Pant",
      price: 1250,
      image: "/images/products/shirt/t-1.jpg",
      category: "Casual",
      tag: "Trending"
    },
    {
      id: 2,
      name: "Formal Gabardine Pant",
      price: 1450,
      image: "/images/products/shirt/t-2.jpg",
      category: "Formal",
      tag: "Best Seller"
    },
    {
      id: 3,
      name: "Stretchable Denim Jeans",
      price: 1850,
      image: "/images/products/shirt/t-3.jpg",
      category: "Denim",
      tag: null
    },
    {
      id: 4,
      name: "Regular Fit Cotton Pant",
      price: 1100,
      image: "/images/products/shirt/t-4.jpg",
      category: "Casual",
      tag: "Sale"
    },
    {
      id: 5,
      name: "Premium Khaki Trouser",
      price: 1550,
      image: "/images/products/shirt/t-5.jpg",
      category: "Formal",
      tag: null
    },
    {
      id: 6,
      name: "Blue Rinse Denim",
      price: 1950,
      image: "/images/products/shirt/t-6.jpg",
      category: "Denim",
      tag: "New"
    },
    {
      id: 7,
      name: "Cargo Combat Pant",
      price: 1650,
      image: "/images/products/shirt/t-5.jpg",
      category: "Outdoor",
      tag: null
    },
    {
      id: 8,
      name: "Executive Black Trousers",
      price: 2200,
      image: "/images/products/shirt/t-2.jpg",
      category: "Formal",
      tag: "Premium"
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Pant Collection</h2>
        <span className="text-muted">{pants.length} items found</span>
      </div>

      <div className="row g-4">
        {pants.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <div className="card h-100 shadow-sm border-0 position-relative">
              {/* Badge/Tag */}
              {item.tag && (
                <span className="position-absolute top-0 start-0 badge bg-dark m-2">
                  {item.tag}
                </span>
              )}
              
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center pb-0">
                <small className="text-uppercase text-muted fw-semibold">{item.category}</small>
                <h6 className="card-title my-2 fw-bold text-dark text-truncate">
                  {item.name}
                </h6>
                <h5 className="fw-bold text-primary">
                  ৳{item.price.toLocaleString()}
                </h5>
              </div>

              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-outline-dark w-100 fw-bold rounded-pill shadow-sm transition">
                  <i className="bi bi-cart-plus me-2"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PantCollection;