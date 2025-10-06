import Carousel from "../components/Carousel";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import FeaturedSection from "../components/FeaturedSection";
import BlogPreview from "../components/BlogPreview";
import VideoSection from "../components/VideoSection";
import { slides, destinations } from "../../data";
import NewsletterSignup from "../components/NewsletterSignup";

const Home = () => {
  return (
    <div>
      <Carousel slides={slides} />
      <div className="container mt-4">
        <FeaturedSection />
        <h2 className="text-center mb-4">Explore Beautiful Destinations</h2>
        <div className="row align-items-stretch">
          {destinations.map((place) => (
            <div className="col-md-4 mb-4 d-flex" key={place.id}>
              <Destination
                title={place.title}
                description={place.description}
                image={place.image}
                price={place.price}
              />
            </div>
          ))}
        </div>
        <BlogPreview />
          <VideoSection />
          <NewsletterSignup />
      </div>
      <Footer />
    </div>
  );
};

export default Home;