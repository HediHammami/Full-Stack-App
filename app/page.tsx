"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "react-query";
import { PostsType } from "./types/Posts";
import Post from "./components/Post";

//Fetch all posts
const fetchAllPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: fetchAllPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "loading...";

  
  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          createdAt={post.createdAt}
          comments={post.Comment}
        />
      ))}
    </main>
  );
}
