const { db } = require("../util/admin");

import { collection, addDoc } from "firebase/firestore";

exports.newtasks = async (req, res) => {
  const taskName = req.query.taskName;
  const taskLocation = req.query.taskLocation;
  const taskStatus = req.query.taskStatus;
  const taskPhotoIn = req.query.taskPhotoIn;
  const taskPhotoOut = req.query.taskPhotoOut;
  const taskType = req.query.taskType;
  const taskStartDate = req.query.taskStartDate;

  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      taskName: taskName,
      taskLocation: taskLocation,
      taskStatus: taskStatus,
      taskPhotoIn: taskPhotoIn,
      taskPhotoOut: taskPhotoOut,
      taskType: taskType,
      taskStartDate: taskStartDate,
    });
    console.log("Docment written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", e);
  }
};
