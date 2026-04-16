import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "program",
        label: "Programs",
        path: "src/content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            return `/programs/${document._sys.filename}`;
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "type", label: "Type" },
          { type: "string", name: "badge", label: "Badge" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "taglineBody", label: "Tagline Body", ui: { component: "textarea" } },
          { type: "string", name: "outcomesIntro", label: "Outcomes Intro", ui: { component: "textarea" } },
          { type: "string", name: "pathwayTitle", label: "Pathway Title" },
          { type: "string", name: "pathwayDescription", label: "Pathway Description", ui: { component: "textarea" } },
          { type: "string", name: "heroImage", label: "Hero Image" },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "icon", label: "Icon" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "sub", label: "Sub-label" },
            ],
          },
          {
            type: "object",
            name: "courses",
            label: "Courses",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "outcomes",
            label: "Career Outcomes",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            fields: [
              { type: "string", name: "q", label: "Question" },
              { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } },
            ],
          },
        ],
      },
    ],
  },
});
