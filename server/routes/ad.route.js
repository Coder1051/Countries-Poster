const { Router } = require('express')
const MyAdController = require('../controllers/ad.cont')
const MyAdRouter = Router()
MyAdRouter.route("/")
    .get(MyAdController.getAll)
    .post(MyAdController.Create)
MyAdRouter.route("/:id")
    .get(MyAdController.getById)
    .put(MyAdController.Update)
    .delete(MyAdController.Delete)

module.exports = MyAdRouter