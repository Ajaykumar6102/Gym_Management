import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [Pack,setPack] = useState();

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:5555/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      setPack(res.data.Pack)
      console.log(res.data);
    });
  }, []);

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
      Pack,
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="form">
      <h1>Edit Member</h1>
      <label>Name</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>email</label>
      <input
        type="email"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>password</label>
      <input
        type="text"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <label>pack</label>
      <input
        type="text"
        value={Pack}
        onChange={(e) => setPack(e.target.value)}
      />
      <button onClick={editBook}>edit Member </button>
    </div>
  );
};

export default EditBook;
