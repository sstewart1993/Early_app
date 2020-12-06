import React from 'react'
import FullCalendar from '@fullcalendar/react'
import {Calendar} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'


const DiaryDisplay = () => {
      


  return(  <FullCalendar className ="Full-Calendar"
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth" events={[{title:"First Entry", date:"2020-12-05"}]}
  /> 
  )

}

export default DiaryDisplay;