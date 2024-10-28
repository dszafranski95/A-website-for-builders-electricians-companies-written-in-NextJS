// components/ContactButtonTwo.tsx
import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="bg-black flex justify-center items-center py-20">
      <div className="relative inline-flex group">
        <div
          className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        ></div>
        <Link href="/kontakt">
          <button
            title="Skontaktuj się z nami"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Skontaktuj się z nami
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
