// components/ContactButtonTwo.tsx
import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-900 flex justify-center items-center py-20">
      <div className="relative inline-flex group">
        <div
          className="absolute transition-all duration-700 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:blur-xl group-hover:duration-300 animate-pulse"
        ></div>
        <Link href="/kontakt">
          <button
            title="Skontaktuj się z nami"
            className="relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500"
            role="button"
          >
            <span className="drop-shadow-md">Skontaktuj się z nami</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
