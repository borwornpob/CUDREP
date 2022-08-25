const { db } = require("../util/admin");

exports.tasks = async (req, res) => {
  var queryTaskStatus = req.query.queryTaskStatus;
  const tasksRef = db.collection("tasks");

  try {
    tasksRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        taskStatus: doc.data()["taskStatus"],
      }));
      console.log(data);
      console.log(queryTaskStatus);
      return res.status(201).json(data);
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "Something went wrong, please try again" });
  }
};
