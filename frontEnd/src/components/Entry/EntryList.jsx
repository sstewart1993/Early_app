import React from 'react';

const EntryList = ({entries}) => {
    if (!entries) {
        return (<p>"Loading..."</p>)
    }

    const entryNodes = entries.map((entry, index)=> {
        return (
            <li key = {index} > 
            <div>
                <Entry entry={entry}/>
            </div>
            </li>
        )
    })
}

export default EntryList;