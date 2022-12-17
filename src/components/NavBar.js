import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => (
 <header className="flex justify-between header-mb p-6 md:px-24 w-full shadow-lg min-h-24 bg-white">
    <nav className="flex gap-10 flex-col md:flex-row">
      <NavLink to="/">
        <h1 className="app-color-primary h-full flex  items-center text-3xl font-bold  mr-2">
          Bookstore CMS
        </h1>
      </NavLink >
      <NavLink to="/" className={({ isActive }) => (isActive ? '' : 'opacity-50')
            }>
        <span className="h-full flex items-center text-black-two text-sm">
          BOOKS
        </span>
      </NavLink >
      <NavLink to="/categories" className={({ isActive }) => (isActive ? '' : 'opacity-50')}>
        <span className="h-full flex items-center text-black-two text-sm">
          CATEGORIES
        </span>
      </NavLink >
    </nav>
    <button type="button" aria-label="Save" className="h-11 w-11 text-3xl flex items-center p-2 app-color-primary rounded-full border-2 border-grey-border"><CgProfile /></button>
  </header>
);

export default NavBar;