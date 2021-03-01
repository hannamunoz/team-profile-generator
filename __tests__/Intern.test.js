const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("can set school with constructor", () => {
    const testSchool = "UNH";
    const intern = new Intern("Brady", 4, "test@aol.com", testSchool);

    expect(intern.school).toBe(testSchool);
});

test("can get school using getSchool()", () => {
    const testSchool = "UNH";
    const intern = new Intern("Brady", 4, "test@aol.com", testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test("can get role with getRole()", () => {
    const testRole = "Intern";
    const intern = new Intern("Brady", 4, "test@aol.com");

    expect(intern.getRole()).toBe(testRole);
});
