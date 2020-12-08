import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '../Diary/DiaryDisplay.css'
// import EntryDetail from "../Entry/EntryDetail"

const DiaryDisplay = ({diary, handleEntryClick}) => {

  const events = []

  if (diary[0] !== undefined){
    diary[0].entries.forEach(entry => {
      let newCell = {title: "Log: " + entry.id,
        date: entry.date.toString(),
        id: entry.id, 
        allDay: true,
        extendedProps: {...entry},
        display: 'block'
      }
        
      events.push(newCell)
    })}

    const handleEventClick = function(eventClickInfo){
      console.log(eventClickInfo)
      handleEntryClick(eventClickInfo)
    }
  
      
    
  return(  <FullCalendar className ="Full-Calendar"
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth" 
    events={events} eventClick={handleEventClick} eventBackgroundColor='#CDD3CE'eventTextColor='#C34B4F' eventColor='#D67E80' /> 
  )

}

export default DiaryDisplay;