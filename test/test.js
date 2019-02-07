var request = require("supertest");
var app = require("../index.js");

describe("GET /", function() {
    it("respond with hello world", function(done) {
        //navigate to root and check the the response is "hello world"
        request(app)
            .get("/")
            .expect(
                "Wello world! Now with automatic deployment, thanks to Jenkins CI!",
                done,
            );
    });
});
