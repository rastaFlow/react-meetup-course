import NewmeetupForm from '../components/meetups/NewMeetupForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewMeetup () {
  const navigate = useNavigate()

  function addMeetupHandler (meetupData) {
     return axios.post('https://react-course-meetups-70766-default-rtdb.firebaseio.com/meetupDatabse.json', {
      Headers: {
        
        body: JSON.stringify(meetupData),
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        navigate('/')
      })
  }
  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewmeetupForm onAddNewMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
