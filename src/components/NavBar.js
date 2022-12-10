import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => (
        <nav className='Navbar'>
         <div className='leftNavItems'>
          <h1>Bookstore CMS</h1>
         <ul className='nav-links'>
          <li> <Link className='NavLink' to='/books'>BOOKS</Link></li>
          <li> <Link className='NavLink' to='/categories'>CATEGORIES</Link></li>
         </ul>
         </div>
         <div className='rightNavItems'>
          <button> <CgProfile /></button>
         </div>
        </nav>
);

export default NavBar;