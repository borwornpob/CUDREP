import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Form, Card } from "react-bootstrap";
import useWindowDimensions from "../hook/dimension";

export default function Reports() {
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
      .get("http://127.0.0.1:5050/tasks?queryTaskStatus=" + type)
      .then((res) => {
        console.log(res.data);

        var data = res.data;

        data.forEach((value, index) => {
          data[index].taskStatus = status[data[index].taskStatus];
        });
        setList(data);
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
          <option value="finished">ดำเนินการแก้ไขเสร็จสิ้น</option>
          <option value="doing">กำลังดำเนินการ</option>
        </Form.Select>
        {list.length !== 0
          ? list.map((value) => {
              return (
                <Card key={value.id} className="mt-3">
                  <Card.Img variant="top" src={value.taskPhotoIn} />
                  <Card.Body>
                    <Card.Title>{value.taskName}</Card.Title>
                    <Card.Text>{value.taskLocation}</Card.Text>
                  </Card.Body>
                  <Card.Footer>{"สถานะ: " + value.taskStatus}</Card.Footer>
                </Card>
              );
            })
          : null}
      </Container>
    </div>
  );
}
