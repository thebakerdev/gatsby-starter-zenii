import React from 'react';

const AboutItem = ({ feature }) => (
    <li className="mb-6">
        <div className="item" data-sal="slide-up" data-sal-easing="ease-in-cubic">
            <i className="item__icon material-icons text-primary">{ feature.icon }</i>
            <div className="item__content">
                <h3 className="item__title">{ feature.title }</h3>
                <p className="item__text md:w-3/4">{ feature.description.description }</p>
            </div>
        </div>
    </li>
);

export default AboutItem;