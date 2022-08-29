import { useState } from "react";
import { Container, Image, Button, Form } from "react-bootstrap";
import useWindowDimensions from "../hook/dimension.jsx";
import axios from "axios";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const [description, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("water");
  const [image, setImg] = useState({
    url: "",
    file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "desc") {
      setDesc(value);
    } else if (name === "image") {
      const upload_file = event.target.files[0];
      if (upload_file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const image_url = URL.createObjectURL(event.target.files[0]);
        console.log(image_url);
        setImg({
          url: image_url,
          file: upload_file,
        });
      } else {
        alert("not an image");
      }
    } else if (name === "loc") {
      setLocation(value);
    }
  };

  const uploadImage = async () => {
    let res;
    const formData = new FormData();
    formData.append("file", image.file, image.file.name);
    await axios
      .post("http://127.0.0.1:5050/upload/picture", formData, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": image.file.type,
        },
      })
      .then((response) => {
        console.log(response);
        res = response.data;
      })
      .catch((error) => {
        console.log(error);
        res = 0;
      });
    return res;
  };

  const createTask = async (imgUrl) => {
    const data = {
      taskName: description,
      taskLocation: location,
      taskStatus: "waiting",
      taskPhotoIn: imgUrl,
      taskPhotoOut: "",
      taskType: type,
      taskStartDate: Date.now(),
    };

    await axios
      .post("http://127.0.0.1:5050/newtasks", data, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    if (!image.file || !image.url) {
      alert("กรุณาถ่ายรูป");
      return;
    }
    console.log("type: ", type);
    console.log("description: ", description);
    let uploadIamgeUrl = await uploadImage();

    if (uploadIamgeUrl === 0) {
      alert("อัพโหลดภาพมีปัญหากรุณาแจ้งใหม่อีกครั้ง");
      setDesc("");
      setImg({
        url: "",
        file: "",
      });
      return;
    }

    await createTask(uploadIamgeUrl);
    alert("อัพโหลดเสร็จสิ้น");
  };

  return (
    <div className="home-body mt-5">
      <Container>
        <h2>รายงานปัญหาทางกายภาพในโรงเรียน</h2>
        {image.url ? (
          <Container>
            <Form.Label>ภาพที่ถ่ายได้</Form.Label>
            <Image width={width * 0.8} src={image.url} rounded />
          </Container>
        ) : null}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>เลือกภาพถ่าย</Form.Label>
            <Form.Control
              name="image"
              type="file"
              required
              onChange={handleChange}
            />

            <Form.Label>หมวดหมู่</Form.Label>
            <Form.Select
              value={type}
              onChange={(e) => {
                console.log("e.target.value", e.target.value);
                setType(e.target.value);
              }}
            >
              <option value="water">ระบบน้ำ</option>
              <option value="electronic">ระบบไฟฟ้า</option>
              <option value="computer">ระบบคอมพิวเตอร์</option>
              <option value="component">อุปกรณ์ชำรุด</option>
            </Form.Select>

            <Form.Label>รายละเอียด</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={description}
              onChange={handleChange}
              required
            />

            <Form.Label>สถานที่</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="loc"
              value={location}
              onChange={handleChange}
              required
            />

            <Form.Text className="text-muted">
              กรุณากรอกรายระเอียดให้ครบถ้วน
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
