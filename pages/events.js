import { Footer, Navbar } from '../components';
import Eventspage from '../Eventpage/Events';

const Events = () => (
  <div className="overflow-hidden">
    <Navbar />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Eventspage />
    </div>
    <Footer />
  </div>
);

export default Events;
