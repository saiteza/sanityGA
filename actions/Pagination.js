 import { getBlogsData } from "actions";
 import {   useSWRPages } from "swr";
 import { useEffect } from 'react';
 
import { Col } from "react-bootstrap";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
export const sample=(a)=>a;
export const getBlogCards = ({ initialData, filter}) => {
  useEffect(() => {
 window.__pagination__init=true;
  }, [])

  
   

  return useSWRPages(
    'index-page',
    ({offset, withSWR}) => {
      
      if (typeof window !== 'undefined' && window.__pagination__init) {
        initialData = null;
      }

      const { data: blogdata, error } = withSWR(getBlogsData({offset,filter},initialData));

      if (!blogdata) { return 'Loading...'}

      return blogdata?.map((blog) =>
      !filter.view.list ? 
        <Col key={blog.slug} md="4">
          <CardItem
            link={{
              href: "/Blogs/[slug]",
              as: `/Blogs/${blog.slug}`,
            }}
            slug={blog.slug}
            age={blog.age}
            name={blog.name}
            coverimage={blog.image}
            dob={blog.dob}
          />
        </Col>
       : 
        <Col key={blog.slug} md="9">
          <CardListItem
            link={{
              href: "/Blogs/[slug]",
              as: `/Blogs/${blog.slug}`,
            }}
            slug={blog.slug}
            age={blog.age}
            name={blog.name}
            coverimage={blog.image}
            dob={blog.dob}
          ></CardListItem>
        </Col>
        )
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
       if (SWR.data && SWR.data.length === 0) { return null; }
      return (index + 1) * 3;
    },
    [filter]
  )
}