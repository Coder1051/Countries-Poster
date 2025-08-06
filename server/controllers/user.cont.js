const User = require('../models/user')
const bcrypt = require('bcrypt')
const Role = require('../models/roles')

class userController {
    controller() {

    }
    async getAll(req, res) {
        try {
            const GetAll = await User.find();
            if (!GetAll === 0) return res.status(404).json({ message: "No Data Available", status: 404 })
            return res.status(200).json(GetAll);
        } catch (error) {
            return res.status(500).json({ message: "Server Error", Status: 500 })
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const GetById = await User.findById(id)
            if (!GetById) return res.status(404).json({ message: `Your given ${id} not found!`, Status: 500 })
            return res.status(200).json(GetById)
        } catch (error) {
            return res.status(500).json({ message: 'Server Error', Status: 500 })
        }
    }

    async Create(req, res) {
        try {
            const obj = req.body;
            if (!obj.name || !obj.email || !obj.password) return res.status(404).json({ Message: 'Please provide Complete data...', Status: 404 })
            // Assign default role if not provided
            if (!obj.Role) {
                const guestRole = await Role.findOne({ Name: "Guest" });
                obj.Role = guestRole;
            }
            const passwordHash = await bcrypt.hash(obj.password, 10);
            console.log("plain :",obj.password);
            console.log("Hashed :",passwordHash);
            obj.password = passwordHash;
            const Created = await User.create(obj)
            res.header("location", `${req.originalUrl},${Created._id}`)
            return res.status(200).json(Created)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error", Status: 500 })
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { name, email, dob, password, contact } = req.body;
            const Updated = await User.findByIdAndUpdate(id, { name, email, dob, password, contact }, { new: true });
            if (!Updated) return res.status(404).json({ Message: "Your User is not updated..!", Status: 404 });
            return res.status(200).json(Updated)
        } catch (error) {
            return res.status(500).json({ message: "Server Error", Status: 500 })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;
            const Deleted = await User.findByIdAndDelete(id);
            if (!id) return res.status(400).json({ message: ` Given ID:${id} not Found!`, Status: 400 });
            return res.status(200).json(Deleted);
        } catch (err) {
            return res.status(500).json({ message: 'Server Error', Status: 500 });
        }
    }

async MakeAdmin(req, res) {
    try {
        const id = req.params.id;
        const adminRole = await Role.findOne({ Name: "Admin" });
        if (!adminRole) return res.status(404).json({ message: "Admin role not found" });
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { Role: adminRole._id },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        return res.status(200).json({ message: "User promoted to Admin", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
}


}
const UserController = new userController
module.exports = UserController