import NavLink from "../atoms/NavLink";

const NavList = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <ul className="flex space-x-6">
      {navItems.map((item) => (
        <NavLink key={item.id} href={`#${item.id}`} label={item.label} />
      ))}
    </ul>
  );
};

export default NavList;
