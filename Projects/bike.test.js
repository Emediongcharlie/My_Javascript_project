const {isOn} = require("./bike.js");

test("thatTheBikeCanOn", () => {
    expect(isOn().toBe(true))
} )