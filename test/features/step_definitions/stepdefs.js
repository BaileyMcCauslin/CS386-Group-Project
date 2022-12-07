const assert = require("assert")
const {Given, When, Then} = require("cucumber");

let app = require('../../../src/guiTester.js')

Given('someone is logged in', function () {
    this.loggedIn = true;
  });

  When('I ask if someone logged in', function () {
    this.actualAnswer = app.userActive();
  });

  Then("I should be told {string}", function (string) {
    assert.equal(this.actualAnswer, expectedAnswer)
  });