import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "xcg6w47a", 
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true, 
  apiVersion: "2024-04-08",
  token: import.meta.env.VITE_SANITY_API_TOKEN || "skqgIr3qgfCLvjbSC9Z4IbwHc7Bwfn9zMX0rG2l8Wtu51KjOANY11vGfGxC5J9Gd8sw2UQ6sG0Dv6CzoGQxm4zZdLnqppaFVTJqsNbYVUoZwpjexsEh2f86GVxlsKiTFRZyRQPseW7buO6NbocMdm4Sm0NVnVdfcJUvGyET3vQHAHZTL9DTk",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
