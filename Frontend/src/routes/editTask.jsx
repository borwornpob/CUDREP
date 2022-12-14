import axios from "axios";
import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import useWindowDimensions from "../hook/dimension";

export default function EditTask() {
  const { width } = useWindowDimensions();
  const [type, setType] = useState("waiting");
  const [list, setList] = useState([]);

  const status = {
    waiting: "รอรับเรื่อง",
    doing: "กำลังดำเนินการ",
    finished: "ดำเนินการเสร็จสิ้น",
  };

  async function fetchData() {
    await axios
      .get("http://localhost:5050/tasks?queryTaskStatus=" + type)
      .then((res) => {
        console.log(res.data);

        var data = res.data;

        data.forEach((value, index) => {
          data[index].taskStatus = status[data[index].taskStatus];
        });
        setList(data);
      });
  }

  async function pushData(taskId, statusUpdate) {
    await axios
      .put(
        "https://localhost:5050/editTaskStatus?taskId=" +
          taskId +
          "&changedStatus=" +
          statusUpdate
      )
      .then(() => {
        console.log("triggered");
        useEffect();
      });
  }

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className="home-body mt-2">
      <Container>
        <h2>รายการแจ้งปัญหา</h2>
        <Form.Label>หมวดหมู่</Form.Label>
        <Form.Select
          value={type}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setType(e.target.value);
          }}
        >
          <option value="waiting">รอรับเรื่อง</option>
          <option value="doing">กำลังดำเนินการ</option>
          <option value="finished">ดำเนินการแก้ไขเสร็จสิ้น</option>
        </Form.Select>
        {width <= 500 && list.length !== 0
          ? list.map((value) => {
              var d = new Date(value.taskStartDate);
              return (
                <Card key={value.id} className="mt-3">
                  <Card.Img variant="top" src={value.taskPhotoIn} />
                  <Card.Body>
                    <Card.Title>{value.taskName}</Card.Title>
                    <Card.Text>{value.taskLocation}</Card.Text>
                    <Card.Text>{d.toUTCString()}</Card.Text>
                    <Form.Select value={type}>
                      <option value="waiting">รอรับเรื่อง</option>
                      <option value="doing">กำลังดำเนินการ</option>
                      <option value="finished">ดำเนินการแก้ไขเสร็จสิ้น</option>
                    </Form.Select>
                  </Card.Body>
                  <Card.Footer>{"สถานะ: " + value.taskStatus}</Card.Footer>
                </Card>
              );
            })
          : list.length !== 0
          ? Array.from({ length: 1 }).map(() => {
              return (
                <Row xs={2} md={3} className="g-4">
                  {list.map((value, idx) => (
                    <Col>
                      <Card key={value.id} className="mt-3">
                        <Card.Img variant="top" src={value.taskPhotoIn} />
                        <Card.Body>
                          <Card.Title>{value.taskName}</Card.Title>
                          <Card.Text>{value.taskLocation}</Card.Text>
                          <Card.Text>ID: {value.id}</Card.Text>
                          <Form.Select
                            value={type}
                            onChange={(e) => pushData(value.id, e.target.value)}
                          >
                            <option value="waiting">รอรับเรื่อง</option>
                            <option value="doing">กำลังดำเนินการ</option>
                            <option value="finished">
                              ดำเนินการแก้ไขเสร็จสิ้น
                            </option>
                          </Form.Select>
                        </Card.Body>
                        <Card.Footer>
                          {"สถานะ: " + value.taskStatus}
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              );
            })
          : null}
      </Container>
    </div>
  );
}
