const { db } = require("../util/admin");

exports.editTaskStatus = async (req, res) => {
  const taskId = req.query.taskId;
  const taskRef = db.collection("tasks").doc(taskId);
  const taskStatus = req.query.changedStatus;

  try {
    taskRef.update({ taskStatus: taskStatus });
    console.log("Document has updated");

    return res.status(201).json((await taskRef.get()).data());
  } catch (err) {
    console.error(err);
  }
};
