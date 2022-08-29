const { db } = require("../util/admin");

const { FieldValue } = require("firebase/firestore");

exports.newtasks = async (req, res) => {
  const taskName = req.body.taskName;
  const taskLocation = req.body.taskLocation;
  const taskStatus = req.body.taskStatus;
  const taskPhotoIn = req.body.taskPhotoIn;
  const taskPhotoOut = req.body.taskPhotoOut;
  const taskType = req.body.taskType;
  const taskStartDate = req.body.taskStartDate;

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
    const docsAdded = await tasksRef.add(data);
    console.log("Document is wrriten with ID: ", docsAdded.id);
    return res.status(201).json(data);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};
