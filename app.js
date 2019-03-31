const banner = document.querySelector('#page-banner');

//gives you the type of node the page is with .nodeType
console.log('#page-banner node type is', banner.nodeType);

//gives you the name for the banner with .nodeName
console.log('#page-banner node name is', banner.nodeName);

//informs if the banner has any child nodes connected to it
console.log('#page-banner has child nodes', banner.hasChildNodes());

//gives you a clone of the banners nested elements, 
//has to be true for for viewing
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
