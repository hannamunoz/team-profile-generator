const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager");


test("can set office number with getNumber()", () => {
    const testNumber = 233-3344;
    const manager = new Manager("Brady", 2, "test@aol.com", testNumber);

    expect(manager.getNumber()).toBe(testNumber);
});

test("can set office number with constructor", () => {
    const testNumber = 233-3344;
    const manager = new Manager("Brady", 2, "test@aol.com", testNumber);

    expect(manager.officeNumber).toBe(testNumber);
});

test("can use getRole() to get back title", () => {
    const testRole = "Manager";
    const manager = new Manager("Brady", 2, "test@aol.com");

    expect(manager.getRole()).toBe(testRole);
});