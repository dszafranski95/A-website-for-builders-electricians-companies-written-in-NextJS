// components/ContactButton.tsx
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact">
      <button className="bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-purple-700">
        Skontaktuj się z nami
      </button>
    </Link>
  );
};

export default ContactButton;
