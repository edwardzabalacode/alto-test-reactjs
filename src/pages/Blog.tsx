import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import Card from "../components/Card/Card";
import Headline from "../components/Headline/Headline";
import { Post } from "../interfaces/post.interface";

export default function Blog() {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("posts")!);
    if (items) {
      setPost(items);
    }
  }, []);

  return (
    <div className="py-12">
      <div className="flex flex-row justify-between items-center px-4">
        <Headline>Blog list</Headline>
        <Link to="create">
          <Btn>Write blog post</Btn>
        </Link>
      </div>

      {/**render blog posts */}
      <div className="flex flex-row flex-wrap min-h-screen">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.id} className="p-4 md:w-1/3" to={post.id}>
              <Card post={post} />
            </Link>
          ))
        ) : (
          <p className="text-text text-center mx-auto mt-8">
            No post has been created yet. Please create one!
          </p>
        )}
      </div>
    </div>
  );
}
