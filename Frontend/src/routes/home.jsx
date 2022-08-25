import { useState } from "react";
import { Container, Image, Button, Form } from "react-bootstrap";
import useWindowDimensions from "../hook/dimension.jsx";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const [description, setDesc] = useState("");
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
      const image_url = URL.createObjectURL(event.target.files[0]);
      console.log(image_url);
      setImg({
        url: image_url,
        file: upload_file,
      });
    }
  };

  const handleSubmit = () => {
    if (!image) {
      alert("กรุณาถ่ายรูป");
      return;
    }
    console.log("description: ", description);
  };

  return (
    <div className="home-body mt-5">
      <Container>
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

            <Form.Label>รายละเอียด</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={description}
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
