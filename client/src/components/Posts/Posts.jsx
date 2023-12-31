import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <h1>Hello</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
