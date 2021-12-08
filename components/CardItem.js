import { Card,Image } from 'react-bootstrap';
import Link from 'next/link'
import { urlFor } from 'libs/api';
import moment from 'moment';



  const CardItem = (props ) => {
  const {age,name,coverimage,dob,slug,link,mode='normal' }=props;
  console.log("mode is"+mode)
   return (
       
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
           <Image
            src={urlFor(coverimage).height(800).url()}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/> 
            
          <div>
            <Card.Title className="font-weight-bold mb-1"> Author:{name}</Card.Title>
            <Card.Text className="card-date">Age: {age}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={urlFor(coverimage).fit('clip').flipVertical(false).height(377).url()}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{moment(dob).format('l')}</Card.Title>
          <Card.Text> Placehodler Subtitle</Card.Text>
        </Card.Body>
      </div>
      {link &&<Link href={link.href} as={link.as}>
      <a  className="card-button">
        Read More
      </a>
      </Link>
  }
    </Card>
  )
}

export default CardItem;