import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const EditBlog = () => {

const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', subject: '', body: '' });

  useEffect(() => {
    // Fetch blog document  and setFormData info
    fetch(`http://localhost:3000/edit/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        console.log(JSON.stringify(data));
        console.log(data);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/editblog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => navigate('/')) // or to any route you want
    .catch(err => console.error(err));
  };


    return (
      <div className="create">
        <h2>Update Post</h2>
        <form onSubmit={handleUpdate}>
        <label>Update Title: </label>
      <input name="title" value={formData.title} onChange={handleChange} />

      <label>Update Subject: </label>
      <input name="subject" value={formData.subject} onChange={handleChange} />

      <label>Update Body: </label>
      <textarea name="body" value={formData.body} onChange={handleChange}></textarea>
      <button type="submit">Update</button>
    </form>

      </div>
     );
}
 
export default EditBlog;