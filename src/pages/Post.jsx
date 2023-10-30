import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post(props) {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    // effect
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => {
        throw new Error("Post does not exist");
      });

    return () => {};
  }, []);
  return post ? (
    <section>
      <div className="bg-blue-600 text-white p-6">
        <Link to={"/postcsr"} className="underline">
          All Posts
        </Link>
      </div>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-3xl font-bold">Dynamic Post Page, ID: {postId}</h1>

        <div key={post.id} className="rounded shadow-lg m-4 bg-purple-950">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className="text-gray-400 text-base">{post.body}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              Post {post.id}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              User {post.userId}
            </span>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h3>Loading...</h3>
  );
}
