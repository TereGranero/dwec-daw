/*  XMLHttpRequest version  */

const my_post =   {
    "userId": 1,
    "id": 101,
    "title": "nuevo titulo",
    "body": "jajajaja"
  };

window.onload = ()=> {
   getUsers();
   postPost(my_post);
}

function getUsers(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/', true);
   
   xhr.onload = () => { 
      if (xhr.readyState == 4 && xhr.status == 200) {
         const users = JSON.parse(xhr.responseText); 
         ajaxOK(users);
      } else {
         document.getElementById("contingut").innerHTML = `Error: ${xhr.status}`;
      }
   }
   xhr.send();
}

function ajaxOK(users){
   const contingut = document.getElementById("contingut");
   contingut.innerHTML = "";

   let cadena = `
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Coords</th>
                        <th>Phone</th>
                        <th>Web</th>
                        <th>Company</th>
                        <th>catchPhrase</th>
                        <th>BS</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                            <td>Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</td>
                            <td>${user.phone}</td>
                            <td>${user.website}</td>
                            <td>${user.company.name}</td>
                            <td>${user.company.catchPhrase}</td>
                            <td>${user.company.bs}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

   contingut.innerHTML = cadena;
}

function postPost(my_post) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    const body = JSON.stringify(my_post);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(body);
}