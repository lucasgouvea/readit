import {useState} from 'react';
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Col,
  CardText,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

const url = 'https://5j49lvdcs6.execute-api.us-east-1.amazonaws.com/Prod/books';

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
const Home = ({ books }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet" />
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ReadIt</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      <Container className="align-content-center align-self-center">
        <Container className="row justify-content-center" style={{ marginRight: 0, marginLeft: 0 }}>
          {books.map((book) => <BookCard book={book} />)}
        </Container>
      </Container>
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' } });
  const json = await res.json();
  return { books: json };
};

export default Home;
