import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xcg6w47a", // Your project ID
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-04-08", // Use current date for the API version
  token: "skqgIr3qgfCLvjbSC9Z4IbwHc7Bwfn9zMX0rG2l8Wtu51KjOANY11vGfGxC5J9Gd8sw2UQ6sG0Dv6CzoGQxm4zZdLnqppaFVTJqsNbYVUoZwpjexsEh2f86GVxlsKiTFRZyRQPseW7buO6NbocMdm4Sm0NVnVdfcJUvGyET3vQHAHZTL9DTk", // Only needed if querying private drafts
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
