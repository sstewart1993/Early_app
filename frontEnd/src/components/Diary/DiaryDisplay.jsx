import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import EntryDetail from "../Entry/EntryDetail"

const DiaryDisplay = ({diary, handleEntryClick}) => {

  const events = []

  if (diary[0] !== undefined){
    diary[0].entries.forEach(entry => {
      let newCell = {title: entry.prompt.toString(),
        date: entry.date.toString(),
        id: entry.id, 
        allDay: true,
        extendedProps: {...entry}
      }
        
      events.push(newCell)
    })}

    const handleEventClick = function(eventClickInfo){
      handleEntryClick(eventClickInfo)
    }
  
      
    
  return(  <FullCalendar className ="Full-Calendar"
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth" 
    events={events} eventClick={handleEventClick} /> 
  )

}

export default DiaryDisplay;