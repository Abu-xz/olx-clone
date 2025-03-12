import React from 'react'
import rolling_spinner from '/rolling_spinner.gif'

function Loader() {
    return (
        <div>
            <div className="w-full h-screen flex justify-center items-center bg-white bg-opacity-75 z-50">
                <img src={rolling_spinner} alt="Loading..." />
            </div>
        </div>
    )
}

export default Loader
