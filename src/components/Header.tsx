type HeaderProps = {
  title1: string;
  title2: string;
  navItems: string[];
};

export function Header({ title1, title2, navItems }: HeaderProps) {
  return (
    <header className="w-full max-w-4/5 m-auto bg-transparent pt-4 flex justify-between items-center">
      <h1 className="font-serif text-3xl">
        <span className="text-primary">{title1}</span>
        <span className="text-secondary">{title2}</span>
      </h1>

      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="font-sans text-primary">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
