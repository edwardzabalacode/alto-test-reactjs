import { useEffect, useState } from "react";
import LocalStorageService from "../services/LocalStorageService";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input/Input";
import InputHtml from "../components/InputHtml/InputHtml";
import Btn from "../components/Btn/Btn";
import Headline from "../components/Headline/Headline";

type ParamTypes = {
  id: string;
};

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams<ParamTypes>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    LocalStorageService.getItem("posts").then((data) => {
      if (data) {
        const p = data.find((item) => item.id === id);
        if (p) {
          setTitle(p.title);
          setDescription(p.description);
          setCategory(p.category);
        }
      }
    });
  }, []);

  const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const notification = toast.loading("updating post!");

    // search the post in localstorage
    const posts = await LocalStorageService.getItem("posts");
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        post.title = title;
        post.description = description;
        post.category = category;
      }
      return post;
    });

    LocalStorageService.setItem("posts", newPosts)
      .then(() => {
        toast.success("Post updated successfully", { id: notification });
        navigate(`/blog/${id}`);
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
            Update Blog post
          </Btn>
        </form>
      </div>
    </div>
  );
}
