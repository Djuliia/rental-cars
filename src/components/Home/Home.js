import {
  ConclusionParagraph,
  FeatureItem,
  FeatureList,
  HomeContainer,
  WelcomeHeader,
} from './Home.styled';
import carImg from '../../images/car.jpg';

export const Home = () => {
  return (
    <HomeContainer>
      <WelcomeHeader>
        Welcome to Car Rental Service - Your Reliable Car Rental Partner in
        Ukraine
      </WelcomeHeader>
      <h2>Why Choose us:</h2>

      <FeatureList>
        <FeatureItem>
          Diverse Fleet: We provide a diverse fleet of vehicles to suit your
          needs, whether you're looking for an economical option or a premium
          vehicle.
        </FeatureItem>
        <FeatureItem>
          Flexible Rental Options: Choose from various rental plans, including
          daily, weekly, and monthly rentals. We offer flexible options to
          accommodate your travel schedule.
        </FeatureItem>
        <FeatureItem>
          Easy Booking Process: Our user-friendly online booking system makes it
          convenient for you to reserve your preferred car from the comfort of
          your home or office.
        </FeatureItem>
        <FeatureItem>
          Quality Customer Service: we prioritize customer satisfaction. Our
          dedicated customer support team is ready to assist you with any
          inquiries or concerns.
        </FeatureItem>
        <FeatureItem>
          Transparent Pricing: Enjoy transparent pricing with no hidden fees.
          Our rental rates are competitive, providing excellent value for your
          money.
        </FeatureItem>
        <FeatureItem>
          Convenient Locations: With multiple rental locations across Ukraine,
          picking up and returning your rental car is convenient and
          hassle-free.
        </FeatureItem>
      </FeatureList>

      <img src={carImg} alt="car"></img>

      <ConclusionParagraph>
        Explore Ukraine with confidence and convenience by choosing our company
        for your car rental needs. Book your car today and embark on a memorable
        journey!
      </ConclusionParagraph>
    </HomeContainer>
  );
};
