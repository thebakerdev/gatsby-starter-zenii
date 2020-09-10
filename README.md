# Gastby Starter Zenii
A One-page Gatsby starter built with Tailwindcss and  Postcss.

## Features
- Styles are ure built using [Tailwindcss](https://tailwindcss.com/)
- Css styles use [Postcss](https://postcss.org/)
- [Contentful](https://www.contentful.com/) integration
- Uses [Material Icons](https://material.io/resources/icons/?style=baseline)

## Requirements
The theme requires you to have a contentful account. You can register your account at [https://www.contentful.com/sign-up/](https://www.contentful.com/sign-up/).

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
npm setup
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

### Adding Additional Sections
You can simply add your new section inside the **src/sections** folder and import it inside the **section.js** file. Create a new content model based on the section file. Ex. portfolio.js = Layout > Portfolio. Add the specific static query inside your section file and filter the specific section.
```
const data = useStaticQuery(graphql`
  query {
      allContentfulLayoutHero {
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

const content = data.allContentfulLayoutHero.edges.find(edge => edge.node.id === contentModuleId);
```
You can rearrange the sections inside contentful layout.

