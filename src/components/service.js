import React from 'react';

const Service = ({ service }) => (
    <div className="service service--left" data-sal="fade" data-sal-easing="ease-in-cubic" data-sal-duration="400">
        <img src={ service.image.fluid.src } className="service__image" alt="Service Item" />
        <h3 className="service__title">{ service.title }</h3>
        <p>{ service.description.description }</p>
    </div>
);

export default Service;