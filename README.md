# Gastby Starter Zenii
A One-page Gatsby starter built with Tailwindcss and  Postcss.

## Features
- Styles are ure built using [Tailwindcss](https://tailwindcss.com/)
- Css styles use [Postcss](https://postcss.org/)
- [Contentful](https://www.contentful.com/) integration
- Uses [Material Icons](https://material.io/resources/icons/?style=baseline)

## Requirements
The theme requires you to have a contentful account. You can register your account at [https://www.contentful.com/sign-up/](https://www.contentful.com/sign-up/).

## Create with Stackbit

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/thebakerdev/gatsby-starter-zenii&ssg=gatsby&cms=contentful)

## Getting Started
Clone the theme
```
git clone git@github.com:thebakerdev/gatsby-starter-zenii.git
```
Install dependencies
```
npm install
```
This project comes with a Contentful setup command from [https://github.com/contentful-userland/gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter).
```
npm run setup
```
The process will ask for your credentials which can be found on your contentful settings. 
### Development Commands
Run the project locally
```
npm run develop
```
Build the project
```
npm run build
```
Serve the build project
```
npm run serve
```
## Theme Customizations

### Changing Colors

The theme comes with a **tailwind.config.js** file and can be customized based on your preferred color scheme.

### Changing fonts

The theme uses [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/) plugin to load google fonts. You can change font settings inside **gatsby-config.js** and **tailwind.config.js**.

### Pages and Sections

You can simply add new sections and pages in the theme by creating new contentful model and map it to the component.

#### Creating Sections

- Create a layout in your contentful account and name it like **Layout > LayoutName** (ex. Layout > Portfolio) and add your specific fields.
- Edit the **Layout** model **Content Module** settings and add your new layout to the **Accept only specified entry type** on the validation tab.
- Create a section component inside **src/sections** (ex. portfolio.js).
- Import the new component inside the **section.js** file and add it to the components array.   
- Add static query inside your new section component. Make sure that the component accepts **contentModuleId** as a prop.
```
const data = useStaticQuery(graphql`
  query {
      allContentfulLayoutPortfolio {
          edges {
              node {
                  id
                  heading
                  subheading
                  description {
                      description
                  }
                  ctaText
                  ctaUrl
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

const content = data.allContentfulLayoutPortfolio.edges.find(edge => edge.node.id === contentModuleId);
```
- And lastly add the new section layout in your contentful layout record. By default it is named as Homepage.
- Sections can be rearranged in any order you want.

### Contentful Content Types
- **Layout** - The page layout content.
- **Layout > &ast;** - The section content which is inside the layout.
- **Menu** - Navigation menu for each layout
- **Menu Item** - Navigation links for menu
- **Contact Details** - Basic information and social media links
- **Featured Items** - About section featured items
- **Testimonial** - User testimonials
- **Pricing Plan** - Product/Service plans
- **Service Item** - Service items inside services section 
