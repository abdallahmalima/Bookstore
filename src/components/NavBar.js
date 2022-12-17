import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => (
<header className="flex justify-between header-mb p-6 md:px-24 w-full shadow-lg min-h-24 bg-white">
    <nav className="flex gap-10 flex-col md:flex-row">
      <Link to="/">
        <h1 className="app-color-primary h-full flex  items-center text-3xl font-bold  mr-2">
          Bookstore CMS
        </h1>
      </Link>
      <Link to="/">
        <span className="h-full flex items-center text-black-two text-sm">
          BOOKS
        </span>
      </Link>
      <Link to="/categories">
        <span className="h-full flex items-center text-black-two text-sm opacity-50">
          CATEGORIES
        </span>
      </Link>
    </nav>
    <button type="button" aria-label="Save" className="h-11 w-11 text-3xl flex items-center p-2 app-color-primary rounded-full border-2 border-grey-border"><CgProfile /></button>
  </header>

);

export default NavBar;