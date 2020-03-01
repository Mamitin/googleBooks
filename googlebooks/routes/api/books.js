const router = require("express").Router();
const booksCont = require("../../controllers/booksCont");

router.route("/")
    .get(booksCont.findAll)
    .post(booksCont.create);

router
    .route("/:id")
    .get(booksCont.findByID)
    .put(booksCont.update)
    .delete(booksCont.remove);

module.exports = router;