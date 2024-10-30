import Link from 'next/link';

const ProjectsCTA = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="relative pt-20">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-900 to-blue-900 rounded-r-3xl"></div>
          <svg
            className="absolute top-8 left-1/2 -ml-3 opacity-30"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="pattern-background"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-blue-800" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#pattern-background)"></rect>
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-8 py-12 bg-gradient-to-r from-slate-950 to-blue-800 shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0 opacity-40">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-[#1E293B] text-opacity-60"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                ></path>
                <path
                  className="text-[#1E293B] text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                ></path>
              </svg>
            </div>
            <div className="relative flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                Chcesz zobaczyć nasze realizacje?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-300">
                Zobacz nasze dotychczasowe projekty i przekonaj się o naszej jakości.
              </p>
              <Link href="/realizacje">
                <button className="mt-6 px-8 py-4 bg-blue-600 rounded-lg text-lg font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                  Nasze realizacje →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCTA;
