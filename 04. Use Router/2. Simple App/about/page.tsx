"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the About Page! Here at Our Company, we are dedicated to
          providing top-notch services that help individuals and businesses
          thrive. Our team is passionate about creating innovative solutions,
          fostering strong relationships, and delivering results that exceed
          expectations.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our journey began with a simple idea: to make a real difference in the
          lives of those we serve. Through collaboration, creativity, and
          relentless dedication, we have grown into a dynamic and
          customer-centric company with a global impact. Whether you are a small
          startup or a large enterprise, we have the expertise to support your
          goals and vision.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for visiting our About Page. We invite you to explore our
          services and learn more about the amazing work we do. If you have any
          questions, feel free to reach out we would love to connect with you!
        </p>
      </div>

      <button
        onClick={handleBack}
        className="px-6 py-3 mt-6 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
