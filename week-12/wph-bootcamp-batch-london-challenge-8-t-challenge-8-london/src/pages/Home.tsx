import React from "react";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ServicesSection />
//         <TestimonialsSection />
//         <ContactSection />
//       </main>

//       <Footer />
//     </div>
//   );

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Company Profile Assignment
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Start building your components!
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>TailwindCSS configured</p>
          <p>Folder structure ready</p>
          <p>Check README.md for instructions</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
