import React from 'react';
import { motion } from 'framer-motion';
import './About.css';


const features = [
  {
    id: 1,
    title: 'Cut-Resistant Technology',
    description: 'Advanced Kevlar-infused fabric that prevents chainsaw cuts and slashes',
  },
  {
    id: 2,
    title: 'Weather Protection',
    description: 'Waterproof and windproof outer shell keeps you dry and warm in any condition',
  },
  {
    id: 3,
    title: 'High Visibility',
    description: 'Fluorescent panels and reflective strips ensure you remain visible in any environment',
  },
  {
    id: 4,
    title: 'Comfort Design',
    description: 'Ergonomic fit with stretch panels allows full range of motion while working',
  },
];

const materials = [

  { 
    id: 1, 
    name: 'Dyneema', 
    benefit: 'Prevents chainsaw cuts and mechanical injuries',
    image: '/images/image8.jpg', 
  },
  { 
    id: 2, 
    name: 'GORE-TEX® Membrane', 
    benefit: 'Waterproof, windproof, yet breathable',
    image: '/images/image9.jpg', 
  },
  { 
    id: 3, 
    name: 'Lavalan® Wool Insulation', 
    benefit: 'Maintains body heat in cold environments',
    image: '/images/image10.jpg',
  },
];

const useCases = [
  {
    id: 1,
    title: 'Commercial Forestry',
    description: 'Professional-grade protection for daily forestry operations',
  },
  {
    id: 2,
    title: 'Arboriculture',
    description: 'Perfect for tree surgeons and climbers needing mobility and safety',
  },
  {
    id: 3,
    title: 'Property Maintenance',
    description: 'Ideal for landowners managing wooded areas and properties',
  },
  {
    id: 4,
    title: 'Extreme Weather Logging',
    description: 'Enhanced protection for operations in harsh winter conditions',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "This jacket saved me from a serious injury when my saw kicked back. The protection is unparalleled.",
    name: "Mike T.",
    title: "Professional Logger, Oregon",
  },
  {
    id: 2,
    quote: "I work in all weather conditions, and this is the only jacket I've found that keeps me both safe and comfortable.",
    name: "Sarah K.",
    title: "Forestry Supervisor, Washington",
  },
  {
    id: 3,
    quote: "The visibility features have made a huge difference when working in low light conditions. Highly recommended.",
    name: "John M.",
    title: "Arborist, British Columbia",
  },
];

const LumberjackJacketSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <div className="lumberjack-section">
      <section id="product" className="product-hero">
        <div className="product-container">
          <motion.div 
            className="product-details"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants}>FORESTER PRO</motion.h1>
            <motion.h2 variants={itemVariants}>Advanced Protection for Professional Lumberjacks</motion.h2>
            <motion.p variants={itemVariants}>
              Engineered to withstand the toughest conditions while providing unmatched safety, comfort, and mobility for forestry professionals.
            </motion.p>
            <motion.div className="cta-buttons" variants={itemVariants}>
              <a href="#features" className="primary-btn">Explore Features</a>
              <a href="#pricing" className="secondary-btn">See Pricing</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="product-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder">
              <span>PRODUCT IMAGE</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-header">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            Key Features
          </motion.h2>
          <motion.div 
            className="header-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>
        </div>
        
        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="feature-card"
              variants={itemVariants}
            >
              <div className="feature-icon">
                <div className="icon-placeholder">
                  <span>{feature.id}</span>
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="materials" className="materials-section">
        <div className="section-header">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            Advanced Materials
          </motion.h2>
          <motion.div 
            className="header-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>
        </div>
        
        <motion.div 
          className="materials-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {materials.map((material) => (
            <motion.div 
              key={material.id} 
              className="material-card"
              variants={itemVariants}
            >
             <div className="material-image-container">
              <img src={material.image} alt={material.name}
              className="material-image" />
            </div>
                
              
              <div className="material-info" >
                <h3>{material.name}</h3>
                <p>{material.benefit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="use-cases" className="use-cases-section">
        <div className="section-header">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            Perfect For
          </motion.h2>
          <motion.div 
            className="header-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>
        </div>
        
        <motion.div 
          className="use-cases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {useCases.map((useCase) => (
            <motion.div 
              key={useCase.id} 
              className="use-case-card"
              variants={itemVariants}
            >
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            What Professionals Say
          </motion.h2>
          <motion.div 
            className="header-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>
        </div>
        
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="pricing" className="pricing-section">
        <motion.div 
          className="pricing-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Ready to Upgrade Your Protection?</motion.h2>
          <motion.div className="pricing-options" variants={itemVariants}>
            <div className="pricing-card standard">
              <h3>Standard Edition</h3>
              <div className="price">$249</div>
              <ul className="features-list">
                <li>Basic cut protection</li>
                <li>Water-resistant shell</li>
                <li>Standard visibility features</li>
                <li>1-year warranty</li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
            
            <div className="pricing-card premium">
              <div className="best-value">BEST VALUE</div>
              <h3>Professional Edition</h3>
              <div className="price">$349</div>
              <ul className="features-list">
                <li>Enhanced cut protection</li>
                <li>Fully waterproof GORE-TEX®</li>
                <li>High-visibility panels</li>
                <li>Thermal insulation</li>
                <li>3-year warranty</li>
              </ul>
              <a href="#" className="buy-btn primary">Buy Now</a>
            </div>
            
            <div className="pricing-card elite">
              <h3>Elite Edition</h3>
              <div className="price">$499</div>
              <ul className="features-list">
                <li>Maximum cut protection</li>
                <li>Premium GORE-TEX® Pro</li>
                <li>Integrated safety features</li>
                <li>Advanced climate control</li>
                <li>Lifetime warranty</li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants}>Questions? Contact Us</motion.h2>
            <motion.div 
              className="header-line"
              variants={lineVariants}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Our team is ready to help you</h3>
              <a href="mailto:marius.gal@esme.fr" className="contact-email">marius.gal@esme.fr</a>
            </motion.div>
            
            <motion.div className="contact-socials" variants={itemVariants}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo">FORESTER PRO</div>
          <div className="footer-links">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-copyright">© {new Date().getFullYear()} Forester Pro. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default LumberjackJacketSection;