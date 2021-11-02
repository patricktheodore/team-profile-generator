const Intern = require('../lib/Intern');

function createIntern(name="Patrick", id=8, email="patrick@email.com", school="uwa") {
    return new Intern (name, id, email, school);
}

describe('test the intern class', () => {

    it('should be able to instantiate', () => {
        const result = createIntern();
        expect(result instanceof Intern).toBe(true);  
    })

    it('should containt the school property', () => {
        const result = createIntern();
        expect(result).toHaveProperty('school')
    })

    it('should return the school when getSchool is called', () => {
        const school = 'uwa'
        const result = createIntern('patrick', 1, 'patrick@email.com', school);

        expect(result.getSchool()).toBe(school);
    })

    it('should return intern when getRole is called', () => {
        const role = 'Intern';
        const result = createIntern();

        expect(result.getRole()).toBe(role);
    })

})