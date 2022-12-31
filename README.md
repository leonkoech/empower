# Empower Website

## Documentation

Uses `NextJS 13.0` a simple `npm run serve` would produce the website

## TDD skeleton receipt :)

TDD - Technical Design Document. Some requirements and specs for the Empower website

1. Design requirements
2. Responsiveness requirements
3. Performance requirements
4. WCAG requirements
5. SEO requirements
6. QA requirements
7. Hosting requirements

### 1. Design Requirements

The design takes minimalistic, modern and professional visuals with use of two dominant colors.

- [x] Image
  - [x] temporary
  - [ ] Update
- [x] Font
  - [x] Type:
      - [x] Italics: `Ibarra Real Nova`
      - [x] default: `Suranna`;
      - [x] regular: `Raleway`; 
  - [x] Size: 
      - [x] Desktop: `48`, `40` , `24`, `20`  
      - [x] Mobile: `48`,`24`,`20`
- [x] Icons
  - [ ] Tab Icon
  - [x] Down Arrow
- [x] Colors
  - [x] Primary `#63794B`
  - [x] Secondary `#FFE9C9`
- [ ] Logo
  - [ ] Illustrator file
  
### 2. Responsiveness Requirements

The website has to be responsive for mobile, tablet, and desktop. So mockups have to be created

**_Mockups_**

- [x] Desktop Mockup
- [x] Tablet Mockup (Opt.)
- [x] Mobile Mockup

**_Width Dimensions_**

- `2160+`  XL Extra Large
- `1920+`  L  Large 
- `1200+`  M  Medium
- `900+`   T  Tablet
- `400+`   P  Phone

**_Development_**

Taking the _desktop first_ approach
  
- [x] Desktop Development
    - [x] home
    - [x] about
    - [x] services
    - [x] enroll
    - [x] team
    - [x] contact
- [x] Tablet Development
    - [x] home
    - [x] about
    - [x] services
    - [x] enroll
    - [x] team
    - [x] contact 
- [x] Mobile Development
    - [x] home
    - [x] about
    - [x] services
    - [x] enroll
    - [x] team
    - [x] contact
    
### 3. Performance Requirements

Because the website is a static one pager, `NextJs` would thrive. Only limitation is hosting. But again it would be a static one pager with all components being custom specific to the Empower website.

Performance can be tested here: https://pagespeed.web.dev/

### 4. WCAG requirements

Accessibility is a major requirement in today’s websites especially for websites in the health universe. 

`WCAG` - Web Content Accessibility Guidelines
`ADA` - Americans with Disabilities Act

Making a website by following accessibility guidelines ensures it is up to par with the standard conventions. 

### 5. SEO requirements
SEO - Search Engine Optimization

This is where google,  Bing or even Duckduckgo come into play. Having a website with written robot.txt rules, sitemap and meta is important in getting the website out there. 

A simple google search would present the empower website if this is added, also based on the description, it can get very high on the search results.

**_robots_**

- [ ] Robots.txt

**_meta_**

- [ ] tags
- [ ] title
- [ ] description
- [ ] sitemap

### 6. QA requirements

`QA` - Quality Assurance
Quality assurance involves checking the website for; 
 
- [ ] Bugs + Features
- [ ] Accessibility 
- [ ] SEO
- [ ] performance

### 7. Hosting Requirements

Hosting - Basically giving a website a location on the internet to be able to access it from anywhere (simplified)

Hosting would be on `Google Cloud`, and `GitHub` with GitHub actions for an easier CI/CD pipeline in case a new developer takes the project in the future. Also, updates are managed easily that way. 
GitHub access to the repository and Project Access on Google Cloud  will be given to samiirah@empowerrc.com (owner) and leonkipkoech00@gmail.com (admin)
 
- [x] Set Up GitHub Repository
- [ ] Set Up Google Cloud Project 
- [ ] Set Up Accounts
- [ ] Host
- [ ] Test CI/CD pipelines


**More technical specs will be on the ReadMe of the project. They will also be available on a google docs that will provide details about the project setup (The main TDD)
