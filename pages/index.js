import { useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Col,
  CardText,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

const img = 'https://images-na.ssl-images-amazon.com/images/I/41gOdaJX5cL._SX293_BO1,204,203,200_.jpg';

const summary = '\
Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Etiam eget ligula eu lectus lobortis condimentum.\
Aliquam nonummy auctor massa.\
Pellentesque habitant morbi tristique senectus et netus et malesuada\
fames ac turpis egestas. Nulla at risus. Quisque purus magna,\
auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.';

const getBookSummary = () => {
  // for smaller screens
  if (process.browser && window.screen.width < 500) {
    return `${summary.substr(0, 90)}...`;
  }
  return summary;
};
const BookCard = () => (
  <Card style={{ width: 400, alignItems: 'center' }}>
    <CardHeader style={{ fontSize: 19, width: '100%' }}>Porque nós dormimos</CardHeader>
    <CardBody>
      <img src={img} width={120} height={170} alt="img" />
    </CardBody>
    <CardText style={{
      fontSize: 18, paddingTop: '1%', paddingLeft: '4%', paddingRight: '4%', paddingBottom: '2%',
    }}
    >
      {getBookSummary()}
    </CardText>
  </Card>
);
const Home = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet" />
    <Container className="align-content-center">
      <Col className="mt-4 mb-3" style={{ textAlign: 'center' }}><h1>ReadIt</h1></Col>
      <Container className="row justify-content-center">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Container>
    </Container>
  </>
);

export default Home;
