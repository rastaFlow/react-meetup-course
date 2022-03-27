import Cards from '../UI/Cards'
import classes from './MeetupItem.module.css'
function MeetupItem (props) {
  return (

    <li className={classes.itme}>
      <Cards>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>TO FAVOIRTES</button>
        </div>
      </Cards>
    </li>

  )
}
export default MeetupItem
