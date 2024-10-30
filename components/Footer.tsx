import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="bg-gradient-to-b from-blue-100 to-blue-500 bg-clip-text font-bold text-2xl sm:text-3xl mb-6">
          Energo Expert Plus
        </div>
        <nav className="flex flex-wrap justify-center space-x-6 mb-6">
          <Link href="/o-nas" className="hover:underline transition duration-300 ease-in-out">O Nas</Link>
          <Link href="/uslugi" className="hover:underline transition duration-300 ease-in-out">Usługi</Link>
          <Link href="/realizacje" className="hover:underline transition duration-300 ease-in-out">Realizacje</Link>
          <Link href="/referencje" className="hover:underline transition duration-300 ease-in-out">Referencje</Link>
          <Link href="/oferta" className="hover:underline transition duration-300 ease-in-out">Oferta</Link>
          <Link href="/kontakt" className="hover:underline transition duration-300 ease-in-out">Kontakt</Link>
        </nav>
        <div className="text-center text-sm mb-4 px-4">
          <p>© 2024 Energo Expert Plus. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-1">Energo Expert Plus przestrzega najwyższych standardów bezpieczeństwa i jakości, dbając o dobro naszych klientów oraz środowisko.</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-center items-start space-y-4 sm:space-y-0 mb-6">
          {/* Maciej Kołodziej Kontakt */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <Link href="tel:+48782155430" className="hover:underline">
              <span className="font-semibold">Maciej Kołodziej - 782-155-430</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-400" />
            <Link href="mailto:kontakt@energo-expert.pl" className="hover:underline">
              <span className="font-semibold">kontakt@energo-expert.pl</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-center items-start space-y-4 sm:space-y-0 mb-6">
          {/* Bartłomiej Moskwa Kontakt */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <Link href="tel:+48732753715" className="hover:underline">
              <span className="font-semibold">Bartłomiej Moskwa - 732-753-715</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-400" />
            <Link href="mailto:zamowienia.bud@energo-expert.pl" className="hover:underline">
              <span className="font-semibold">zamowienia.bud@energo-expert.pl</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
