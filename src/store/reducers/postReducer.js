const iniState = {
  post: [
    { id: 1, title: "something", content: "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes"},
    { id: 2, title: "something is needed here", content: "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes"},
    { id: 3, title: "i need a lot of money", content: "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes"}
  ]
};

// const defaultState = { async handleSave() {
//   const savedData = await this.editorInstance.save();
// }

// render() {
//   return <EditorJs instanceRef={instance => this.editorInstance = instance} data={data} />
// }
// }

const postReducer = (state = iniState, action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("created post", action.post);
      return state;
    case "ADD_POST_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
