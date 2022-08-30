import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

export default function Reports() {
  const [type, setType] = useState("doing");
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://127.0.0.1:5050/tasks?queryTaskStatus=" + type)
        .then((res) => {
          console.log(res.data);
          setList(list);
        });
    }
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
      </Container>
    </div>
  );
}
