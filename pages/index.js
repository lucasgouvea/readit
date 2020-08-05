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

const url = 'https://adplf0tcqj.execute-api.us-east-1.amazonaws.com/Prod/books';

const getBookSummary = (summary) => {
  // for smaller screens
  if (process.browser && window.screen.width < 500) {
    return `${summary.substr(0, 90)}...`;
  }
  return summary;
};
const BookCard = ({ book }) => (
  <Card style={{ width: 300, alignItems: 'center' }}>
    <CardHeader style={{ fontSize: 19, width: '100%' }}>{book.book}</CardHeader>
    <CardBody>
      <img src={book.img} width={120} height={170} alt="img" />
    </CardBody>
    <CardText style={{
      fontSize: 18, paddingTop: '1%', paddingLeft: '4%', paddingRight: '4%', paddingBottom: '2%',
    }}
    >
      {getBookSummary(book.summary)}
    </CardText>
  </Card>
);
const Home = ({ books }) => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet" />
    <Container className="align-content-center align-self-center">
      <Col className="mt-4 mb-3" style={{ textAlign: 'center' }}><h1>ReadIt</h1></Col>
      <Container className="row justify-content-center" style={{ marginRight: 0, marginLeft: 0 }}>
        {books.map((book) => <BookCard book={book} />)}
      </Container>
    </Container>
  </>
);

Home.getInitialProps = async () => {
  const res = await fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' } });
  const json = await res.json();
  return { books: json };
};

export default Home;
