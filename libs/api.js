import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { previewClient } from './sanity';


const Fields=`name,age,slug,'slug':slug.current, image ,dob,'refinfo':ref->Info,'authorname':ref->name, `  ;
const getClient = preview => preview ? previewClient : client
 export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export async function getAllBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
   const results = await client
  .fetch(`*[_type == "pra"]| order(name ${date})  {${Fields}}[${offset}...${offset + 6}]`);
  return results;
}

export async function getBlogBySlug(slug,preview) {
  const currentClient = getClient(preview);
   const result = await currentClient
    .fetch(`*[_type == "pra" && slug.current == $slug] {
      ${Fields}content[]{...,'asset':asset->} 
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])
  return result;

}