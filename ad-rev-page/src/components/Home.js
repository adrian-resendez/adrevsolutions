import React from 'react';
import '../styles/Home.css';
import HomeImages from './HomeImages';

function Home() {
  return (
    <div className="home-container">
      {/* Background Images */}
      <HomeImages />

      {/* Header Section */}
      <header className="header">
        <h1 className="title">AdRev Solutions</h1>
        <p className="tagline">Unleash Your Brand's Potential</p>
        <p className="sub-tagline">
          We design and manage customized, specifically targeted, ad campaigns to help you take your business to the next level.
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>AdRev Marketing Solutions</h2>
        <p>
          AdRev Solutions is a social media optimization company that specializes in creating targeted advertising campaigns for small businesses. We ensure your business is being promoted to your ideal clients, driving increased website traffic and visibility.
        </p>
      </section>

      {/* Marketing Solutions Section */}
      <section className="marketing-section">
        <h2>AdRev Solutions Marketing Solutions</h2>
        <p>
          At AdRev, we don’t just optimize your social media — we transform it. Unlike other agencies, we take a personalized, data-driven approach that aligns with your unique business goals. Our team dives deep into understanding your audience, crafting custom strategies that drive engagement, conversions, and real results.
        </p>
        <button className="cta-button">Find Out More</button>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <h2>Our Approach</h2>
        <p>
          At AdRev Solutions Marketing Agency, we believe in taking a holistic approach to digital marketing. We work closely with our clients to understand their unique needs and goals. We promise exclusivity in your targeted area. Our company was created with the purpose of reinventing the process, and standards associated with social media optimization.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Let's Get Started</p>
        <p>
          Take the first step, and contact us to discuss your marketing and business goals. Send us a message, and we will get back to you as soon as possible.
        </p>
        <a href="mailto:youremail@example.com" className="cta-button">
          Get an Estimate
        </a>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>AdRev Solutions</p>
        <p>9512883823</p>
        <p>Hours: Open today 09:00 am – 03:00 pm</p>
        <p>Upon request, before or after-hours appointments can be accommodated.</p>
        <p>Copyright © 2024 AdRev Solutions - All Rights Reserved.</p>
        <p>Powered by [Your Company Name]</p>
        <p>
          This website uses cookies. We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
        </p>
        <button className="cookie-button">Accept</button>
      </footer>
    </div>
  );
}

export default Home;
