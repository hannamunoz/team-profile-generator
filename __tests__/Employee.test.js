const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("can set an employee name", () => {
    const name = "Hanna";
    const employee = new Employee(name);

    expect(employee.name).toBe(name); 
});

test("can set employee email", () => {
    const email = "hannamunoz@gmail.com";
    const employee = new Employee("Hanna", 1, email);

    expect(employee.email).toBe("hannamunoz@gmail.com");
});

test("can set employee ID number", () => {
    const id = "15";
    const employee = new Employee("Hanna", id, "hannamunoz@gmail.com");

    expect(employee.id).toBe("15")
});

test("can get name via getName()", () => {
    const testName = "Brady";
    const employee = new Employee(testName);

    expect(employee.getName()).toBe(testName);
});

test("can get ID via getID()", () => {
    const testID = "16";
    const employee = new Employee("Brady", testID, "hannamunoz@gmail.com");

    expect(employee.getId()).toBe(testID);
});

test("can get email via getEmail()", () => {
    const testEmail = "hannamunoz@gmail.com";
    const employee = new Employee("Brady", 16, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});

test("can get employee role using getRole()", () => {
    const testRole = "Employee";
    const employee = new Employee("Brady", 16, "hannamunoz@gmail.com");

    expect(employee.getRole()).toBe(testRole);
});