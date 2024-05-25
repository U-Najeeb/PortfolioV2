const Header = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div className="p-6 fixed w-full z-[100] bg-black">
      <div className="p-4 ">
        <nav className="flex max-w-[1650px] m-auto gap-20 justify-center ">
          {navItems.map((navItem) => (
            <div key={navItem}>
              <h1>
                <a
                  href={`#${navItem.toLowerCase()}`}
                  className="text-white font-semibold transition-all duration-300 delay-75 ease-in-out hover:text-[#c9f31d] hover:transition-all hover:duration-300 hover:delay-75 hover:ease-in-out hover:shadow-lg"
                >
                  {navItem}
                </a>
              </h1>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
