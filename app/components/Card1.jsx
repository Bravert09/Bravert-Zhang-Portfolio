export default function Card1({time,product,title,company,description}) {
  return (
    <li className="">
      <div
        className="relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 pb-1 
      group lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
      >
        <div
          className="hidden z-0 absolute -inset-x-4 -inset-y-4 rounded-md
           transition motion-reduce:transition-none lg:-inset-x-6
         lg:block lg:group-hover:bg-slate-800/50 
         lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
         lg:group-hover:drop-shadow-lg
         "
        ></div>

        <header className="sm:col-span-2 z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
          {time}
        </header>

        <div className="sm:col-span-6 z-10">
          <div>
            <h3 className="font-medium leading-snug text-slate-200">
              <a
                href={product}
                target="_blank"
                className="group/link text-base font-medium "
              >
                <span
                  className="hidden absolute -inset-x-4 -inset-y-2.5 
                rounded md:-inset-x-6 md:inset-y-4 lg:block"
                ></span>
                <span className="group-hover/link:text-teal-500">
                  {title}
                  <span className="ml-2">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0
                      transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                      group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1
                      "
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
          </div>

          <p className="mt-2  text-sm leading-normal">
          {description}
          </p>
          <ul className="flex flex-wrap">
            <li className="mr-1.5 mt-2">
              <div className="flex rounded-full items-center text-xs tracking-wide bg-teal-400/20 px-3 py-1 font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex rounded-full items-center text-xs tracking-wide bg-teal-400/20 px-3 py-1 font-medium leading-5 text-teal-300">
                Typescript
              </div>
            </li>{" "}
            <li className="mr-1.5 mt-2">
              <div className="flex rounded-full items-center text-xs tracking-wide bg-teal-400/20 px-3 py-1 font-medium leading-5 text-teal-300">
                Tailwind
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
