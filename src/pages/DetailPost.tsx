import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import LocalStorageService from "../services/LocalStorageService";
import { Post } from "../interfaces/post.interface";
import DOMPurify from "dompurify";

type ParamTypes = {
  id: string;
};

export default function DetailPost() {
  const navigate = useNavigate();
  const { id } = useParams<ParamTypes>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    LocalStorageService.getItem("posts").then((data) => {
      if (data) {
        const p = data.find((item) => item.id === id);
        setPost(p);
      }
    });
  }, [id]);

  return (
    <div className="py-12">
      {/**blog post title */}
      <div className="flex flex-row justify-between items-center space-x-4 px-4 py-6">
        <h1 className="text-text text-2xl font-bold basis-2/3">
          {post?.title}
        </h1>
        <Btn onClick={() => navigate("edit")}>Edit post</Btn>
      </div>

      <div className="px-4">
        <img
          className="object-cover w-full md:h-96"
          src={
            "https://firebasestorage.googleapis.com/v0/b/woppi-29472.appspot.com/o/blog-post-image.png?alt=media&token=7207dd46-3c4d-433d-ad61-b58d613e7e62"
          }
          alt={`Blog Post${post?.title}`}
        />
      </div>

      {/**post description */}
      <p
        className="text-text px-4 my-6"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post?.description!, {
            USE_PROFILES: { html: true },
          }),
        }}
      ></p>
    </div>
  );
}
