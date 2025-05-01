const MyAd = require('../models/ad');

class myAdController { 
    controller() {

    }

    async getAll(req, res) {
        try {
            const GetAll = await MyAd.find();
            if (!GetAll === 0) return res.status(400).json({ message: "Could'nt Find Posters.", status: 400 });
            return res.status(201).json(GetAll)
        } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'server error', status: 500 })
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const GetById = await MyAd.findById(id);
            if (!id) return res.status(400).json({ message: `your Given ${id} not found! `, status: 400 })
            return res.status(200).json(GetById)
        } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: "Server Error!", status: 500 })
        }
    }

    async Create(req, res) {
        try {
            const { Name, Image, Description } = req.body;
            if (!Name || !Image || !Description) return res.status(401).json({ messager: "Provide all the data ,Something Missing", status: 401 })
            const Created = await MyAd.create({ Name, Image, Description });
            if (!Created) return res.status(401).json({ message: "Your Poster is not Created ...", status: 401 })
            res.header("location", `${req.originalUrl}/${Created._id}`);
            return res.status(201).json(Created)
        } catch (err) {
            return res.status(500).json({ message: "Server Error", status: 500 })
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Name, Image, Description } = req.body;
            if (!id) return res.status(401).json({ message: 'your given id not found..!', status: 401 })
            const Updated = await MyAd.findByIdAndUpdate(id, { Name, Image, Description }, { new: true })
            if (!Updated) return res.status(401).json({ message: 'Your data is not Updated..!', status: 401 })
            return res.status(200).json(Updated)
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ message: 'server error', status: 500 })
        }
    }   

    async Delete(req, res) {
        try {
            const id = req.params.id;
            if (!id) return res.status(401).json({ message: 'your given id not found..!', status: 401 })
            const Deleted = await MyAd.findByIdAndDelete(id);
            if (!Deleted) return res.status(401).json({ message: 'your post is not found', status: 401 });
            return res.status(200).json(Deleted)
        } catch (err) {
            return res.status(500).json({ message: 'server error', status: 500 })
        }
    }

}
const MyAdController = new myAdController();
module.exports = MyAdController
