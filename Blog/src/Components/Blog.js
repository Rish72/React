//Blogging App using Hooks
import { useState, useRef } from "react";

export default function Blog() {

  const titleRef= useRef(null);

  const [formData, setFormData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  }

  function removeBlog(i) {
    setBlogs(blogs.filter((blog, index) => i !== index));
  }

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              value={formData.title}
              ref={titleRef}
              onChange={(e) => {
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                });
              }}
              placeholder="Enter the Title of the Blog here.."
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              value={formData.content}
              onChange={(e) => {
                setFormData({ title: formData.title, content: e.target.value });
              }}
              placeholder="Content of the Blog goes here.."
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <>
          <div className="blog" key={i}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="blog-btn">
              <button onClick={() => removeBlog(i)} className="btn remove">
                Delete
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
