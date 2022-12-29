import { Footer, Navbar } from '../components';
import { Home } from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Insightpage } from '../Eventpage';

// const Home = () => (
//   <div className="bg-primary-black overflow-hidden">
//     <Navbar />
//     <Hero />
//     <div className="relative">
//       <About />
//       <div className="gradient-03 z-0" />
//       <GetStarted />
//     </div>
//     <div className="relative">
//       <Explore />
//       <div className="gradient-04 z-0" />
//       <Insights />
//     </div>
//     <div className="relative">
//       <WhatsNew />
//       <div className="gradient-04 z-0" />
//     </div>
//     <Footer />
//   </div>
// );

const App = () => (
  <BrowserRouter>
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
      <Navbar />
    </div>
    <Routes>
      {/* Root page  */}
      <Route path="/" element={(<Home />)} />

      {/* pages  */}
      <Route path="/events" element={<Insightpage />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
