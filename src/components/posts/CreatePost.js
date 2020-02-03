import React, { Component } from "react";
// import { connect } from "react-redux";
// import { createPost } from "../../store/actions/PostActions";
// import { Redirect } from "react-router-dom";
import { Editor, EditorState, RichUtils } from "draft-js";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }
  toggleInlineStyle(e) {
    e.preventDefault();
    let;
  }
  render() {
    return (
      <div className="my-little-app">
        <h1>Playing with Draft.js!</h1>
        <div className="draft-editor-wrapper">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            onMouseDown={}
          />
        </div>
      </div>
    );
  }
}

export default CreatePost;
