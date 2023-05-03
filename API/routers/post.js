const { Router } = require('express');

const authenticator = require("../middleware/authenticator");
const postController = require('../controllers/Post.js');

const postRouter = Router();

postRouter.get("/",  postController.index);
postRouter.post("/", authenticator,postController.create);
postRouter.get("/:id", postController.show);
postRouter.delete("/:id",authenticator, postController.destroy);

module.exports = postRouter;