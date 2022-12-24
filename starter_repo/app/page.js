import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <GetStarted />
    <Explore />
    <Insights />
    <WhatsNew />
    <Footer />
  </div>
);

export default Page;
