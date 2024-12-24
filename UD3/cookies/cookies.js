/* Cookies with 1 day expiration */

function setCookie(name, value, days) {
    // Calculate expiration date in miliseconds
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); //ms
    const expires = "expires=" + date.toUTCString();
    // Path is complete domain
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Set cookies
  setCookie('nom', 'Tere', 1); // 1 day expiration
  setCookie('cognoms', 'Granero Ruiz', 1);
  setCookie('email', 'teregraneroruiz@gmail.com', 1);
  
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
  