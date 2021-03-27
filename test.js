const { expect } = require("chai");
const nock = require("nock");
const request = require("supertest");
const publisher = require("./publisher/index");
const subscriber = require("./subscriber/index");

describe("Publisher-Subscriber", () => {
  describe("Publisher", () => {
    it("should subscribe to a topic", (done) => {
      request(publisher)
        .post("/subscribe/topic1")
        .send({ url: "http://localhost:6000/test1" })
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.message).to.be.equal(
            "http://localhost:6000/test1 subscribed to topic1 successfully"
          );
          done();
        });
    });
    it("should publish to a topic", (done) => {
      nock("http://localhost:6000")
        .post("/test1", { topic: "topic1", data: "hello" })
        .reply(200);

      request(publisher)
        .post("/publish/topic1")
        .send({ data: "hello" })
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.message).to.be.equal("Message sent successfully");
          done();
        });
    });
  });

  describe("Subscriber", () => {
    it("should receive message from publishers", (done) => {
      request(subscriber)
        .post("/test1")
        .send({ topic: "topic1", data: "hello" })
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.message).to.be.equal("New message from publisher");
          done();
        });
    });
  });
});
