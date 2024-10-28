import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="pt-10 pb-12 overflow-hidden bg-[#0E2B4C] text-white md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Energo Expert Plus
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
              Profesjonalne usługi elektryczne, fotowoltaiczne i przemysłowe. Dbamy o jakość, bezpieczeństwo i efektywność energetyczną każdego projektu.
            </p>

            <p className="mt-4 text-xl text-gray-300 md:mt-8">
              W **Energo Expert Plus** skupiamy się na dostarczaniu nowoczesnych rozwiązań dla domów oraz przemysłu. Nasz zespół składa się z doświadczonych specjalistów, którzy każdego dnia pracują, aby spełniać oczekiwania naszych klientów. Od instalacji domowych, poprzez kompleksowe projekty przemysłowe, aż po systemy fotowoltaiczne — zawsze stawiamy na najwyższą jakość i precyzję.
            </p>

            <p className="mt-4 text-xl text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2"></span>
                <span className="relative pr-2"> Masz pytania? </span>
              </span>
              <br className="block sm:hidden" />
              Skontaktuj się z nami poprzez{' '}
              <a
                href="/kontakt"
                title="Skontaktuj się z nami"
                className="transition-all duration-200 text-sky-400 hover:text-sky-500 hover:underline"
              >
                formularz kontaktowy
              </a>
              . Jesteśmy zawsze gotowi, aby odpowiedzieć na Twoje pytania i doradzić najlepsze rozwiązania.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2">
              <Image
                src="/images/blob-shape.svg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110">
              <Image
                src="/images/hero.jpg"
                alt="Zespół Energo Expert Plus"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
