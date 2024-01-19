import { List, Logo, StyledHeader, StyledLink } from './Header.styled';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/">
        <img src={logo} alt="Logo" width="32" height="32" />
      </Logo>
      <List>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </List>
    </StyledHeader>
  );
};
