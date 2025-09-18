type HeaderProps = {
  title1: string;
  title2: string;
  navItems: string[];
};

export function Header({ title1, title2, navItems }: HeaderProps) {
  return (
    <header className="w-full max-w-4/5 m-auto bg-transparent pt-4 flex justify-between items-center">
      <h2 className="font-serif text-3xl">
        <span className="text-light">{title1}</span>
        <span className="text-secondary">{title2}</span>
      </h2>

      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="font-sans text-light">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
