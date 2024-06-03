//Blogging App using Hooks
import { useState, useRef, useEffect, useReducer } from "react";

function blogReducer(state, action) {

  switch(action.type){
    case "ADD" : return [action.blog , ...state]
    case "DELETE" : return state.filter((blog, index) => index !== action.index);
    default : return []
  }

}
export default function Blog() {
  const titleRef = useRef(null);

  const [formData, setFormData] = useState({ title: "", content: "" });
  // const [blogs, setBlogs] = useState([]);
  const [blogs, dispatch] = useReducer(blogReducer, []);
  let [top, setTop] = useState(null);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    setTop((top = formData.title));
    //setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);

    dispatch({
      type: "ADD",
      blog: { title: formData.title, content: formData.content },
    });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  }

  useEffect(() => {
    if (blogs.length <= 0 && !top) {
      document.title = "No Available Blogs";
    } else {
      document.title = top;
    }
  }, [top]);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  function removeBlog(index) {
    // setBlogs(blogs.filter((blog, index) => i !== index));

    dispatch({
      type : "DELETE" ,
      index : index
    })
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
              required
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
