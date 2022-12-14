const router = require("express").Router();
const recipeDatas = require("./recipes");

router.get("/", (req, res) => {
  res.json(recipeDatas).status(200);
});

router.get("/:id", (req, res) => {
  res
    .json(
      recipeDatas.filter((recipe) => recipe.id.toString() === req.params.id)[0]
    )
    .status(200);
});

module.exports = router;
