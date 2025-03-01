import Link from 'next/link';

function NavButtons() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {[
        { href: "/test-pages/about-us", label: "About Us" },
        { href: "/information", label: "Information" },
        { href: "/stages", label: "Stages" },
        { href: "/distance-calculator", label: "Distance Calculator" },
        { href: "/history", label: "History" },
        { href: "/advise", label: "Advise" },
      ].map(({ href, label }) => (
        <Link key={href} href={href}>
          <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm text-sm
                             hover:bg-gray-100 hover:scale-105 transition-all duration-200 
                             dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800">
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default NavButtons;
