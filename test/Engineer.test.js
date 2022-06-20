const fs = require("fs");
const Engineer = require('../classes/Engineer');


describe("Manager", () => {
  describe("object", () => {
    it("should take argument and create new instance of Engineer", () => {
      const name0 = "Jerry";
      const result = (new Engineer(name0,"123","email","office")).name

       expect(result).toEqual(name0);
    });
  });
})
