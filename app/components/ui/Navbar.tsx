import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="p-10 pr-10 xl:pr-32 flex justify-end">
      <ThemeToggle />
    </nav>
  )
}

export default Navbar