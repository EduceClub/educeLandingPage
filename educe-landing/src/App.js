import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree'
import HowItWorks from './components/HowItWorks';


function App() {
  return (
      <div className="App">
        <Layout>
          <SectionOne />
          <SectionTwo />
          {/* <SectionThree /> */}
          <HowItWorks />
        </Layout>
      </div>
  );
}

export default App;
