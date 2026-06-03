/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const portfolioImages = [
    { id: 1, type: "saree", url: "/images/kerala_saree_1780470333697.png", alt: "Kerala Traditional Saree & Bridal Work" },
    { id: 2, type: "embroidery", url: "/images/aari_embroidery_1780470351547.png", alt: "Aari & Mirror Embroidery" },
    { id: 3, type: "mural", url: "/images/mural_painting_1780470368848.png", alt: "Fabric & Mural Painting" },
    { id: 4, type: "bridal", url: "/images/christian_bridal_1780470387460.png", alt: "Christian Wedding Gown" },
    { id: 5, type: "school", url: "/images/school_uniform_1780470403891.png", alt: "School Uniform Tailoring" },
    { id: 6, type: "churidar", url: "/images/churidar_1780470420463.png", alt: "Churidar & Salvar Kameez" }
  ];

  const reviews = [
    { id: 1, name: "James T.", text: "The fit on my custom suit is absolutely perfect. The attention to detail is unmatched in the city.", stars: 5 },
    { id: 2, name: "Sarah W.", text: "Fast turnaround on my wedding dress alterations. Mfashion saved the day and made me feel beautiful.", stars: 5 },
    { id: 3, name: "Michael C.", text: "Excellent craftsmanship. The fabric selection for bespoke shirts is incredible. Highly recommended.", stars: 5 }
  ];

  const phoneNumber = "+919562232408";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi,%20I%20would%20like%20to%20enquire%20about%20tailoring%20services.`;

  return (
    <main className="main-content">
      
      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a href={`tel:${phoneNumber}`} className="float-btn call-float" aria-label="Call Now">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="float-btn wa-float" aria-label="WhatsApp Us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.13.551 4.135 1.517 5.908L.15 24l6.196-1.624c1.725.88 3.663 1.344 5.685 1.344 6.645 0 12.03-5.385 12.03-12.03C24.062 5.385 18.676 0 12.031 0zm0 21.84c-1.803 0-3.517-.468-5.06-1.35l-3.626.952.966-3.535A9.972 9.972 0 0 1 2.158 12.03c0-5.46 4.413-9.873 9.873-9.873s9.873 4.413 9.873 9.873-4.413 9.873-9.873 9.873zm5.405-7.397c-.297-.15-1.758-.868-2.03-.968-.271-.101-.47-.15-.668.15-.198.3-.767.967-.94 1.168-.174.2-.347.225-.644.075-1.956-.995-3.34-2.585-3.921-3.606-.174-.3 0-.462.15-.61.134-.135.297-.348.446-.523.149-.174.198-.3.297-.5.1-.2.05-.375-.025-.525-.075-.15-.668-1.61-.916-2.203-.242-.581-.487-.502-.668-.512-.174-.01-.373-.01-.571-.01-.198 0-.52.075-.793.375-.272.3-1.04 1.018-1.04 2.48s1.065 2.875 1.213 3.075c.15.2 2.096 3.197 5.077 4.484 1.956.845 2.766.728 3.261.624.577-.12 1.758-.718 2.006-1.41.248-.693.248-1.288.174-1.41-.074-.122-.272-.198-.57-.348z" />
          </svg>
        </a>
      </div>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-badge">Bespoke Tailoring & Alterations</span>
          <h1 className="hero-title">PERFECT FIT.<br/>EVERY TIME.</h1>
          <p className="hero-subtitle">Master tailors crafting custom garments and providing expert alterations to elevate your personal style.</p>
          
          <div className="hero-buttons-grid">
            <a href={`tel:${phoneNumber}`} className="hero-btn hero-call">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-btn hero-wa">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.13.551 4.135 1.517 5.908L.15 24l6.196-1.624c1.725.88 3.663 1.344 5.685 1.344 6.645 0 12.03-5.385 12.03-12.03C24.062 5.385 18.676 0 12.031 0zm0 21.84c-1.803 0-3.517-.468-5.06-1.35l-3.626.952.966-3.535A9.972 9.972 0 0 1 2.158 12.03c0-5.46 4.413-9.873 9.873-9.873s9.873 4.413 9.873 9.873-4.413 9.873-9.873 9.873z"/></svg>
              WhatsApp
            </a>
            <a href="#book" className="hero-btn hero-dir">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Directions
            </a>
            <a href="#reviews" className="hero-btn hero-rev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Reviews
            </a>
          </div>
        </div>
      </header>

      {/* The Process Section */}
      <section className="info-section process-section" id="process">
        <div className="section-header centered">
          <h2 className="section-title">The Mfashion Process</h2>
          <p className="section-desc">Experience bespoke tailoring tailored strictly to your lifestyle.</p>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Measure & Consult</h3>
            <p>We take precise measurements and discuss your style preferences, requirements, and the perfect fit for your body type.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Fabric Selection</h3>
            <p>Choose from our curated collection of premium Italian wools, Egyptian cottons, and luxurious silks.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Final Fit</h3>
            <p>Return for your fitting where we make micro-adjustments to ensure the garment drapes flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Service Menu Section */}
      <section className="info-section services-section alternate-bg" id="services">
        <div className="section-header centered">
          <h2 className="section-title">Service Menu</h2>
          <p className="section-desc">Transparent pricing for premium craftsmanship.</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-column">
            <h3>Traditional & Bridal</h3>
            <ul className="pricing-list">
              <li><span>Kerala Traditional Saree</span> <span className="price">Contact Us</span></li>
              <li><span>Christian Bridal Dress</span> <span className="price">Contact Us</span></li>
              <li><span>Salvar & Churidar</span> <span className="price">Contact Us</span></li>
              <li><span>Custom Designer Blouse</span> <span className="price">Contact Us</span></li>
            </ul>
          </div>
          <div className="pricing-column">
            <h3>Art & Embroidery</h3>
            <ul className="pricing-list">
              <li><span>Aari & Mirror Embroidery</span> <span className="price">Contact Us</span></li>
              <li><span>Mural Fabric Painting</span> <span className="price">Contact Us</span></li>
              <li><span>Glass Painting</span> <span className="price">Contact Us</span></li>
              <li><span>Bridal Handwork</span> <span className="price">Contact Us</span></li>
            </ul>
          </div>
          <div className="pricing-column">
            <h3>Specialized Wear</h3>
            <ul className="pricing-list">
              <li><span>School Uniforms</span> <span className="price">Contact Us</span></li>
              <li><span>Kids Wear</span> <span className="price">Contact Us</span></li>
              <li><span>Custom Alterations</span> <span className="price">Contact Us</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Portfolio Section */}
      <section className="info-section portfolio-section" id="portfolio">
        <div className="section-header centered">
          <h2 className="section-title">Our Craftsmanship</h2>
          <p className="section-desc">A closer look at our stitchwork, fabrics, and recent alterations.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioImages.map((img) => (
            <div key={img.id} className="portfolio-item">
              <img src={img.url} alt={img.alt} className="portfolio-img" />
              <div className="portfolio-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="info-section reviews-section alternate-bg" id="reviews">
        <div className="section-header centered">
          <h2 className="section-title">Client Love</h2>
          <p className="section-desc">Don't just take our word for it.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="stars">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-color)" stroke="var(--accent-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="info-section location-section" id="book">
        <div className="location-container">
          <div className="section-header centered">
            <h2 className="section-title">Visit the Studio</h2>
            <p className="section-desc" style={{marginBottom: "2rem"}}>Drop by our studio for measurements, fittings, or to browse our fabric selection.</p>
          </div>
          
          <div className="contact-details-row">
            <div className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <h3>Location</h3>
              <p>123 Fashion Ave, Suite 400<br/>New York, NY 10001</p>
            </div>
            <div className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <h3>Hours</h3>
              <p>Mon-Fri: 10am - 7pm<br/>Saturday: 11am - 5pm</p>
            </div>
            <div className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <h3>Contact</h3>
              <p>{phoneNumber}<br/>hello@mfashion.com</p>
            </div>
          </div>
          
          <div className="map-container-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617544431934!2d-73.99335802426356!3d40.74844047138761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0, borderRadius: '16px', boxShadow: 'var(--shadow-subtle)'}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
