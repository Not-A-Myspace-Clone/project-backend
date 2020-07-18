const user = require('../classes/Login');

test('properly creates instance of User class', () => {
    const testUser = new user({});
    expect(testUser).toHaveProperty("id");
    expect(testUser).toHaveProperty("username");
    expect(testUser).toHaveProperty("password");
    expect(testUser).toHaveProperty("email");

})