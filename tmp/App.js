import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import PeopleHeader from './components/PeopleHeader.js';
import PeopleTable from './components/PeopleTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Provider } from 'react-redux';
//import store from './store/index';
import './App.css';

function App() {
  const [peopleList, setPeopleList] = useState([]);

  return (
    <div className="App">
      <Container fluid className="content">
        <Header />
        <div className="container">
          <PeopleHeader peopleList={peopleList} setPeopleList={setPeopleList} />
          <PeopleTable peopleList={peopleList} setPeopleList={setPeopleList} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
