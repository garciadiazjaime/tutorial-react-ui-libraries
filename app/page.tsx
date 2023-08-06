// app/page.tsx

import Image from "next/image";

const posts = [
  {
    title: "title one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/post-1.jpeg",
  },
  {
    title: "title two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/post-2.jpeg",
  },
  {
    title: "title three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/post-3.jpeg",
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>React UI Libraries</h1>
      <div>
        {posts.map((post) => (
          <div key={post.title} style={{ marginBottom: 80 }}>
            <h2 style={{ textTransform: "capitalize" }}>{post.title}</h2>
            <Image src={post.image} alt={post.title} width={500} height={360} style={{maxWidth: '100%', height: 'auto'}} />
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
