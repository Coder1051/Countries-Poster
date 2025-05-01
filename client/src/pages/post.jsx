import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    Name: '',
    Image: '',
    Description: ''
  });
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Make API request to create the post
      const response = await axios.post('http://localhost:4300/api/v1/ads', formData);
      console.log('Post created successfully:', response.data);

      // Reset form after successful post
      setFormData({
        Name: '',
        Image: '',
        Description: ''
      });
      
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="Image"
            name="Image"
            value={formData.Image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="Description"
            name="Description"
            rows="4"
            value={formData.Description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default Post;
