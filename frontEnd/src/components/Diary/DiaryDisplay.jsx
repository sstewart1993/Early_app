import React from 'react'
import FullCalendar from '@fullcalendar/react'
import {Calendar} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


const DiaryDisplay = ({diary}) => {

  const events = [{title: "My Test Event", date: "2020-12-06", id: 1, allDay: true}, 
    {title:"My Second Test Event", date:"2020-12-07", id: 2, allDay:true}]

 
  const diaryCellFill = diary.map((entry, index) => {
      let newtitle = toString(entry.entries.id)
      let newDate = toString(entry.entries.date)
      let newCell = {title: newtitle, date: newDate}
      events.push(newCell)
    })

  // const handleEventClick = function(event){
  //   console.log("I've been clicked")
  // }
 


  return(  <FullCalendar className ="Full-Calendar"
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth" 
    events={events}
    
  /> 
  )

}

export default DiaryDisplay;