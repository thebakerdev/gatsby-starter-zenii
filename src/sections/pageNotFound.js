import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const PageNotFound = ({ contentModuleId }) => {
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutPageNotFound {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        buttonText
                        buttonUrl
                        image {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutPageNotFound.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section className="page-not-found container section mx-auto text-center py-24">
            <div className="flex flex-col mx-auto">
                <h2 className="font-bold text-5xl mb-12">{ content.node.heading }</h2>
                <div className="page-not-found__image-wrap mb-12">
                    <Img fluid={ content.node.image.fluid } alt="not found" className="page-not-found__image" />
                </div>
                <p className="mb-12">{ content.node.description.description }</p>
                <Link to={ content.node.buttonUrl } className="btn btn--secondary mx-auto md:w-1/2">{ content.node.buttonText }</Link>
            </div>  
        </section>
    );
};

PageNotFound.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default PageNotFound;