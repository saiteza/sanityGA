import { getAllBlogs } from "libs/api"

export default async function getBlogsData(req, res) {
   const offset = parseInt((req.query.offset || 0), 10);
  const date = req.query.date || 'desc';
     const data = await getAllBlogs({offset, date});
    res.status(200).json(data)
  }   