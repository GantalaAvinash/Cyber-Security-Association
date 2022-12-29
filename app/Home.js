
import { About, Explore, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <GetStarted />
    </div>
    <div className="relative">
      <Explore />
      <div className="gradient-04 z-0" />
      <Insights />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Home;