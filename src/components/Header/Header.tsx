import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";

const links = [
  { title: "home", urlTo: "/" },
  {
    title: "about",
    urlTo: "about",
  },
  {
    title: "blog",
    urlTo: "blog",
  },
  {
    title: "contact",
    urlTo: "contact",
  },
];

export function Header() {
  return (
    <div id="header-component" className="bg-transparent px-2 sm:px-4 py-2.5">
      <div className="container justify-center md:justify-between flex flex-wrap items-center mx-auto">
        {/**render logo */}
        <Logo />

        {/**navigation menu */}
        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-row p-4 md:flex-row sm:justify-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 uppercase">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.urlTo}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-lg font-extrabold md:bg-transparent md:hover:text-primary md:p-0 text-primary"
                      : "block py-2 pl-3 pr-4 text-text text-lg font-extrabold md:bg-transparent md:hover:text-primary md:p-0"
                  }
                  aria-current="page"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/**searchbar */}
        <div className="flex md:order-2 w-full lg:w-1/3">
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
