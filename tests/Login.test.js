const Login = require('../classes/Login');

// Matt Unit Test
describe('Login Class', () => {
    describe('Exists Method', () => {
        it("Should return 'true' if the New Class has any value", () => {
            const test = new Login({username: 'test_user', password: 'test_pass'});
            expect(test.exists()).toEqual(true);
        });
        it("Should return 'false' if the New Class has no value", () => {
            const test = new Login()
            expect(test.exists()).toEqual(false);
        });
    });
});