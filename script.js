const api_url = 
      "https://getpantry.cloud/apiv1/pantry/045f05da-4502-496e-bf5e-1ffbb280ab75/basket/dreamLogs";

// Defining async function
async function getDream(url) {
    
    // Storing response
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);

    for (let i = 0; i < data['dreamLog'].length; i++) {
      dreamName = data['dreamLog'][i]['name'];
      dream = data['dreamLog'][i]['dream'];
      document.getElementById('dreamlog').innerHTML += `<div id="dream">${dreamName}'s dream: ${dream}</div>`;
    }
}
// Calling that async function
getDream(api_url);

async function putDream(){
  const dreamData = {dreamLog:[{
    name : document.getElementById('namelog').value,
    dream : document.getElementById('log').value
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
}