import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../public/images/banner.jpg"; // Your background image

export function Login() {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-md-5">
        <div className="card shadow-lg" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
          <div className="card-body p-4">

            {/* Header */}
            <h4 className="fw-bold mb-3 text-center text-primary">Login</h4>
            <p className="text-center text-muted mb-4">
              Welcome back! Please login to your account.
            </p>

            {/* Form */}
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-grid mb-3">
                <button className="btn btn-primary btn-lg">Login</button>
              </div>

              <p className="text-center mb-0">
                Don’t have an account? <Link to="/register">Register</Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
