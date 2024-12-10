import { NavLink } from 'react-router-dom';

const Nav = () => {
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
