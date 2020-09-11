import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Service = ({ service }) => (
    <div className="service service--left" data-sal="fade" data-sal-easing="ease-in-cubic" data-sal-duration="400">
        <div className="service__image-wrap">
            <Img fluid={ service.image.fluid } alt="service item" className="service__image"/>
        </div>
        <h3 className="service__title">{ service.title }</h3>
        <p>{ service.description.description }</p>
    </div>
);

Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;