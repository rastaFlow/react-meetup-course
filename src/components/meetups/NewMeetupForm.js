import { useRef } from 'react'
import classes from './NewMeetupForm.module.css'
import Cards from '../UI/Cards'

function NewmeetupForm (props) {
  const titleHandler = useRef()
  const imageHandler = useRef()
  const descriptionHandler = useRef()
  const addressHandler = useRef()

  function submitHandler (event) {
    event.preventDefault()
    const enteredTitle = titleHandler.current.value
    const enteredImage = imageHandler.current.value
    const enteredDescription = descriptionHandler.current.value
    const enteredAddress = addressHandler.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      address: enteredAddress
    }
    props.onAddNewMeetup(meetupData)
  }

  return (
    <Cards>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meet Up Title </label>
          <input type='text' required id='title' ref={titleHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meet Up Image </label>
          <input type='url' required id='image' ref={imageHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address </label>
          <input type='text' required id='address' ref={addressHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionHandler}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Cards>
  )
}
export default NewmeetupForm
