import React from 'react'

const Project = (props) => {
    return (
        <>
            <div className='project_container'>

                <div className='image'>
                <img src={props.imgs}/>
                </div>

                <div className='info'>
                <h2>{props.heading}</h2>
                <p>{props.desc}</p>
                <a href='#'>Github</a>
                </div>


            </div>

        </>
    )
}

export default Project