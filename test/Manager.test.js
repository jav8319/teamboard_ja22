const fs = require("fs");
const Manager = require('../classes/Manager');


describe("Manager", () => {
  describe("object", () => {
    it("should take argument and create new instance of Manager", () => {
      const t = "John";
      const result = (new Manager(t,"123","email","office")).name

       expect(result).toEqual(t);
    });
  });
})
