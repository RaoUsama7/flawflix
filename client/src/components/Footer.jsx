import { navigation } from '../assets/navigation';

export default function Footer() {
  return (
    <footer
      className="mt-12 bg-gray-800 lg:mt-28 "
      aria-labelledby="footer-heading "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl border-t border-white/10 px-6  pb-8 pt-6 lg:px-8 lg:pt-12">
        <div className="mt-16  lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              {' '}
              The Movie... You wish to watch !{' '}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Please write the name of that movie, and we will upload that.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              required
              className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder=" Write The Movie Name"
            />
            <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-sm sm:leading-6"
              >
                Please Upload
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; Made with 💖 by Muhammad Usama.
          </p>
        </div>
      </div>
    </footer>
  );
}
