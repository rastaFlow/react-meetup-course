import MeetupList from '../components/meetups/MeetupList'
import { useState, useEffect } from 'react'
import axios from 'axios'

function AllMeetup () {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    return axios.get('https://react-course-meetups-70766-default-rtdb.firebaseio.com/meetupDatabse.json')
      .then(response => {
        return response.data
      })
      .then((data) => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
 
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
        console.log(meetups)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1> 
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}
export default AllMeetup
