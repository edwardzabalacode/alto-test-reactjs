import { Post } from "../../interfaces/post.interface";

type Props = {
  post: Post;
};

export default function Card({ post }: Props) {
  return (
    <div className="max-w-sm bg-background2 dark:bg-gray-800 dark:border-gray-700">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/woppi-29472.appspot.com/o/blog-post-image.png?alt=media&token=7207dd46-3c4d-433d-ad61-b58d613e7e62"
        alt={`blog post ${post.title}`}
      />

      <div className="p-5">
        <div className="flex flex-row justify-between">
          <p className="text-text text-xs font-semibold">{post.createAt}</p>
          <div className="text-xs font-bold text-text">
            <span className="mr-1 bg-standard text-background rounded-full py-1 px-2">
              #{post.category}
            </span>
          </div>
        </div>

        <h5 className="my-3 text-xl text-white font-bold tracking-tigh">
          {post.title}
        </h5>
      </div>
    </div>
  );
}
