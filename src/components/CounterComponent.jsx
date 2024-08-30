import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";
import { useCreatePostMutation, useDeletePostMutation, useGetAllPostsQuery } from "../redux/jsonplaceholderApi";

const Counter = () => {
  // const [count, setCount] = useState({ value: 0 });

  const count = useSelector((state) => state?.counter);

  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllPostsQuery();
  const [createPost, result] = useCreatePostMutation();
  const [deletePost, deleteResult] = useDeletePostMutation();

  const handlePost = async () => {
    const result = await createPost({
      title: "foo",
      body: "bar",
      userId: 2,
    });
    alert(JSON.stringify(result.data));
  };
  const handleDeletePost = async () => {
    const result = await deletePost();
    console.log({ result });
    alert(JSON.stringify(result.data));
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment(2));
          handlePost();
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={() => {
          dispatch(decrement(1));
          handleDeletePost();
        }}
      >
        Decrement Counter
      </button>
      <p>Count:{count}</p>
    </div>
  );
};

export default Counter;
