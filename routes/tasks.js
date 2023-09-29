const express = require("express");
const router = express.Router();
const {
  getAllItem,
  creatTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");
router.route("/").get(getAllItem).post(creatTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
