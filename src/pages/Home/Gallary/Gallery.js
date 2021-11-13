import React from 'react';
import "./Gallery.css";
import photo1 from "../../../Images/Bycicle/bycicle (1).jpg";
import photo2 from "../../../Images/Bycicle/bycicle (2).jpg";
import photo3 from "../../../Images/Bycicle/bycicle (3).jpg";
import photo4 from "../../../Images/Bycicle/bycicle (4).jpg";
import photo5 from "../../../Images/Bycicle/bycicle (5).jpg";
import photo6 from "../../../Images/Bycicle/bycicle (6).jpg";


const Gallery = () => {
    return (
        <div className="gallery2">
            <h2 className="text-primary mt-5 mb-3">Life Is Beautiful With Bycicle </h2>
            <div className="gallery">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;