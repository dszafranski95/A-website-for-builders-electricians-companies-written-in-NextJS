"use client"
import Link from 'next/link';

const RealizationsButton = () => {
  return (
    <div className="bg-[#0E2B4C] flex justify-center items-center py-20">
      <Link href="/realizacje">
        <button
          className="text-2xl font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-blue-400 via-blue-500 to-white hover:from-blue-600 hover:via-blue-700 hover:to-white"
        >
          Nasze realizacje
        </button>
      </Link>
    </div>
  );
};

export default RealizationsButton;
