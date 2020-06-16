const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('Home Page', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.have.status(200);
//                expect(response.body.message).not.to.('fred');
                done();
            })
    });
})

describe('covid19API call', function() {
    var host = "http://localhost:3000";
    var path = "/ps4";

    it('should send parameters to: POST /ps4 and return 200 success code ', function(done) {
        chai
            .request(host)
            .post(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({name: 'thailand'})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response).to.have.status(200);
                    done();
                }
            });
    });
    it('should render the error page', function(done) {
        chai
            .request(host)
            .post(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({name: 'random country'})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    console.log(response.text)
                    expect(response.text).equal(`<!DOCTYPE html><html><head><title></title><link rel="stylesheet" href="/stylesheets/style.css"><h1>Couldn't find the country you are looking for, please check your spelling</h1></head></html>`)
                    done();
                }
            });
    });
});