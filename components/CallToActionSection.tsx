import React from 'react';
import Link from 'next/link';

const CallToActionSection: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-5xl mt-20 mb-10">
      <div
        className="rounded-xl p-1"
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, rgb(37, 99, 235) 0%, rgb(56, 189, 248) 50%, rgb(14, 165, 233) 100%)',
        }}
      >
        <div className="rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 backdrop-blur">
          <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
            <div className="lg:max-w-xl">
              <h2 className="block w-full pb-2 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Chcesz nawiązać współpracę z ekspertami w branży elektrycznej?
              </h2>
              <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                Skontaktuj się z nami, aby omówić potrzeby związane z instalacjami elektrycznymi. Gwarantujemy najwyższą jakość usług, bezpieczne realizacje oraz pełne wsparcie techniczne. Poznaj opinie naszych zadowolonych klientów.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/referencje">
                <button className="bg-blue-600 text-white flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm hover:bg-blue-500">
                  Poznaj nasze referencje
                </button>
              </Link>
              <Link href="/kontakt">
                <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-gray-700 bg-gray-800 text-center text-white backdrop-blur transition-all hover:bg-gray-700 px-8 py-3 text-xs sm:text-sm">
                  Skontaktuj się z nami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
