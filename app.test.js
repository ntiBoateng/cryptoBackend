const request = require("supertest")
const app =require("./index")


describe("Todos API",()=>{
    it("POST /api/auth --> should authenticate users",()=>{
        return request(app).post("/api/auth").send({
            portfolio: "portfolio name"
        }).expect(201).then((response)=>{
            expect(response.body).toEqual(expect.objectContaining({
                portfolio: "portfolio name",
                completed: false
            }))
        })
    })
    it("POST /api/portfolio --> should create a portfolio and add to the database",()=>{

    })
    it("POST /api/watchlist --> should create and add a watchlist to the database",()=>{

    })
})