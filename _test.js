const { expect } = require("chai");
const { aussieDetector } = require("./aussieDetector");

describe("aussie detector", () => {
  describe("aussie detector", () => {
    it("aussie detector should be a function", () => {
      expect(aussieDetector).to.be.a("function");
    });
  });
  describe("aussie detection - non aussie", () => {
    it("should be able to tell non-aussies to fuk off", () => {
      expect(aussieDetector("hey what's up")).to.equal(
        "M8 you came to the wrong place"
      );
    });
    it("should be able to tell non-aussies to fuk off", () => {
      expect(aussieDetector("konnichiwhatsup")).to.equal(
        "M8 you came to the wrong place"
      );
    });
  });
  describe("aussie detection - aussie", () => {
    it("should be able to welcome aussies", () => {
      expect(aussieDetector("tinnies")).to.equal(
        "π¦πΊπ¦π¨π WELCOME HOME M8 ππ¨π¦π¦πΊ"
      );
    });
    it("should be able to welcome aussies", () => {
      expect(aussieDetector("oi cunt")).to.equal(
        "π¦πΊπ¦π¨π WELCOME HOME M8 ππ¨π¦π¦πΊ"
      );
    });
  });
});
