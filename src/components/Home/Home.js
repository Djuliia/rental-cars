import {
  ConclusionParagraph,
  FeatureItem,
  FeatureList,
  HomeContainer,
  Span,
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
      <img src={carImg} alt="car"></img>

      <ConclusionParagraph>
        Explore Ukraine with confidence and convenience by choosing our company
        for your car rental needs.
        <br />
        Book your car today and embark on a memorable journey!
      </ConclusionParagraph>
      <h2>Why Choose us:</h2>
      <FeatureList>
        <FeatureItem>
          <Span>Diverse Fleet:</Span> We provide a diverse fleet of vehicles to
          suit your needs, whether you're looking for an economical option or a
          premium vehicle.
        </FeatureItem>
        <FeatureItem>
          <Span>Flexible Rental Options:</Span> Choose from various rental
          plans, including daily, weekly, and monthly rentals. We offer flexible
          options to accommodate your travel schedule.
        </FeatureItem>
        <FeatureItem>
          <Span>Easy Booking Process:</Span> Our user-friendly online booking
          system makes it convenient for you to reserve your preferred car from
          the comfort of your home or office.
        </FeatureItem>
        <FeatureItem>
          <Span>Quality Customer Service:</Span> we prioritize customer
          satisfaction. Our dedicated customer support team is ready to assist
          you with any inquiries or concerns.
        </FeatureItem>
        <FeatureItem>
          <Span>Transparent Pricing:</Span> Enjoy transparent pricing with no
          hidden fees. Our rental rates are competitive, providing excellent
          value for your money.
        </FeatureItem>
        <FeatureItem>
          <Span>Convenient Locations:</Span> With multiple rental locations
          across Ukraine, picking up and returning your rental car is convenient
          and hassle-free.
        </FeatureItem>
      </FeatureList>
    </HomeContainer>
  );
};
