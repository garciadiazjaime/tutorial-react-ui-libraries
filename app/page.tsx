// app/page.tsx
"use client";

import Image from "next/image";

import { HamburgerIcon } from "@chakra-ui/icons";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

import { posts } from "./posts";

export default function Home() {
  return (
    <ChakraProvider>
      <Box style={{ maxWidth: 500, margin: "0 auto" }}>
        <Heading as="h1" style={{ marginBottom: 20 }}>
          <HamburgerIcon /> React UI Libraries
        </Heading>
        <Box>
          {posts.map((post) => (
            <Card key={post.title} style={{ marginBottom: 40 }}>
              <CardHeader>
                <Heading style={{ textTransform: "capitalize" }}>
                  {post.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={360}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />

                  <Text pt="2" fontSize="sm">
                    {post.description}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
