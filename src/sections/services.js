import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Service from 'components/service';

const Services = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutServices {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        serviceItems {
                            id
                            title
                            description {
                                description
                            }
                            image {
                                fluid(quality: 100, maxWidth: 208, maxHeight: 146) {
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutServices.edges.find(edge => edge.node.id === contentModuleId);
    return (
        <section id="services" className="services container section mx-auto">
            <div>
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
                {
                    content.node.serviceItems.length > 0 &&
                    <div className="services__items">
                        {
                            content.node.serviceItems.map(service => (
                                <Service service={service} key={service.id} />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Services.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Services;