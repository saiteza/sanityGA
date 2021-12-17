import sanityClient from "@sanity/client";

const options = {
  dataset: process.env.SANITY_DATASET_NAME="production",
  projectId: process.env.SANITY_PROJECT_ID="g7sudcw1",
  token: process.env.SANITY_API_TOKEN,

  useCdn: process.env.NODE_ENV === "production",

  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
};
export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})
export default sanityClient(options);
