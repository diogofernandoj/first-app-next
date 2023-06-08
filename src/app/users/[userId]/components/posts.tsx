import { Post } from "@/app/types";

type Props = {
  promise: Promise<Post[]>;
};

const Posts = async ({ promise }: Props) => {
  const posts = await promise;

  return (
    <>
      <h2>Posts here!</h2>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
