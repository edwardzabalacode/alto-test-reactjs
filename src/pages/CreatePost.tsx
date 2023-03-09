import { useState } from "react";
import { Post } from "../interfaces/post.interface";
import { v4 as uuidv4 } from "uuid";
import LocalStorageService from "../services/LocalStorageService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import InputHtml from "../components/InputHtml/InputHtml";
import Btn from "../components/Btn/Btn";
import DOMPurify from "dompurify";
import Headline from "../components/Headline/Headline";

export default function CreateBlogPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("");

  const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const notification = toast.loading("creating post!");

    const newPost: Post = {
      //todo change by interface
      id: uuidv4(),
      number: 1, // todo, get last post,
      title: title,
      description: DOMPurify.sanitize(description),
      category: category,
      createAt: new Date().toDateString(),
    };

    const olderPosts = JSON.parse(
      localStorage.getItem("posts") ?? "[]"
    ) as Post[];
    const posts = [...olderPosts, newPost];
    LocalStorageService.setItem("posts", posts)
      .then(() => {
        toast.success("Post created successfully", { id: notification });
        navigate("/blog");
      })
      .catch((err) => {
        toast.error(`Error ${err}`, { id: notification });
      });
  };

  return (
    <div className="py-12">
      <Headline>Create New Post</Headline>

      <div className="bg-background2 px-6 py-8 my-4">
        <form onSubmit={handleSubmitPost}>
          <div className="my-6">
            <div>
              <Input
                label={"Blog post title"}
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
          </div>

          <div className="my-6">
            <InputHtml
              label={"Blog post content"}
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>

          <div className="my-6">
            <div>
              <Input
                label={"Blog post category"}
                value={category}
                onChange={(e) => setCategory(e.currentTarget.value)}
              />
            </div>
          </div>

          <Btn disabled={!title || !description || !category}>
            Create blog post
          </Btn>
        </form>
      </div>
    </div>
  );
}
