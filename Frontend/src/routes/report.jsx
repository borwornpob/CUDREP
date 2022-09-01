import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import useWindowDimensions from "../hook/dimension";
import axios from "axios";

export default function Report() {
  const { width } = useWindowDimensions();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    var urlAPI = "http://172.20.10.9:5050/task?taskId=" + id;
    console.log("id:", id);
    axios.get(urlAPI).then((res) => {
      setData(res.data);
    });
  }

  return (
    <div className="mt-2">
      <Container>
        <Button
          variant="secondary"
          onClick={() => {
            navigate(-1);
          }}
        >
          กลับ
        </Button>
        <h2>{data.taskName}</h2>
        <h3>{data.taskStatus}</h3>
        <Image width={width * 0.8} src={data.taskPhotoIn} rounded />
        {data.taskStatus === "finished" ? (
          <>
            <h3 className="mt-2">ภาพงานการแก้ไข</h3>
            <Image width={width * 0.8} src={data.taskPhotoOut} rounded />
          </>
        ) : null}
      </Container>
    </div>
  );
}
