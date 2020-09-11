import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import PricingPlan from 'components/pricingPlan';

const Pricing = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutPricing {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        pricingPlans {
                            id
                            title
                            price
                            perItem
                            currency
                            planFeatures
                            buttonText
                            buttonUrl
                            featured
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutPricing.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section id="pricing" className="pricing section bg-gray">
            <div className="container mx-auto">
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
                {
                    content.node.pricingPlans.length > 0 && 
                    <div className="pricing__items">
                        {
                            content.node.pricingPlans.map(plan => (
                                <PricingPlan plan={ plan } key={ plan.id } />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Pricing.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Pricing;