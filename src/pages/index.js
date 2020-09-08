import React from 'react';
import Layout from 'components/layout';
import SEO from "components/seo";
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'sections/section';

const Home = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulLayout(title: {eq: "Homepage"}) {
                id
                title
                description
                contentful_id
                contentModule {
                    ... on Node {
                        id
                    }
                }
            }
        }
    `);

    const contentModule = data.contentfulLayout.contentModule;

    return (
        <Layout>
            <SEO title="Homepage" />
            {
                contentModule.length > 0 && 
                contentModule.map(content => (
                    <Section contentModuleId={ content.id } type={ content.__typename } key={content.id}/>
                ))
            }
        </Layout>
    );
};

export default Home;

