import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import Section from 'sections/section';

export const query = graphql`
    query($slug: String!) {
        contentfulLayout(slug: { eq: $slug }) {
            id
            slug
            title
            description
            contentful_id
            menu {
                name
                type
                menuItems {
                    id
                    title
                    url
                }
            },
            contentModule {
                ... on Node {
                    id
                }
            }
        }
    }
`;

export default function PageTemplate({ data }) {
    const title = data.contentfulLayout.title;
    const description = data.contentfulLayout.description;
    const menus = data.contentfulLayout.menu;
    const contentModule = data.contentfulLayout.contentModule;

    return (
        <Layout menus={ menus }>
            <SEO title={ title } description={ description } />
            {
                contentModule && contentModule.length > 0 &&
                contentModule.map(content => (
                    <Section contentModuleId={ content.id } type={ content.__typename } key={content.id}/>
                ))
            }
        </Layout>
    );
}
