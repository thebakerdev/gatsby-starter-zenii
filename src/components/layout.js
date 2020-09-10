import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import sal from 'sal.js';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                    siteMetadata {
                    title
                }
            }
        }
    `)

    // Initialize scroll animations
    useEffect(() => {
        sal();
    },[]);

    return (
        <div className="wrapper overflow-hidden">
            <h1 className="hidden">{ data.site.siteMetadata.title }</h1>
            <Header/>
            <div>
                <main>{ children }</main>
            </div>
            <Footer/>
        </div>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;