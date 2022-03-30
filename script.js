// Expand Div Function for collapsable buttons
function expandDiv(a) {
  var x = document.getElementById(a);
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
// Verifies if email is proper format
function emailSubmit() {
  var email = document.forms[0].email.value;
  if (email.includes("@")){
      alert ("Thanks for joining! " + email + " has been added to our newsletter");
  } else {
      alert  (email + " is not a valid email");
  }
}
//Pantry API URL
const api_url = 
      "https://getpantry.cloud/apiv1/pantry/045f05da-4502-496e-bf5e-1ffbb280ab75/basket/dreamLogs";

// Lists dreams from Pantry API basket
async function getDream(url) {
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);

    // This block displays dreams from oldest to newest
    // for (let i = 0; i < data['dreamLog'].length; i++) {
    //   dreamName = data['dreamLog'][i]['name'];
    //   dream = data['dreamLog'][i]['dream'];
    //   document.getElementById('dreamlog').innerHTML += `<div id="dream"><b>${dreamName}'s dream:</b> ${dream} <br><sub>${date}</sub></div>`;
    // }

    // This block displays dreams from newest to oldest
    for (let i = data['dreamLog'].length - 1; i >= 0; i--) {
      dreamName = data['dreamLog'][i]['name'];
      dream = data['dreamLog'][i]['dream'];
      date = data['dreamLog'][i]['date'];
      document.getElementById('dreamlog').innerHTML += `<div id="dream"><b>${dreamName}'s dream:</b> ${dream}<br><sub>${date}</sub></div>`;
    }
}
getDream(api_url);

// Searches through dreamLog array in Pantry Basket
async function searchDreams() {

  document.getElementById('dreamlog').innerHTML = "";

  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);

  const searchTerm = document.getElementById('nameSearch').value;
  let count = 0;

  if (searchTerm === "") {
    document.getElementById('dreamlog').innerHTML = "No search term entered";
  } else {
      for (let i = 0; i < data['dreamLog'].length; i++) {
        dreamName = data['dreamLog'][i]['name'];
        dream = data['dreamLog'][i]['dream'];
        date = data['dreamLog'][i]['date'];
        
        if(dreamName === searchTerm) {
          document.getElementById('dreamlog').innerHTML += `<div id="dream"><b>${dreamName}'s dream:</b> ${dream}<br><sub>${date}</sub></div>`
          count++
        } 
      }
      if (count === 0){
        document.getElementById('dreamlog').innerHTML = "No results found"
      }
  }
}

function resetDreams() {
  document.getElementById('dreamlog').innerHTML = ""
  getDream(api_url);
}



//Checks user inputs to make sure they are filled out, and if filled out correctly, runs the putDream function
function postDream(){
  if(document.getElementById('namelog').value === "" || document.getElementById('log').value === "") {
    alert('You must complete the form to submit a dream');
  } else {
    putDream();
  }
}
async function putDream(){
  //Date info
  const date = new Date();
  const timestamp = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

  //User inputs
  let dreamName = document.getElementById('namelog').value;
  let dream = document.getElementById('log').value;
  //Capitalize first letter of name
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  dreamName = capitalizeFirstLetter(dreamName);

  const dreamData = {dreamLog:[{
    name : dreamName,
    dream : dream,
    date: timestamp
  }]}
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(dreamData);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(api_url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  alert('Your dream has been submitted!');
  document.location.reload();
}