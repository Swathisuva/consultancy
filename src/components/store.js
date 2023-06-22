import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Store = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Perform necessary actions to update the carousel with the new images
    // You can use the 'images' state variable here to get the selected images

    // Reset the form
    setImages([]);
  };

  return (
    <div>
      <h4>Update Carousel Images</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicImages">
          <Form.Label>Images</Form.Label>
          <Form.Control type="file" multiple onChange={handleImageChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Carousel
        </Button>
      </Form>
    </div>
  );
};

export default Store;
