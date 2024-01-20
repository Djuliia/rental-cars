import {
  List,
  Logo,
  LogoText,
  StyledHeader,
  StyledLink,
} from './Header.styled';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/">
        <img src={logo} alt="Logo" width="32" height="32" />
        <LogoText>Rent a car</LogoText>
      </Logo>

      <List>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
        <StyledLink to="/test">Test</StyledLink>
      </List>
    </StyledHeader>
  );
};
