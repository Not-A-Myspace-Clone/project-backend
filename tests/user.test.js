const user = require('../classes/user');

test('properly creates instance of User class', () => {
    const testUser = new user({});
    expect(testUser).toHaveProperty("id");
    expect(testUser).toHaveProperty("name");
    expect(testUser).toHaveProperty("username");
    expect(testUser).toHaveProperty("email");
    expect(testUser).toHaveProperty("links");
    expect(testUser).toHaveProperty("bio");
    expect(testUser).toHaveProperty("location");

})