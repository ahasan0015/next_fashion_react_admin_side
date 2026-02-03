import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white pt-3 pb-4"
      style={{
        background: 'linear-gradient(90deg, #ff6b6b, #f94d6a)',
      }}
    >
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-1">
            <h5 className="fw-bold mb-2">NEXT Fashion</h5>
            <p>Trendy clothing and accessories delivered to your doorstep. Quality products, great prices, and fast shipping.</p>
            <div className="d-flex mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white me-3">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white me-3">
                <FaInstagram />
              </a>
              <a href="https://wa.me/8801580707730" target="_blank" rel="noreferrer" className="text-white me-3">
                <FaWhatsapp />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white me-3">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/shop" className="text-white text-decoration-none">Shop</a></li>
              <li><a href="/new-arrivals" className="text-white text-decoration-none">New Arrivals</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="/shipping" className="text-white text-decoration-none">Shipping & Returns</a></li>
              <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-1">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p>Email: support@nextfashion.com</p>
            <p>Phone: +8801580707730</p>
            <p>Address: 123 Fashion Street, Dhaka, Bangladesh</p>
          </div>

        </div>

        <hr className="bg-white mt-4" />

        {/* Bottom */}
        <div className="text-center mt-3">
          <span>© {new Date().getFullYear()} NEXT Fashion. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
