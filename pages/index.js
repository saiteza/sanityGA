 
import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import { getAllBlogs } from "libs/api";
import MenuView from "components/Menuview";
import {getHello} from "actions";
import {getBlogsData} from "actions";
import { getBlogCards } from "actions/Pagination";
import PreviewContent from "components/PreviewContent";
 import Document, { Html, Head, Main, NextScript } from 'next/document'

 

 export default function Home({ blogs:initialData, preview   }) {
 
  const [filter, setfilter] = useState({
    view: {
      list: 1,
    },
    date: { asc: 1 }
  });
   const {data:blogs,error}= getBlogsData({filter},initialData);
   const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = getBlogCards({blogs, filter});
  
    return (
    <div>
       
      <PageLayout>
        <head>
        <script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S2WDE5Y5ZG',{'debug_mode':true});
        `}
      </script>
       
         <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TNNKT58');gtag('config', 'G-S2WDE5Y5ZG');`}}></script>
        <script>
     
        </script>
          </head>
      {preview&&<PreviewContent />}

        {blogs?.filter((author,key)=>key==2).map((author) => (
          <AuthorIntro
            key={author.name}
            info={author.refinfo}
            aname={author.authorname}
          />
        ))}
        <hr />
        <Row className="mb-5">
          {/* <Col md="10">
          <CardListItem />
        </Col> */}
          {/* <Col md="4">
          <CardItem />
        </Col> */}
          <MenuView
          filter={filter}
          onChange={(option, value) => {
            setfilter({ ...filter, [option]: value });
          }}
        />
            {pages}
            <div style={{textAlign: 'center'}}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary">
          {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'}
        </Button>
      </div>
        </Row>
      </PageLayout>
    </div>
  );
}

// export async function getStaticProps() {
//   const blogs = await getAllBlogs();

//   return {
//     props: {
//       blogs
//     }
//   }
// }
export async function getStaticProps({preview=false,previewData}) {
  const blogs = await getAllBlogs({offset: 0, date: 'desc'});
   return {
    props: {
      blogs,
      preview 
    },
  };
}
