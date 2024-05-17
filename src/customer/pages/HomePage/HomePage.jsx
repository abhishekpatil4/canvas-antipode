import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'

//you need to import the image like this, you can use any variable name, I've used *img1*
import img1 from "../../../image/Firstpage.jpg"

const Homepage = () => {
    return (
        <div>
            <MainCrosel />

            {/* then in <img> tag, in the src attribute use the variable name  */}
            <img src={img1} alt="" />
            <div>
                other section
            </div>

        </div>
    )
}

export default Homepage