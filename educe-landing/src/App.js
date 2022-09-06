import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="App">
      <Layout>
        <SectionOne />
        <SectionTwo/>
      </Layout>
    </div>
  );
}

export default App;
