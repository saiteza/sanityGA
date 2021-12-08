import { Card,Image } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'libs/api';
import moment from 'moment';
 
 const CardListItem = (props) => {
  const {age,name,coverimage,dob,slug,link}=props;

  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <Image
            src={urlFor( coverimage).height(800).url()}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
            <div>
              <Card.Title className="font-weight-bold mb-1">{ name}</Card.Title>
              <Card.Text className="card-date">{moment(dob).format('l')}</Card.Text>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{slug}</Card.Title>
          <Card.Text>{ age}</Card.Text>
        </Card.Body>
      </div>
      { link &&<Link href={link.href} as={link.as} >
       <div className="card-button">
        Read More
      </div>
      </Link>
 }
       
    </Card>
  )
}

export default CardListItem;