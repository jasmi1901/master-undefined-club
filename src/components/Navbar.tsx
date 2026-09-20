import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Cricket", href: "#cricket" },
  { label: "Badminton", href: "#badminton" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="bg-white py-3 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logo} alt="Masters Undefined Club" className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14" />

          <div className="min-w-0 leading-none">
            <div className="text-[1.1rem] font-black tracking-tight text-blue-900 sm:text-[1.5rem]">MASTERS</div>
            <div className="text-[0.75rem] font-black tracking-tight text-blue-900 sm:text-[1.1rem]">UNDEFINED CLUB</div>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.label === "Home" ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#membership"
          className="shrink-0 rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-blue-500 sm:px-5 sm:py-3 sm:text-sm"
        >
          Join the Club
        </a>
      </nav>
    </header>
  );
};

export default Navbar;