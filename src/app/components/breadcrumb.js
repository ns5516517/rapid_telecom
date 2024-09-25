import React from 'react'

const Breadcrumb = ({ name, view, icon }) => {
    return (
        <div className="user_breadcrumb">
            <ul>
                <li>{name} {icon && <span>{icon}</span>}</li>
                {view && <li>{view}</li>}
            </ul>
        </div>
    )
}

export default Breadcrumb