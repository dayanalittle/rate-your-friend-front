// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props

  return (
    <nav>
      {user ?
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/profiles">ALL FRIENDS</NavLink></li>
          <li><NavLink to="/change-password">CHANGE PASSWORD</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
        :
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/login">LOG IN</NavLink></li>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
