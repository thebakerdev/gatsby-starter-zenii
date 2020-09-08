import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AboutItem from 'components/aboutItem';

const About = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutAbout {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        featureItem {
                            id
                            title
                            icon
                            description {
                                description
                            }
                        }
                        image {
                            fluid(quality:100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutAbout.edges.find(edge => edge.node.id === contentModuleId); 

    return (
        <section id="about" className="about-us bg-gray">
            <div className="container section mx-auto">
                <div className="about-us__content">
                    <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
                    <p data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">{ content.node.description.description }</p>
                    { 
                        content.node.featureItem.length > 0 &&
                        <ul className="mt-10 md:ml-8">
                            {
                                content.node.featureItem.map(feature => (
                                    <AboutItem feature={ feature } key={ feature.id } />
                                ))

                            }
                        </ul>
                    }
                </div>
                <div className="about-us__image">
                    <img src={ content.node.image.fluid.src } className="mx-auto" alt="About" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500" />
                </div>
            </div>
        </section>
   );
};

export default About;