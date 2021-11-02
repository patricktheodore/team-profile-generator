const Employee = require('../lib/Employee');

// 1. define the goal
// 2. recreate the environment
// 3. define a source of truth
// 4. executre and compare

function createEmployee(name="Patrick", id=8, email="patrick@email.com") {
    return new Employee (name, id, email);
}

describe('test employee class', () => {

    it('should be able to instantiate', () => {

        const result = createEmployee();
        expect(result instanceof Employee).toBe(true); 

    })

    it('should contain the name property', () => {
        const result = createEmployee();
        expect(result).toHaveProperty('name');
    })

    it('should contain the email property', () => {
        const result = createEmployee();
        expect(result).toHaveProperty('email');
    })

    it('should contain the id property', () => {
        const result = createEmployee();
        expect(result).toHaveProperty('id');
    })

    it('should return name when getName() is called', () => {
        const name = 'Patrick'
        const result = createEmployee(name, 8, 'patrick@email.com');

        expect(result.getName()).toBe(name);
    })

    it('should return email when getEmail() is called', () => {
        const email = 'patrick@email.com'
        const result = createEmployee('patrick', 8, email);

        expect(result.getEmail()).toBe(email);
    })

    it('should return id when getId() is called', () => {
        const id = 123
        const result = createEmployee('patrick', id, 'patrick@email.com');

        expect(result.getId()).toBe(id);
    })

    it('should return role when getRole() is called', () => {
        const role = "Employee";
        const result = createEmployee();

        expect(result.getRole()).toBe(role);
    });
});

