import React from "react";

const TshirtPage = () => {
  // JSON DATA (same page)
  const tshirts = [
    {
      id: 1,
      name: "Classic Black T-Shirt",
      price: 999,
      image: "/images/products/tshirt/t-1.jpg",
      category: "Men",
    },
    {
      id: 2,
      name: "White Cotton T-Shirt",
      price: 899,
      image: "/images/products/tshirt/t-6.jpg",
      category: "Men",
    },
    {
      id: 3,
      name: "Graphic Printed T-Shirt",
      price: 1199,
      image: "/images/products/tshirt/t-5.jpg",
      category: "Women",
    },
    {
      id: 4,
      name: "Oversized T-Shirt",
      price: 1299,
      image: "/images/products/tshirt/t-3.jpg",
      category: "Unisex",
    },
    {
      id: 4,
      name: "Oversized T-Shirt",
      price: 1299,
      image: "/images/products/tshirt/t-3.jpg",
      category: "Unisex",
    },
    {
      id: 4,
      name: "Oversized T-Shirt",
      price: 1299,
      image: "/images/products/tshirt/t-3.jpg",
      category: "Unisex",
    },
    {
      id: 4,
      name: "Oversized T-Shirt",
      price: 1299,
      image: "/images/products/tshirt/t-3.jpg",
      category: "Unisex",
    },
    {
      id: 4,
      name: "Oversized T-Shirt",
      price: 1299,
      image: "/images/products/tshirt/t-3.jpg",
      category: "Unisex",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">
        T-Shirt Collection
      </h2>

      <div className="row g-4">
        {tshirts.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: "280px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted">{item.category}</p>
                <h6 className="fw-bold text-danger">
                  ৳ {item.price}
                </h6>
              </div>

              <div className="card-footer bg-white border-0">
                <button className="btn btn-dark w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TshirtPage;
