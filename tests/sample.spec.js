import app from '../src/app'
import chai from 'chai'
import chaiHttp from 'chai-http'
import {describe} from "mocha";

chai.use(chaiHttp)
describe('sample server tests', function() {
    it('default path test', function(done) {
        chai.request(app).get('/').end((err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.eq(200)
            chai.expect(res.text).to.eq('sample App !!!')
            done() // so that the test waits till assertions are verified
        })
    })

    it('hello route test', function(done) {
        chai.request(app).get('/hello').end((err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.eq(200)
            chai.expect(res.text).to.eq('Hello there !!!')
            done()
        })
    })

    it('hello route with query param', function(done) {
        chai.request(app).get('/hello/swapnil').end((err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.eq(200)
            chai.expect(res.text).to.eq('Hello swapnil !!!')
            done()
        })
    })

    it('bye route test', function(done) {
        chai.request(app).get('/bye').end((err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.eq(200)
            chai.expect(res.text).to.eq('Bye there !!!')
            done()
        })
    })

    it('bye route with query param', function(done) {
        chai.request(app).get('/bye/swapnil').end((err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.eq(200)
            chai.expect(res.text).to.eq('Bye swapnil !!!')
            done()
        })
    })
})