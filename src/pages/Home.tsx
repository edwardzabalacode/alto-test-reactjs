import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";
import Card from "../components/Card/Card";
import Headline from "../components/Headline/Headline";
import HeroImage from "../components/HeroImage/HeroImage";
import LocalStorageService from "../services/LocalStorageService";
import { Post } from "../interfaces/post.interface";

export const blogPosts = [
  {
    id: "1",
    number: 123,
    createAt: "March 5, 2022",
    title: "10 Tips for Working from Home Productively",
    description:
      "<h1>What is Lorem Ipsum</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h1>Why do we use it?</h1><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    category: "Learning",
  },
  {
    id: "2",
    number: 456,
    createAt: "February 15, 2022",
    title: "How to Build a React App from Scratch",
    description:
      "<h1>What is Lorem Ipsum</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h1>Why do we use it?</h1><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    category: "Learning",
  },
  {
    id: "3",
    number: 789,
    createAt: "January 25, 2022",
    title: "The Benefits of Learning a New Skill",
    description:
      "<h1>What is Lorem Ipsum</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h1>Why do we use it?</h1><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    category: "Learning",
  },
  {
    id: "4",
    number: 234,
    createAt: "January 15, 2022",
    title: "5 Reasons to Start a Side Hustle",
    description:
      "A list of 5 compelling reasons why you should consider starting a side hustle",
    category: "Learning",
  },
  {
    id: "5",
    number: 567,
    createAt: "December 30, 2021",
    title: "The Top 10 JavaScript Libraries You Need to Know About",
    description:
      "A roundup of the 10 most popular and useful JavaScript libraries for web developers",
    category: "Learning",
  },
  {
    id: "6",
    number: 890,
    createAt: "December 15, 2021",
    title: "How to Build Your First E-commerce Site",
    description:
      "A beginner-friendly guide to building your first e-commerce site",
    category: "Learning",
  },
  {
    id: "7",
    number: 111,
    createAt: "November 25, 2021",
    title: "The Importance of Sleep for Productivity",
    description:
      "A discussion of why getting enough sleep is essential for maintaining productivity and overall well-being",
    category: "Learning",
  },
  {
    id: "8",
    number: 222,
    createAt: "November 15, 2021",
    title: "Building a Responsive Website with Bootstrap",
    description:
      "A tutorial on how to use Bootstrap to create a responsive website that looks great on any device",
    category: "Learning",
  },
  {
    id: "9",
    number: 333,
    createAt: "October 30, 2021",
    title: "5 Essential Tools for Remote Teams",
    description:
      "A roundup of 5 essential tools for remote teams to stay connected and productive",
    category: "Learning",
  },
  {
    id: "10",
    number: 444,
    createAt: "October 15, 2021",
    title: "The Basics of Search Engine Optimization",
    description:
      "An overview of the fundamental principles of search engine optimization (SEO) and how to improve your website's ranking in search results",
    category: "Learning",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    LocalStorageService.getItem("posts").then((data) => {
      if (!data) {
        setPosts(blogPosts.slice(0, 3));
        LocalStorageService.setItem("posts", blogPosts.slice(0, 3)).then(() => {
          toast.success("The default posts have been saved.");
        });
      } else {
        setPosts(data.slice(0, 3));
      }
    });
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      {/**render hero image component **/}
      <section className="py-8">
        <HeroImage />
      </section>

      {/**render latest posts */}
      <section className="py-8">
        <Headline>Latest Blog Posts</Headline>

        <div className="py-2 flex flex-row flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3">
              <Link to={`blog/${post.id}`}>
                <Card post={post} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/**render another section */}
      <section className="pb-8">
        <Headline>Lorem Ipsum</Headline>
        <div className="pb-8 flex flex-row flex-wrap items-center">
          <div className="p-4 w-full md:basis-2/3">
            <YouTube
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={onPlayerReady}
              className="w-full"
            />
          </div>
          <div className="text-text p-4 w-full md:basis-1/3">
            <h3 className="text-xl font-semibold">Lorem Ipsum</h3>
            <p className="py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
