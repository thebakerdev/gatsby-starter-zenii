import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = ({ menus }) => {

    const data = useStaticQuery(graphql`
        query {
            contentfulContactDetails {
                id
                addressLine1
                addressLine2
                contactNumber
                email
                facebookUrl
                twitterUrl
                instagramUrl
            }
        }
    `);

    const footerMenu = (menus !== null &&  menus !== undefined) ? menus.find(menu => menu.type === 'secondary') : null;

    return (
        <footer className="footer bg-tertiary text-white">
            <div className="container section mx-auto py-10">
                <div className="footer__content">
                    <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">business</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.addressLine1 }<br/>{ data.contentfulContactDetails.addressLine2 }</p>
                                </div> 
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">settings_phone</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.contactNumber }</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">email</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.email }</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {
                    (footerMenu !== null && footerMenu !== undefined) &&
                    <div className="footer__content">
                        <h3 className="text-lg font-bold mb-4">Menu Links</h3>
                        <ul className="text-sm">
                            {
                                footerMenu.menuItems.map(menu => (
                                    <li className="mb-2" key={ menu.id } ><a className="hover:text-primary" href={ menu.url }>{ menu.title }</a></li>
                                ))
                            }
                        </ul>
                    </div>
                }
                <div className="footer__content">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <ul className="flex text-sm">
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.facebookUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/facebook.svg') }  alt="Facebook Icon" />
                            </a>
                        </li>
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.twitterUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/twitter.svg') } alt="Twitter Icon" />
                            </a>
                        </li>
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.instagramUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/instagram.svg') } alt="Instagram Icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

Footer.defaultProps = {
    menus: null
};

Footer.propTypes = {
    menus: PropTypes.any
};


export default Footer;