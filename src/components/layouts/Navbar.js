import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
function Navbar () {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li><Link to='/'>All MeetUp</Link></li>
          <li><Link to='/new-meetup'>New MeetUp</Link></li>
          <li><Link to='/favoirtes'>Favoirtes</Link></li>

        </ul>
      </nav>
    </header>
  )
}
export default Navbar
