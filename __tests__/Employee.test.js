const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("can set a employee name", () => {
    const name = "Hanna";
    const employee = new Employee(name);

    expect(employee.name).toBe(name); 
});

test("can set employee email", () => {
    const email = "hannamunoz@gmail.com";
    const employee = new Employee("Hanna", 1, email);

    expect(employee.getEmail()).toBe("hannamunoz@gmail.com");
});