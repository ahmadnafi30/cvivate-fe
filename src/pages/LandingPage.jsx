import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#2859A6] text-white flex flex-col overflow-hidden">
<header className="py-6 px-4 sm:px-8 flex justify-end items-center">
  <div className="flex flex-row gap-2 w-auto">
    <Link to="/login">
      <button className="bg-white text-[#2859A6] font-semibold py-2 px-5 rounded-lg shadow hover:bg-[#2859A6] hover:text-white border border-white transition duration-300">
        Login
      </button>
    </Link>
    <Link to="/register">
      <button className="bg-white text-[#2859A6] font-semibold py-2 px-5 rounded-lg shadow hover:bg-[#2859A6] hover:text-white border border-white transition duration-300">
        Register
      </button>
    </Link>
  </div>
</header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <img
          src="/logo.png"
          alt="CVitae Logo"
          className="max-w-[200px] sm:max-w-sm rounded-lg shadow-xl mb-6"
        />
        <h1 className="text-2xl sm:text-4xl font-bold">Bangun CV Profesional dalam Hitungan Menit</h1>
        <p className="mt-2 text-sm sm:text-base max-w-md">
          CVitae adalah platform pintar untuk membuat Curriculum Vitae yang modern, rapi, dan menarik secara instan.
          Tingkatkan peluang karirmu dengan CV yang menonjol di mata perekrut.
        </p>
      </main>
    </div>
  );
}

export default LandingPage;
