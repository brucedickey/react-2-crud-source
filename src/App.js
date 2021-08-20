
import {useReducer} from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import PeopleHeader from './components/PeopleHeader.js';
import PeopleTable from './components/PeopleTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const refreshTable = () => {
    forceUpdate();
  };

  return (
    <div className="App">
      <Container fluid className="content">
        <Header />
        <div className="container">
          <PeopleHeader refreshTable={refreshTable} />
          <PeopleTable refreshTable={refreshTable} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
