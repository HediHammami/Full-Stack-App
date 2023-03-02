"use client";

import { useQuery } from "react-query";
import axios from "axios";
import { AuthPosts } from "../types/AuthPosts";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts(): any {
  const { data, isLoading, error } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (error) return error;
  if (isLoading) return <h1>Posts are loading...</h1>;

  

  return (
    <div>
      {data?.Post?.map((post) => (
        <EditPost
          key={post.id}
          id={post.id}
          title={post.title}
          avatar={data.image}
          name={data.name}
          comments={post.Comment}
        />
      ))}
    </div>
  );
}
