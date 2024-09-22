import React from 'react';
// import

const Title = ({ title, desc }) => {
    return (
        <div className="title">
            {
                title && <h3>{title}</h3>
            }
            {
                desc && <p>{desc}</p>
            }
        </div>
    )
}

export default Title