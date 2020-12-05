import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const DiaryDisplay = () => {

  return(  <FullCalendar className ="Full-Calendar"
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
  /> 
  )

}

export default DiaryDisplay;