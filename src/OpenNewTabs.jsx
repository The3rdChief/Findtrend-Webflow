import tab5 from "./assets/tabs/tab5.svg";

const OpenNewTabs = () => {
  return (
    <section className="bg-primColor py-10 md:py-24 flex items-center justify-center">
      <article className="space-y-16 sm:space-y-12 flex flex-col items-center justify-center w-10/12 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Open new tabs is sh*t{" "}
        </h2>

        <div className="relative bg-grey200 py-3 md:py-8 max-w-96 rounded-md">
          <img src={tab5} alt="" className="w-10/12 sm:w-8/12 h-20 mx-auto" />
          {/* right hover */}
          <div className="absolute flex flex-col items-center justify-center right-0 -top-12 sm:-right-28 sm:top-4 -translate-x-8 min-[390px]:translate-x-0">
            <p className="text-[0.55rem] min-[390px]:text-xs max-w-[14ch] text-center font-serif rotate-[8deg]">
              You just need one tab now
            </p>
            <svg
              className="rotate-[220deg] sm:rotate-[105deg] scale-75 -scale-y-100 sm:scale-y-100 -translate-x-6 sm:-translate-x-4 -translate-y-1"
              width="29"
              height="35"
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_115)">
                <path
                  d="M0 0.616851C1.43121 -0.319768 2.86244 -0.0239941 4.1456 0.419668C5.92228 1.06051 7.6496 1.89854 9.22887 2.88445C16.3849 7.61685 20.6786 14.3704 22.4552 22.7013C22.8994 24.8211 23.0475 27.0394 23.3436 29.4549C25.3177 28.3211 26.3541 26.1028 28.3282 24.8211C28.5749 25.807 28.0814 26.4478 27.6866 26.9901C26.058 29.2084 24.38 31.4267 22.6527 33.5957C21.8137 34.6309 21.1721 34.7295 20.2838 33.8422C18.4084 32.0182 17.2733 29.7999 16.9278 27.2366C16.9278 27.138 17.0759 26.9901 17.2733 26.7436C19.3954 27.2858 18.9019 29.9971 20.7279 30.983C21.5176 27.5816 20.9253 24.3281 20.037 21.1732C19.0993 17.8704 17.8655 14.7154 15.8914 11.9056C13.9667 9.14502 11.5484 6.92671 8.88339 4.85628C6.26773 2.73657 3.3066 1.40558 0 0.616851Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_115">
                  <rect width="28.3944" height="34.4457" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* left hover */}
          <div className="absolute flex flex-col items-center justify-center left-4 -bottom-12 sm:-left-28 sm:bottom-6 -translate-x-8 min-[390px]:translate-x-0">
            <svg
              className="rotate-[260deg] scale-75 translate-x-3 translate-y-1"
              width="29"
              height="35"
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_115)">
                <path
                  d="M0 0.616851C1.43121 -0.319768 2.86244 -0.0239941 4.1456 0.419668C5.92228 1.06051 7.6496 1.89854 9.22887 2.88445C16.3849 7.61685 20.6786 14.3704 22.4552 22.7013C22.8994 24.8211 23.0475 27.0394 23.3436 29.4549C25.3177 28.3211 26.3541 26.1028 28.3282 24.8211C28.5749 25.807 28.0814 26.4478 27.6866 26.9901C26.058 29.2084 24.38 31.4267 22.6527 33.5957C21.8137 34.6309 21.1721 34.7295 20.2838 33.8422C18.4084 32.0182 17.2733 29.7999 16.9278 27.2366C16.9278 27.138 17.0759 26.9901 17.2733 26.7436C19.3954 27.2858 18.9019 29.9971 20.7279 30.983C21.5176 27.5816 20.9253 24.3281 20.037 21.1732C19.0993 17.8704 17.8655 14.7154 15.8914 11.9056C13.9667 9.14502 11.5484 6.92671 8.88339 4.85628C6.26773 2.73657 3.3066 1.40558 0 0.616851Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_115">
                  <rect width="28.3944" height="34.4457" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[0.55rem] min-[390px]:text-xs max-w-[14ch] text-center font-serif sm:rotate-[8deg]">
              Solution to discover a trend
            </p>
          </div>
        </div>

        <p className="max-w-[70ch]">
          A solution for your browser tabs that doesn&#39;t make your device get
          slower over time. Get ease and faster to discover a trend with just
          one tab.
        </p>
      </article>
    </section>
  );
};

export default OpenNewTabs;
