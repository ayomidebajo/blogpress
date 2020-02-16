import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import LinkTool from "@editorjs/link";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import { createPost } from "../../store/actions/PostActions";
import { connect } from "react-redux";

class Post extends Component {
  state = {
    content: ""
  };
  // componentDidMount() {
  //   this.editor; // access editor-js
  // }

  onChange = e => {
    this.setState({ content: e });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit", this.state);
    // const savedData = await this.editor.save();

    this.props.createPost(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="editor--container">
          <Link to="/home">
            <img src={Logo} alt="logo" />
          </Link>
          {/* <link to="/home"> */}
          <button onClick={this.handleSubmit} className="editor-btn">
            Publish
          </button>
          {/* </link> */}
          <Editor
            className="editor"
            ref={r => (this.editor = r)}
            id="editor post"
            placeholder="Write an awesome story!"
            tools={{
              header: Header,
              list: List
            }}
            onData={this.onChange}
            onChange={this.onChange}
            onReady={() => console.log("Start!")}
            data={{
              time: 1569611146631,
              blocks: [],
              version: "2.15.0"
            }}
          ></Editor>
        </div>
      </div>
    );
  }
}

// {
//   type: "linkTool",
//   data: {
//     link: "https://www.youtube.com/watch?v=OK6akGZCC88",
//     meta: {
//       title: "",
//       site_name: "",
//       description: "",
//       image: {
//         url: ""
//       }
//     }
//   }
// }
{
  /* linkTool: {
              class: LinkTool,
              config: {
                endpoint: "http://localhost:3000/"
              }
            } */
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(null, mapDispatchToProps)(Post);
