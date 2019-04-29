import chai from 'chai'
import chaiHttp from 'chai-http'
import {describe} from "mocha";
import app from '../src/app'

chai.use(chaiHttp)

describe("Book controller", () => {
    it("get books", (done) => {
        chai.request(app)
            .get("/catalog/books")
            .end((err, res) => {
                chai.expect(err).to.be.null
                chai.expect(res.body).to.be.an('array')
                done()
            })
    })
})