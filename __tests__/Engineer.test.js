const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

test("can set Github with constructor", () => {
    const testGithub = "Dlood";
    const engineer = new Engineer("Brady", 3, "test@aol.com", testGithub);

    expect(engineer.github).toBe(testGithub);
});

test("can get Github with getGithub()", () => {
    const testGithub = "Dlood";
    const engineer = new Engineer("Brady", 3, "test@aol.com", testGithub);

    expect(engineer.getGithub()).toBe(testGithub);
});

test("can get role using getRole()", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Brady", 3, "test@aol.com");

    expect(engineer.getRole()).toBe(testRole);
});