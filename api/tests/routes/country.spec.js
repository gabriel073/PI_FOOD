/* eslint-disable import/no-extraneous-dependencies */
const request = require ('supertest');
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);

describe('Recipe routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Recipe.sync({ force: true }))


  describe('GET /recipes', () => {
    it('should get status 200', () =>
      agent.get('/recipes').expect(200)
    );
  });

  describe('POST /recipe', () => {
    it('should post status 400', () =>
      agent.post('/recipe').expect(400)
    );
  });

  describe('GET /diets', () => {
    it('should get status 200', () =>
      agent.get('/diets').expect(200)
    );
  });

  describe('GET /recipes/:id', () => {
    it('should get status 200', () =>
      agent.get('/recipes/:id').expect(200)
    );
  });

  // describe('GET /recipes', () => {
  //    it('test http server', async () => {
  //     const res = await request(app).get('/')
    
  //     expect(res.type).to.equal('JSON');
  //     expect(res.text).to.equal(100);
  //   });
  // });



});
