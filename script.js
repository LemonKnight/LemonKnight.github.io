var players = ['Stephan', 'Daniel'];
var towns = [
    {town: '01-castle.png', hero: '01-castle-hero.png'}, 
    {town: '02-rampart.png', hero: '02-rampart-hero.png'}, 
    {town: '03-tower.png', hero: '03-tower-hero.png'}, 
    {town: '04-inferno.png', hero: '04-inferno-hero.png'}, 
    {town: '05-necropolis.png', hero: '05-necropolis-hero.png'}, 
    {town: '06-dungeon.png', hero: '06-dungeon-hero.png'}, 
    {town: '07-stronghold.png', hero: '07-stronghold-hero.png'}, 
    {town: '08-fortress.png', hero: '08-fortress-hero.png'}, 
    {town: '09-conflux.png', hero: '09-conflux-hero.png'}, 
    {town: '10-cove.png', hero: '10-cove-hero.png'},
    {town: '11-factory.png', hero: '11-factory-hero.png'}
];
var colors = ['01-red.webp', '02-blue.webp', '03-tan.webp', '04-green.webp', '05-orange.webp', '06-purple.webp', '07-teal.webp', '08-pink.webp']
var content = document.getElementsByClassName('content')[0];
main();

function selectRandom(data) {
    return data.splice(Math.floor(data.length * Math.random()), 1);
}

function createImg(image) {
    var img = document.createElement('img');
    img.src = '/assets/' + image;
    return img
}

function addPlayer(name) {

    var color = createImg(selectRandom(colors));
    color.className = "colorFlag"
    var player = document.createElement('div');
    player.className = "player";
    player.appendChild(color);
    playerTown = selectRandom(towns);
    var hero = createImg(playerTown[0].hero);
    hero.className = "hero";
    player.appendChild(hero);
    var span = document.createElement('span')
    span.innerHTML += name;
    player.appendChild(span);
    var town = createImg(playerTown[0].town);
    town.className = "town";
    player.appendChild(town);
    content.appendChild(player);

}

function addUnusedTowns() {
    var span = document.createElement('span');
    span.className = "title"
    span.innerHTML += 'Unused Towns';
    content.appendChild(span);
    var unusedTowns = document.createElement('div');
    unusedTowns.className = 'unusedTowns';
    addUnusedTown(unusedTowns);
    addUnusedTown(unusedTowns);
    addUnusedTown(unusedTowns);
    content.appendChild(unusedTowns);
}

function addUnusedTown(div) {
    var town = createImg(selectRandom(towns)[0].town);
    town.className = "town";
    div.appendChild(town);
}

function main() {
    var i;
    for (i = 0; i < players.length; i++) {
        addPlayer(players[i]);
    }

    addUnusedTowns();
}