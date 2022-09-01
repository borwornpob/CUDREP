const { db } = require("../util/admin");

exports.task = async (req, res) => {
  var queryTask = req.query.taskId;
  const tasksRef = db.collection("tasks");

  try {
    var task = tasksRef.doc(queryTask);
    const doc = await task.get();

    return res.status(201).json(doc.data());
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};
