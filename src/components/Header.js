import PokemonLogo from "../assets/images/pokemon-logo-png.png";

const Header = () => {
  return (
    <header className="header">
      <img src={PokemonLogo} alt="Pokemon" className="logo" />
    </header>
  );
};

export default Header;
