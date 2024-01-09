const User = require('../models/user');

// CRUD operations
// Create
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user by ID
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user fields
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.company = req.body.company;
        user.gender = req.body.gender;
        user.dob = req.body.dob;
        user.password = req.body.password;

        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete all users
const deleteAllUsers = async (req, res) => {
    try {
        await User.destroy({ where: {} });
        res.json({ message: 'All users deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    deleteAllUsers,
};
