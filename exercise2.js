const faker = require("faker");

const generateFakeFamily = () => {
    let children = []

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const numberOfChildrens = randomNumberBetween0and2()
    for (let i = 0; i < numberOfChildrens; i ++) {
        children = [... children, generateFakeFamily()]
        generateFakeFamily()
    }

    return {
        name : `${firstName} ${lastName}`,
        children
    }
}

const randomNumberBetween0and2 = () => Math.floor(Math.random() * 3)

module.exports = generateFakeFamily