const User = require('../models/user')

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
            const { name, email, dob, password, contact } = req.body;
            if (!name || !email || !password) return res.status(404).json({ Message: 'Please provide Complete data...', Status: 404 })
            const Created = await User.create({ name, email, dob, password, contact })
            res.header("location", `${req.originalUrl},${Created._id}`)
            return res.status(200).json(Created)
        } catch (error) {
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
            if (!id) return res.status(404).json({ message: 'your given id not found..!', status: 404 })
            const Deleted = await User.findByIdAndDelete(id);
            if (!Deleted) return res.status(404).json({message: 'your post is not found', status: 404 });
            return res.status(200).json(Deleted)
        } catch (error) {
            return res.status(500).json({ message: "server error", Status: 500 })
        }
    }



}

const UserController = new userController
module.exports = UserController