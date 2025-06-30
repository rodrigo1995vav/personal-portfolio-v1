import NavList from "../molecules/NavList";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full h-24 bg-white text-white p-4 flex justify-end space-x-6 items-center z-10">
      <NavList />
      <a
        href="/resume.pdf"
        className="bg-teal-400 text-white px-4 py-2 rounded"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
