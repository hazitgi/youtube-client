import React from 'react'
import './SidebarRow.css'

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`SidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebarRaw__icon" />
            <h2 className="sidebarRaw__title">{title}</h2>
        </ div>
    )
}

export default SidebarRow
