// app/page.tsx

"use client";

import Image from "next/image";

import { Typography, Card, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Title } = Typography;

import { posts } from "./posts";

export default function Home() {
  return (
    <main style={{ maxWidth: 500, margin: "0 auto" }}>
      <Title>
        <MenuOutlined /> React UI Libraries
      </Title>
      <Space direction="vertical" size={16}>
        {posts.map((post) => (
          <Card
            key={post.title}
            title={post.title}
            style={{ textTransform: "capitalize" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={360}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>{post.description}</p>
          </Card>
        ))}
      </Space>
    </main>
  );
}
