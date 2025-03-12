"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Function to strip HTML tags and truncate the content
const stripHtmlTags = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const truncateText = (text: string, wordLimit: number = 20): string => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

interface Post {
  id: string;
  title: string;
  content: string;
  author_id: number;
  status: string;
  hero_url: string;
  createdAt: string;
  updatedAt: string;
}

const ContentSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get<Post[]>("http://localhost:4000/posts/published");
        setPosts(data.posts); // Assuming response body has 'posts' key
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="posts-grid">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <div className="image-container">
            {post.hero_url && (
              <Link href={post.hero_url}>
                <Image
                  src={post.hero_url}
                  alt={post.title}
                  width={600}
                  height={400}
                />
              </Link>
            )}
          </div>
          <div className="content">
            <h1>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h1>
            <div className="meta">
              <span>
                By: <Link href="#0">Author {post.author_id}</Link>
              </span>
            </div>
            <p>{truncateText(stripHtmlTags(post.content))}</p>
            <Link href={`/posts/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ContentSection;
