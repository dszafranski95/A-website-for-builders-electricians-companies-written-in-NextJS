// components/ContactForm.tsx
"use client";
import { useState } from 'react';
import ArticleSubmissionSection from '@/components/ArticleSubmissionSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Wysyłanie...');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Wiadomość wysłana pomyślnie!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setAgreeTerms(false);
      } else {
        setStatus('Nie udało się wysłać wiadomości.');
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setStatus('Wystąpił błąd podczas wysyłania.');
    }
  };

  return (
    <div className="font-sans bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      {/* Sekcja informacji kontaktowych */}
      <ArticleSubmissionSection />

      {/* Formularz kontaktowy */}
      <div className="-mt-40 mb-6 px-4 pt-12">
        <div className="mx-auto max-w-6xl shadow-xl p-8 relative bg-gradient-to-r from-slate-900 to-blue-900 rounded-md">
          <h2 className="text-2xl text-blue-400 font-bold mb-6">Zapytanie o produkt lub usługę</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-gray-300 text-sm block mb-2">Imię i Nazwisko</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Wpisz imię i nazwisko"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Twój E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Temat</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Temat"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Treść</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Wiadomość"
                rows={6}
                required
                className="w-full rounded-md px-4 py-2.5 border border-gray-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                id="checkbox1"
                type="checkbox"
                checked={agreeTerms}
                onChange={handleCheckboxChange}
                className="w-4 h-4 mr-3 shrink-0 text-blue-500 bg-gray-900 border-gray-700 focus:ring-blue-500"
              />
              <label htmlFor="checkbox1" className="text-sm text-gray-300">
                Akceptuję warunki korzystania
              </label>
            </div>
            <button
              type="submit"
              className="text-white w-max bg-blue-600 hover:bg-blue-500 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
              disabled={!agreeTerms}
            >
              Wyślij Wiadomość
            </button>
          </form>
          {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
        </div>
      </div>

      {/* Mapa z lokalizacją firmy */}
      <div className="mb-12 pb-12 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tutaj znajduje się nasza firma</h2>
          <p className="text-gray-300 mb-6">Zapraszamy do odwiedzenia nas w naszym biurze</p>
          <div className="w-full h-80 rounded-md overflow-hidden shadow-xl animate-fadeIn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.291113705967!2d16.604114276208396!3d50.67333766803454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e37e312e92a9d%3A0xa857cd8bb83c70e4!2sOstroszowicka%208%2C%2058-260%20Bielawa!5e0!3m2!1spl!2spl!4v1697048362584!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
