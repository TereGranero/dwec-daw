/* Cookies with no expiration */

function setCookie(name, value, days) {
  
    document.cookie = name + "=" + value + ";" + ";path=/";
  }
  
  // Set cookies
  setCookie('nom', 'Tere');
  setCookie('cognoms', 'Granero Ruiz');
  setCookie('email', 'teregraneroruiz@gmail.com');
  
  function getCookie(name) {
    const nameEQ = name + "=";

    // Split cookies
    const splittedCookies = document.cookie.split(';'); 
    for(let i = 0; i < splittedCookies.length; i++) {
      let ck = splittedCookies[i];
      // remove blanks at the begining
      while (ck.charAt(0) == ' ') ck = ck.substring(1);
      // returns value if cookie name is found in position 0
      if (ck.indexOf(nameEQ) == 0) return ck.substring(nameEQ.length, ck.length);
    }
    return null;
  }
  
  // Get cookies data
  console.log(`Nom: ${getCookie('nom')}`);
  console.log(`Cognoms: ${getCookie('cognoms')}`);
  console.log(`Email: ${getCookie('email')}`);


/*
Exit Firefox and then open the same web page and execute the following code:

function getCookie(name) {
    const nameEQ = name + "=";

    const splittedCookies = document.cookie.split(';'); 
    for(let i = 0; i < splittedCookies.length; i++) {
        let ck = splittedCookies[i];
        while (ck.charAt(0) == ' ') ck = ck.substring(1);
        if (ck.indexOf(nameEQ) == 0) return ck.substring(nameEQ.length, ck.length);
}
    return null;
}

console.log(`Nom: ${getCookie('nom')}`);
console.log(`Cognoms: ${getCookie('cognoms')}`);
console.log(`Email: ${getCookie('email')}`);

RESULT: Cookies with no expiration dissappear when closing session.
*/