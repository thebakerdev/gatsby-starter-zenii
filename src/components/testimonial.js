import React from 'react';

const Testimonial = ({ testimonial }) => (
    <div className="testimonial">
        <div className="testimonial__content">
            <img src={ testimonial.image.fluid.src } alt={ testimonial.name } className="testimonial__image" />
            <strong className="testimonial__name">{ testimonial.name }</strong>
            <p className="testimonial__company text-secondary mb-4">{ testimonial.company }</p>
            <i className="testimonial__comment text-sm">{ testimonial.comment.comment }</i>
        </div>
    </div>
);

export default Testimonial;