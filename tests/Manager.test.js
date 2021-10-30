const Manager = require('../lib/Manager');

function createManager(name="Patrick", id=8, email="patrick@email.com", officeNumber=1) {
    return new Manager (name, id, email, officeNumber);
}

describe('test the manager class', () => {

    it('should be able to instantiate', () => {
        const result = createManager();
        expect(result instanceof Manager).toBe(true); 
    })

    it('should contain the officeNumber property', () => {
        const result = createManager();
        expect(result).toHaveProperty('officeNumber');
    })

    it('should return officeNumber when getOfficeNumber is called', () => {
        const officeNumber = 1
        const result = createManager('patrick', 8, 'patrick@email.com', officeNumber);

        expect(result.getOfficeNumber()).toBe(officeNumber);
    })

    it('should only accept number for officeNumber', () => {
        const officeNumber = 1
        const result = createManager('patrick', 8, 'patrick@email.com', officeNumber);
        
        expect(typeof officeNumber).toBe("number");
    });

    it('should return manager when getRole() is called', () => {
        const role = "Manager";
        const result = createManager();

        expect(result.getRole()).toBe(role);
    });

})