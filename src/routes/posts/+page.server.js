import { client } from "$lib/helper/graphql-client";
import { postsQuery } from "$lib/helper/graphql-queries";

export async function load() {
  const [postsReq] = await Promise.all([client.request(postsQuery)]);
  const { posts } = postsReq;
  return {
    posts,
  };
}