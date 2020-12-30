const iniState = {
  posts: [
    {
      id: 1,
      src: "./img/lady.jpg",
      title: "something",
      content:
        "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes",
    },
    {
      id: 2,
      title: "something is needed here",
      content:
        "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes",
    },
    {
      id: 3,
      title: "i need a lot of money",
      content:
        "there should be something here though, I just don't know what to write here, oh well, It's just for testing purposes",
    },
  ],
  post: {},
};

// const defaultState = { async handleSave() {
//   const savedData = await this.editorInstance.save();
// }

// render() {
//   return <EditorJs instanceRef={instance => this.editorInstance = instance} data={data} />
// }
// }

const postReducer = (state = iniState, action) => {
  console.log("we are working from post reducer o", state);
  switch (action.type) {
    case "ADD_POST":
      console.log("created post", action.post);
      return {
        ...state,
        post: action.post,
      };
    case "ADD_POST_ERROR":
      console.log("create project error", action.err);
      return {
        ...state,
        post: action.err,
      };
    default:
      return state;
  }
};

export default postReducer;
