import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'sections/section';

const NotFoundPage = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulLayout(slug: {eq: "404"}) {
                id
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
    `);

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

export default NotFoundPage;
