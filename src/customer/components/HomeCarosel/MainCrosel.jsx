import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//images
import img1 from "../../../image/Firstpage.jpg"
import img2 from "../../../image/brushes.jpg"
import img3 from "../../../image/sofapaper.jpg"
import img4 from "../../../image/wallpaper.jpg"

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <img className="item" src={img1} alt="image1" data-value="1"/>,
    <img className="item" src={img2} alt="image1" data-value="2"/>,
    <img className="item" src={img3} alt="image1" data-value="3"/>,
    <img className="item" src={img4} alt="image1" data-value="4"/>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Carousel;

//I have commented your old code below

// import React from 'react'
// import { mainCarouselData } from './MainCaroselData'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css';

// //spelling yeno carousel da? :)
// const MainCrosel = () => {

//     const items = mainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)

//     return (
//         <AliceCarousel
//             items={items}
//         />
//     )
// }

// export default MainCrosel