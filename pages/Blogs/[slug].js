import PageLayout from "components/PageLayout";
import { Row,Col } from "react-bootstrap";
import { getBlogBySlug, getAllBlogs } from "libs/api";
 import BlogsHeader from "./BlogsHeader";
import BlockContent from "@sanity/block-content-to-react"
import HighlightCode from "components/Highlights";
import { urlFor } from 'libs/api';
import PreviewContent from "components/PreviewContent";
import moment from "moment";

const serializers = {
  
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <HighlightCode language={language}>
           {code}  <br />
           <div className="code-filename"> {filename}</div>
             </HighlightCode>
          )
    },
  
    image: ({node: {asset, alt,position}}) => {
       
       return (
        <div className= {`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(200).url()} />
          <div className="image-alt">{alt}</div>
        </div>
      )
  }
  
  }
}
export const BlogDetails = ({ Slug,preview }) => {
    return (
    <PageLayout className="blog-detail-page">
      
      <h1>Blog Page - {Slug?.slug}</h1>
       {preview&& <PreviewContent/>}

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
        <h1>Hello {Slug?.slug}</h1>
        
      <BlogsHeader   age={Slug.age}
                     image={Slug.image} 
                      dob={moment(Slug.dob).format('llll')}  
                      name={Slug.name}
                     authorName={Slug.authorName}
       ></BlogsHeader>
          <hr/>
          {/* Blog Content Here */}
          {Slug.refinfo}
           
           {Slug?.content  &&<BlockContent    blocks={Slug?.content} serializers={serializers} >
             
          </BlockContent>
    }
         </Col>
      </Row>
    </PageLayout>
     
  );
};

export async function getStaticProps({ params,preview=false,previewData }) {
    const Slug = await getBlogBySlug(params.slug,preview);
 
  return {
    props: {
     
      Slug,
      fallback: true,
      preview
    },
    
  };
}

export async function getStaticPaths() {
  console.log("Getting paths for every page");
  const alldata = await getAllBlogs();
  const paths = alldata?.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default BlogDetails;
