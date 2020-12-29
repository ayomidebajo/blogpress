import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import LinkTool from "@editorjs/link";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import { createPost } from "../../store/actions/PostActions";
import { connect } from "react-redux";
import { EDITOR_JS_TOOLS } from "../../constants/ConstantsEditor";
import ScrollArea from "react-scrollbar";
import Footer from "../layouts/footer/Footer";

class Post extends Component {
  state = {
    content: {},
  };
  // componentDidMount() {
  //   this.editor; // access editor-js
  // }

  onChange = (e) => {
    this.setState({ content: e });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited stuff", this.state.content);

    console.log(this.editor, "Saved data from editor js");
  };

  render() {
    // const ref = React.useRef(null);
    // const
    return (
      <>
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
            <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={false}
            >
              <Editor
                contenteditable
                className="editor"
                ref={(r) => (this.editor = r)}
                id="editor post"
                placeholder="Write an awesome story!"
                tools={EDITOR_JS_TOOLS}
                onData={(data) =>
                  this.setState(
                    {
                      content: data,
                    },
                    console.log(this.state.content, "we are doing this bitch!")
                  )
                }
                onChange={this.onChange}
                onReady={() => console.log("Start!")}
                data={this.state.content}
              />
            </ScrollArea>
          </div>
        </div>
        <Footer />
      </>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(Post);
