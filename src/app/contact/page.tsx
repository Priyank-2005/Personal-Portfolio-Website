'use client';
import '../../styles/contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted (not connected to backend yet)');
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you’d like to work together or just say hello, feel free to send a message!</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={6} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
