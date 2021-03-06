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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImage = document.getElementById("cta-img");
headerImage.src = "img/header-img.png";
headerImage.alt = "Header image";


const mainContent = document.getElementById("middle-img");
mainContent.src = "img/mid-page-accent.jpg";
mainContent.alt = "Middle image";




const nav = document.getElementsByTagName("a");
console.log(nav);
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[0].style.color = "green";
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[1].style.color = "green";
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[2].style.color = "green";
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[3].style.color = "green";
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[4].style.color = "green";
nav[5].textContent = siteContent["nav"]["nav-item-6"];
nav[5].style.color = "green";

const newNav1 = document.createElement("a");
newNav1.href = "#";
newNav1.textContent = "Blog";
newNav1.style.color = "green";

const newNav2 = document.createElement("a");
newNav2.href = "#";
newNav2.textContent = "YouTube";
newNav2.style.color = "green";

const newNav = document.querySelector("nav");
newNav.append(newNav1);
newNav.prepend(newNav2);


const ctaHeader = document.getElementsByTagName("h1");
ctaHeader.style = "white-space: pre";
ctaHeader[0].innerText = "DOM \r\n";
ctaHeader[0].innerText += "Is \r\n";
ctaHeader[0].innerText += "Awesome";

const ctaButton = document.getElementsByTagName("button");
ctaButton[0].textContent = "Get Started";



const htags = document.getElementsByTagName("h4");

htags[0].innerText = "Features";
htags[1].innerText = "About";
htags[2].innerText = "Services";
htags[3].innerText = "Product";
htags[4].innerText = "Vision";
htags[5].innerText = "Contact";

const pTags = document.getElementsByTagName("p");

pTags[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[5].innerText = "123 Way 456 Street\r\n"
pTags[5].innerText += "Somewhere, USA";
pTags[6].innerText = "1 (888) 888-8888";
pTags[7].innerText = "sales@greatidea.io"; 

const footer = document.getElementsByTagName("footer");
footer[0].innerText = "Copyright Great Idea! 2018"

