import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mfashion | Premium E-Commerce",
  description: "A boutique e-commerce web application by Mfashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-brand">Mfashion</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#reviews">Reviews</a>
            <a href="#book">Book Fitting</a>
          </div>
          <div className="nav-cart">
            <button className="cart-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>(0)</span>
            </button>
          </div>
        </nav>
        
        {children}
        
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-brand">Mfashion</div>
              <p className="footer-desc">Curating the finest essentials for the modern lifestyle. Less, but better.</p>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Journal</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2026 Mfashion. All rights reserved.</div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
