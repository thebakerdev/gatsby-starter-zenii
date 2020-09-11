import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Testimonial = ({ testimonial }) => (
    <div className="testimonial">
        <div className="testimonial__content">
            <Img fluid={ testimonial.image.fluid } alt={ testimonial.name } className="testimonial__image" style={{position: "absolute"}}/>
            <strong className="testimonial__name">{ testimonial.name }</strong>
            <p className="testimonial__company text-secondary mb-4">{ testimonial.company }</p>
            <i className="testimonial__comment text-sm">{ testimonial.comment.comment }</i>
        </div>
    </div>
);

Testimonial.propTypes = {
    testimonial : PropTypes.object.isRequired
}

export default Testimonial;