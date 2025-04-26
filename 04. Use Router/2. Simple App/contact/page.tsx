"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <form className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <button
        onClick={handleBack}
        className="px-6 py-3 mt-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default Contact;
