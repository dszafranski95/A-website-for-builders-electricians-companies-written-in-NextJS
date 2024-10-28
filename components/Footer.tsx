import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-3xl font-bold mb-6">
          Energo Expert Plus
        </div>
        <div className="flex flex-wrap justify-center space-x-8 mb-6">
          <Link href="/o-nas" className="hover:underline">O Nas</Link>
          <Link href="/uslugi" className="hover:underline">Usługi</Link>
          <Link href="/realizacje" className="hover:underline">Realizacje</Link>
          <Link href="/referencje" className="hover:underline">Referencje</Link>
          <Link href="/oferta" className="hover:underline">Oferta</Link>
          <Link href="/kontakt" className="hover:underline">Kontakt</Link>
        </div>
        <div className="text-center mb-6 px-4">
          <p className="text-sm mb-4">© 2024 Energo Expert Plus. Wszelkie prawa zastrzeżone.</p>
          <p className="text-sm mb-4">
            Energo Expert Plus przestrzega najwyższych standardów bezpieczeństwa i jakości, dbając o dobro naszych klientów oraz środowisko.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-400">
            <FaFacebookF className="text-2xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaLinkedinIn className="text-2xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaTwitter className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
