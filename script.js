function search() {
  const url = "https://jsonplaceholder.typicode.com/users";

  //return the data as a json string or to convert pure js object
  fetch(url)
    .then(function (response) {
      return response.json();
    })

    //Here we have json object data
    .then(function (users) {
      //User data js object
      getData(users);
    })
    //Error should be handled by catch block
    .catch(function (err) {
      console.log(err.message);
    });
}

function getData(users) {
  //Will use div which contains empty result
  let userDiv = document.querySelector("#users");
  userDiv.innerHTML = "";

  //Create a table element
  let table = document.createElement("table");

  //Iterate over the users data
  users.forEach(function (currentUser) {
    //create a row
    let row = table.insertRow();

    let name = row.insertCell();
    name.innerHTML = currentUser.name;
    let city = row.insertCell();
    city.innerHTML = currentUser.address.city;

    let mail = row.insertCell();
    mail.innerHTML = currentUser.email;

    let phone = row.insertCell();
    phone.innerHTML = currentUser.phone;
  });

  //Append the data of the table with user div
  userDiv.appendChild(table);
}
