const { db } = require("../util/admin");

const { FieldValue } = require("firebase/firestore");

exports.newtasks = async (req, res) => {
  const taskName = req.query.taskName;
  const taskLocation = req.query.taskLocation;
  const taskStatus = req.query.taskStatus;
  const taskPhotoIn = req.query.taskPhotoIn;
  const taskPhotoOut = req.query.taskPhotoOut;
  const taskType = req.query.taskType;
  const taskStartDate = req.query.taskStartDate;

  const tasksRef = db.collection("tasks");

  const data = {
    taskName: taskName,
    taskLocation: taskLocation,
    taskStatus: taskStatus,
    taskPhotoIn: taskPhotoIn,
    taskPhotoOut: taskPhotoOut,
    taskType: taskType,
    taskStartDate: Date.now(),
  };

  try {
    const docsAdded = tasksRef.add(data);
    console.log("Document is wrriten with ID: ", docsAdded.id);
    return res.status(201).json(data);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};
