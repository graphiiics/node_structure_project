const User = require('../src/models/User');
const db = require('./setup');

const userTestModel = {
    name: 'Velkan',
    email: 'velkan@gmail.com',
    password: '123456'
}

beforeAll( async () => await db.setUp());

afterEach( async () => await db.dropCollections());

afterAll( async () => await db.dropDatabase());

describe('User Model', () => {
    it('create new user', async () => {
        const newUser = new User(userTestModel);
        const savedUser = await newUser.save();

        expect(savedUser._id).toBeDefined();
    });
});

