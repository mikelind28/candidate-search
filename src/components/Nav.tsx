import { NavLink } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav">
      <div className='nav-item'>
        <NavLink to="/" className="nav-link">
        Home
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/SavedCandidates" className="nav-link">
        Potential Candidates
        </NavLink>
      </div>
    </nav>
  )
};

export default Nav;
