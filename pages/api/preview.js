import { getBlogBySlug } from 'libs/api';

export default async function enablePreview(req, res) {
   if ( req.query.secrete  !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
     return res.status(401).json({message: 'Invalid token'})
  }
 
  const blog = await getBlogBySlug(req.query.slug);

  if (!blog) {
    return res.status(401).json({message: 'Invalid Slug!'})
  }     
  // setPreviewData will set cookies into you browsert
  // __prerender_bypass __next_preview_data
  res.setPreviewData({message: 'Hello World'});
  res.writeHead(307, { Location: `/Blogs/${blog.slug}`})
  res.end();
}