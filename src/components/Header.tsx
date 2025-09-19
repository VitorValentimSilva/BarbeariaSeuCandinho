import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type HeaderProps = {
  title1: string;
  title2: string;
  navItems: string[];
};

export function Header({ title1, title2, navItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-4/5 m-auto bg-transparent pt-4 flex justify-between items-center relative">
      <h2 className="font-serif text-3xl">
        <span className="text-light">{title1}</span>
        <span className="text-secondary">{title2}</span>
      </h2>

      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="font-sans text-light cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-light text-3xl focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/90 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-sans text-light text-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
