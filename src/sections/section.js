import React from 'react';
import PropTypes from "prop-types";
import Hero from 'sections/hero';
import About from 'sections/about';
import Testimonials from 'sections/testimonials';
import Services from 'sections/services';
import Pricing from 'sections/pricing';
import Contact from 'sections/contact';

const components = {
    Hero,
    About,
    Testimonials,
    Services,
    Pricing,
    Contact
};

const Section = ({contentModuleId, type}) => {
    
    const component = type.split('Layout')[1];
    
    if (typeof components[component] === 'undefined') {
        return '';
    }

    return React.createElement(components[component],{
        contentModuleId
    });
}

Section.prototype = {
    component: PropTypes.string.isRequired 
}

export default Section;
