

const superHeroes = {
    "Tony": 42,
    "Peter": 18,
    "Steve": 104,
    "Bruce": 38,
    "Thor": 1055
};

function getAverageAge(superHeroes) {
    const ages = Object.values(superHeroes);
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAge / ages.length;
    return averageAge;
}


console.log(getAverageAge(superHeroes));

document.getElementById('calculateAverageAge').addEventListener('click', () => {
    const averageAge = getAverageAge(superHeroes);
    document.getElementById('result').textContent = `The average age is: ${averageAge}`
});