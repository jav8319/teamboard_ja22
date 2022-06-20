const fs = require("fs");
const Intern = require('../classes/Engineer');


describe("Manager", () => {
  describe("object", () => {
    it("should take argument and create new instance of Intern", () => {
      const name00 = "Tom";
      const result = (new Intern(name00,"123","email","office")).name

       expect(result).toEqual(name00);
    });
  });
})
