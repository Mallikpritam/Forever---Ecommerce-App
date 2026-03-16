import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">If you have any questions or inquiries, please feel free to reach out to us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email:mallikpritam2000@gmail.com</li>
        <li>Phone: +91 8984844815</li>
        <li>Address: Centurion university pin-752050,Jatni , khurda , India </li>
        </ul>
      <p className="mb-2">You can also fill out the contact form below, and we will get back to you as soon as possible:</p>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;