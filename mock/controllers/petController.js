/** @oastools {Controller} /pets */
const pets = require('../data/pets.json');

/**
 * @oastools {method} GET
 */
module.exports.findPets = (req, res) => {
    res.send(pets);
};

/**
 * @oastools {method} POST
 */
module.exports.addPet = (req, res) => {
    const newPet = {
        ...req.body,
        id: Number(Date.now()),
    }
    pets.push(newPet);
    res.send(newPet);
};

/**
 * @oastools {method} GET
 * @oastools {path} /{id}
 */
module.exports.getPetById = (req, res) => {
    const pet = pets.find(pet => pet.id === parseInt(req.params.id))

    if(!pet) res.status(404).send('The pet with the given ID was not found.');

    res.send(pet);
};

/**
 * @oastools {method} DELETE
 * @oastools {path} /{id}
 */
module.exports.deletePet = (req, res) => {
    const pet = pets.find(pet => pet.id === parseInt(req.params.id))

    if(pet) {
        const index = pets.indexOf(pet);
        pets.splice(index, 1);
    }

    res.status(204).send();
};