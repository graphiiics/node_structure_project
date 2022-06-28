//const mongoose = require('mongoose');
const app = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const db = require('./setup');

// object for testing
const userTestAuth = {
    name: 'Ernesto',
    email: 'ernesto@gmail.com',
    password: '123456'
}

// Set up the mongodb
beforeAll( async () => await db.setUp());

// After all test we delete collection and database
afterAll( async () => {
    await db.dropCollections();
    await db.dropDatabase();
});


// Signup a user
describe('Auth Endpoints', () => {
    it('POST: /signup user', async () => {
        const response = await request.post('/auth/signup')
            .send(userTestAuth)
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('user created sucessfully');
        expect(response.body.data._id).toBeTruthy();
        expect(response.body.data.email).toBe(userTestAuth.email);

    });
    

    // Login the user and get the access token
    var auth = {}
    it('POST: /login user', async () => {
        const response = await request.post('/auth/login')
            .auth(userTestAuth.email, userTestAuth.password)
            .set('Accept', 'application/json');
        
        // Save the token to use in the next test
        auth.token = response.body.access_token;
        
        expect(response.status).toBe(200);
        expect(response.body.access_token).toBeTruthy();
        expect(response.body.user.email).toBe(userTestAuth.email);
    });

    // In this test we use the callback done instead of async/await
    it('GET: /users with token', function(done) {
        //loginUser(auth)
        request
            .get('/api/v1/user')
            .set('Authorization', 'bearer ' + auth.token)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) =>{
                console.log({users: res.body});
                if(err) return done(err);
                done();
            });
    });
});

