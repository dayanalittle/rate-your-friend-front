// services
import * as authService from '../../services/authService'

// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {


  const handleDeleteAccount = async (): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>Rate <br /> Your Friends</h1>
      <img src="https://i.imgur.com/ZQgiRK1.jpg" alt="rating pic" />

      {user &&
        <button onClick={handleDeleteAccount}>
          END FRIENDSHIPS
        </button>
      }
    </main>
  )
}

export default Landing
