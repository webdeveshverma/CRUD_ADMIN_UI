import User from '../model/user.js';
// Get all users
export const getUsers = async (req, res) => {

    try {
        const limitValue = req.query.limit;
        const pageValue = req.query.page;
        const users = await User.find().limit(limitValue).skip(pageValue);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
};

// Save data of the user in database
export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);
    try {
        await newUser.save();
       return response.status(201).json(newUser);
    } catch (error) {
       return response.status(409).json({ message: error.message })
      
    }
}



// Get a user by id
export const getUserById = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}




// rote for the search by name
export const serachByName = async (req, res) => {
    try {
        const user = await User.find({
            $or: [{ name: { $regex: req.params.name }} ,
            { lastname: { $regex: req.params.name }},
            { phone: { $regex: req.params.name }},
            { email: { $regex: req.params.name }}],
        });
        return res.send(user)

    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}


// User.find({$or:[{region: "NA"},{sector:"Some Sector"}]}, function(err, user) 
//  {
//     if (err)
//     {
//         res.send(err);
//     }
//     console.log(user);
//     res.json(user);

//  });



// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(201).json("User deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}