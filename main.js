const planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

planets.reverse();

let select = document.getElementById('planets');

const handleNewPlanet = e => {
    let newPlanet = document.getElementById('new-planet-name').value;
    let newMultiplier = document.getElementById('new-multiplier').value;
    let newElement = document.createElement('option');
    if (newPlanet != '' && newMultiplier != '') {
        planets.push([newPlanet, newMultiplier]);
        newElement.text = newPlanet;
        newElement.value = newPlanet;
        select.appendChild(newElement);
    }
        console.log(planets)
}

planets.forEach(planet => {
    planet = planet[0];
    let element = document.createElement('option');
    element.text = planet;
    element.value = planet;
    select.appendChild(element);
});

const calculateWeight = (weight, planetName) => {
    weight = document.getElementById('user-weight').value;
    planetName = document.getElementById('planets').value;
    for (let i = 0; i < planets.length; i++) {
        if (planetName == planets[i][0]) {
            let outcome =  weight * planets[i][1];
            return outcome;
        }
    }
}

const handleClickEvent = e => {
    let planetName = document.getElementById('planets').value;
    let result = calculateWeight();
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!'
}

const checkBoxHandler = e => {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked === true) {
        select.removeChild(select.lastChild);
    }
    else if (checkBox.checked === false) {
        let element = document.createElement('option');
        element.text = 'Pluto';
        element.value = 'Pluto';
        select.appendChild(element);
    }
}

document.getElementById('calculate-button').addEventListener('click', () => handleClickEvent());
document.getElementById('checkbox').addEventListener('click', () => checkBoxHandler());
document.getElementById('new-planet-button').addEventListener('click', () => handleNewPlanet())