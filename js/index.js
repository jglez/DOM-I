const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.querySelector('#logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// // Nav
const anchor1 = document.querySelector('a');
anchor1.textContent = siteContent['nav']['nav-item-1'];

const anchor2 = document.querySelector('a:nth-of-type(2)');
anchor2.textContent = siteContent['nav']['nav-item-2'];

const anchor3 = document.querySelector('a:nth-of-type(3)');
anchor3.textContent = siteContent['nav']['nav-item-3'];

const anchor4 = document.querySelector('a:nth-of-type(4)');
anchor4.textContent = siteContent['nav']['nav-item-4'];

const anchor5 = document.querySelector('a:nth-of-type(5)');
anchor5.textContent = siteContent['nav']['nav-item-5'];

const anchor6 = document.querySelector('a:nth-of-type(6)');
anchor6.textContent = siteContent['nav']['nav-item-6'];

// Middle Image
const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Heading One
const h1 = document.querySelector('h1');
// h1.textContent = 'dom is awesome';
h1.textContent = siteContent['cta']['h1'];

// Get Started Button
const btn = document.querySelector('button');
// btn.textContent = 'Get Started';
btn.textContent = siteContent['cta']['button'];

// CTA Image
const CTAimage = document.querySelector('#cta-img');
CTAimage.setAttribute('src', siteContent['cta']['img-src']);

// Features
const features = document.querySelector('.text-content h4');
features.textContent = siteContent['main-content']['features-h4'];

const featuresParagraph = document.querySelector('.text-content p');
featuresParagraph.textContent = siteContent['main-content']['features-content'];

// About
const about = document.querySelector('.text-content:nth-of-type(2) h4')
about.textContent = siteContent['main-content']['about-h4'];

const aboutParagraph = document.querySelector('.text-content:nth-of-type(2) p');
aboutParagraph.textContent = siteContent['main-content']['about-content'];

// Services
const services = document.querySelector('.bottom-content h4');
services.textContent = siteContent['main-content']['services-h4'];

const servicesParagraph = document.querySelector('.bottom-content p');
servicesParagraph.textContent = siteContent['main-content']['services-content'];

// Product
// const product = document.querySelector('.bottom-content:nth-of-type(2) h4');
// product.textContent = siteContent['main-content']['product-h4'];

// Footer
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p');
address.textContent = siteContent['contact']['address'];

const phone = address.nextElementSibling;
phone.textContent = siteContent['contact']['phone'];

const email = phone.nextElementSibling;
email.textContent = siteContent['contact']['email'];