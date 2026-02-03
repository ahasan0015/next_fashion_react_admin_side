import React, { useState } from "react";

// ১. ডাটা টাইপ ইন্টারফেস ডিফাইন করা
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

const CartPage: React.FC = () => {
  // ২. স্ট্যাটিক স্টেট (TypeScript Generic সহ)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Slim Fit Chino Pant",
      price: 1250,
      image: "/images/products/shirt/t-1.jpg",
      quantity: 1,
      size: "32"
    },
    {
      id: 2,
      name: "Premium Oxford Shirt",
      price: 1850,
      image: "/images/products/shirt/t-2.jpg",
      quantity: 1,
      size: "L"
    }
  ]);

  // ৩. পরিমাণ আপডেট করার ফাংশন (Type Annotations সহ)
  const updateQuantity = (id: number, delta: number): void => {
    setCartItems((prev: CartItem[]) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  // ৪. আইটেম ডিলিট করার ফাংশন
  const removeItem = (id: number): void => {
    if (window.confirm("আপনি কি এই আইটেমটি বাদ দিতে চান?")) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  // ৫. ক্যালকুলেশন
  const subtotal: number = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee: number = cartItems.length > 0 ? 60 : 0;
  const total: number = subtotal + deliveryFee;

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Shopping Cart ({cartItems.length})</h2>

        <div className="row g-4">
          {/* কার্ট আইটেম লিস্ট */}
          <div className="col-lg-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="card border-0 shadow-sm mb-3 rounded-4" key={item.id}>
                  <div className="card-body p-3">
                    <div className="row align-items-center">
                      <div className="col-4 col-md-2">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="img-fluid rounded-3" 
                          style={{ height: "90px", width: "100%", objectFit: "cover" }} 
                        />
                      </div>
                      <div className="col-8 col-md-4">
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <p className="text-muted small mb-0">Size: {item.size}</p>
                        <p className="text-primary fw-bold mb-0 mt-1">৳{item.price}</p>
                      </div>
                      <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="input-group input-group-sm">
                          <button 
                            className="btn btn-outline-secondary px-3" 
                            onClick={() => updateQuantity(item.id, -1)}
                          > - </button>
                          <span className="input-group-text bg-white px-3 fw-bold">{item.quantity}</span>
                          <button 
                            className="btn btn-outline-secondary px-3" 
                            onClick={() => updateQuantity(item.id, 1)}
                          > + </button>
                        </div>
                      </div>
                      <div className="col-4 col-md-2 mt-3 mt-md-0 text-center fw-bold">
                        ৳{item.price * item.quantity}
                      </div>
                      <div className="col-2 col-md-1 mt-3 mt-md-0 text-end">
                        <button 
                          className="btn btn-link text-danger p-0" 
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="bi bi-trash-fill h5"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card border-0 shadow-sm p-5 text-center rounded-4">
                <h4 className="text-muted">আপনার কার্টটি বর্তমানে খালি।</h4>
                <a href="/" className="btn btn-primary mt-3 px-4 rounded-pill">কেনাকাটা শুরু করুন</a>
              </div>
            )}
          </div>

          {/* অর্ডার সামারি কার্ড */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: "20px" }}>
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">৳{subtotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery Fee</span>
                <span className="fw-bold">৳{deliveryFee}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="h5 fw-bold">Total</span>
                <span className="h5 fw-bold text-danger">৳{total.toLocaleString()}</span>
              </div>
              
              <div className="mb-4">
                <label className="form-label small fw-bold text-muted">Coupon Code (Optional)</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button className="btn btn-dark">Apply</button>
                </div>
              </div>

              <button 
                className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
              
              <div className="text-center mt-3">
                <small className="text-muted">নিরাপদ পেমেন্ট গ্যারান্টি</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;