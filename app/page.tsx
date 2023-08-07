// app/page.tsx

import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Container from "@mui/material/Container";

import { posts } from "./posts";

export default function Home() {
  return (
    <Container maxWidth="sm" style={{ maxWidth: 500 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">React UI Libraries</Typography>
        </Toolbar>
      </AppBar>

      <ImageList cols={1}>
        {posts.map((post) => (
          <ImageListItem key={post.title}>
            <ImageListItemBar
              title={
                <h2 style={{ textTransform: "capitalize" }}>{post.title}</h2>
              }
              subtitle={
                <div style={{ whiteSpace: "initial", fontSize: "1em" }}>
                  {post.description}
                </div>
              }
              position="below"
            />
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={360}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
