import React from 'react'
import olx_spinner from '/olx_spinner.gif'

function Loader() {
    return (
        <div>
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-75 z-50">
                <img src={olx_spinner} alt="Loading..." />
            </div>
        </div>
    )
}

export default Loader
