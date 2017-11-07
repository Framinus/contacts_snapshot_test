const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../../src/server.js');

chai.use(chaiHttp);

describe('/ route', function () {
  it('should return status 200 when called', function () {
    chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
      });
  });
});
