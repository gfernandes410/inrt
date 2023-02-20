import { faker } from '@faker-js/faker';

function factory() {

    return {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
    }
}    

/**
 * @param {number} quantity
 * TODO create user type
 * @return {any[]}
 */
function create(quantity = 1) {

    const result = [];
    let counter = 0;

    while (counter < quantity) {
        
        result.push(factory());

        counter = counter + 1;
    }

    return result;
}

export default create;