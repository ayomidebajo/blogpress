const iniState = {
  post: [
    { id: 1, content: "something" },
    { id: 2, content: "something is needed here" },
    { id: 3, content: "i need a lot of money" }
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
