


let domainURL = "https://ghasemizade.com";

console.log(domainURL.slice(0, 5).includes("https"));

function checkSSL() {
    if (domainURL.slice(0, 5).includes("https")) {
        console.log("this site is safe :)");
    } else {
        console.log("this site isn't safe :/");
    }
}

checkSSL(domainURL)
