const User = require('../classes/user');

exports.create = async (request, response) => {
        const user = new User(request.body);
        await user.insert();
        response.json(user.getLiteral());
    }
    
    exports.read = async (request, response) => {
        const id = request.params.id;
        const user = new User();
        await user.getById(id);
        response.json(user.getLiteral());
    }
    
    exports.update = async (request, response) => {
        const id = request.params.id;
        const user = new User();
        await user.getById(id);
        user.merge(request.body);
        await user.update(id);
        response.json(user.getLiteral());
    }

