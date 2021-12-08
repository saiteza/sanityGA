import { urlFor } from 'libs/api';
 
  function BlogHeader(props) {
       
    const {age,image,name,authorname,dob }= props
     return (
      <div className="blog-detail-header">
        <p className="lead mb-0">
        {image && (
            <img
            src={urlFor(image).url()}
            className="rounded-circle mr-3"
               alt=""
                 />
                 )}     
           {/* slug images <img
            src={urlFor(image).height(400)}
            className="rounded-circle mr-3"
            
            alt="avatar"/><br></br>    */}
          {authorname}
          {', '} {dob} 
        </p>
        <h1 className="font-weight-bold blog-detail-header-title mb-0">{name}</h1>
        <h2 className="blog-detail-header-subtitle mb-3">{age}</h2>
          {/* Check if contains cover image */}
          {image && (
            <img
            src={urlFor(image).url()}
            className="rounded-circle mr-3"
               alt=""
                 />
                 )}  
      </div>
    )
  }
  export default BlogHeader;