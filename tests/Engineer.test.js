const Engineer = require ('../lib/Engineer');

function createEngineer(name="Patrick", id=8, email='patrick@gmail.com', github='githubpat') {
    return new Engineer (name, id, email, github);
}

describe('test engineer class', () => {

    it('should be able to instantiate', () => {

        const result = createEngineer();
        expect(result instanceof Engineer).toBe(true); 

    })

    it('should contain the github username property', () => {
        const result = createEngineer();
        expect(result).toHaveProperty('github');
    })

    it('should return github username when getGithub() is called', () => {
        const github = 'patricktheodore';
        const result = createEngineer('patrick', 8, 'patrick@gmail.com', github);

        expect(result.getGithub()).toBe(github);
    })

    it('should return engineer when getRole() is called', () => {
        const role = 'Engineer';
        const result = createEngineer();

        expect(result.getRole()).toBe(role);
    })

    it('should only accept string for github user', () => {
        const github = 'patricktheodore';
        const result = createEngineer('patrick', 8, 'patrick@gmail.com', github);

        expect(typeof github).toBe('string');
    })

})