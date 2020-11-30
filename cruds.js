let player = {name: "Russell Wilson", jersey: "3"};
let player1 = {name: "DK Metcalf", jersey: "14"};
let player2 = {name: "Tyler Lockett", jersey: "16"};
let player3 = {name: "Andrew Sloan", jersey: "8"};

let team = {
  pageHeader: "Football Team",
  teammates: [player,player1,player2,player3],
};

const renderPlayers = () => {
  
  team.teammates.forEach ((player, index) => {
    htmlString += `
    <div>
      ${player.name} has jersey number ${player.jersey}
      <button onclick='deletePlayers(${index})'>Delete</button>
      <button onclick='updatePlayers(${index})'>Update</button>
  </div>`
  });

  return htmlString;
}

const render = () => {
  htmlString = `<div>
                  <h1>${team.pageHeader}</h1>
                  </br
                  </br
                  <div><button id='add' onclick='addPlayers()'>Add a Player</button></div>
                  </br
                  </br
                  </div>`;
  renderPlayers();
  
  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString
}

const addPlayers = () => {
let player = {};

let name = prompt("Enter name")
player.name = name;

let jersey = prompt("Whats the jersey number")
player.jersey = jersey;

team.teammates.push(player);

render();
}
const deletePlayers = (chosen) => {
const indexedPlayer = team.teammates.filter((player, index) => {
return chosen !== index;
});
team.teammates = indexedPlayer;
  render();
}

const updatePlayers = (index) => {
let name = prompt("Enter Updated Name")
let jersey = prompt("Enter Jersey Number")

team.teammates[index].name = name;
team.teammates[index].jersey = jersey;
render();
}

render();

