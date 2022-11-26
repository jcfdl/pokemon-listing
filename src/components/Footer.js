import PokemonSound from "../assets/sounds/pokemon-opening.mp3";

const Footer = () => {
  return (
    <footer className="text-center">
      &copy; John 2022
      <audio src={PokemonSound} autoPlay loop />
    </footer>
  );
};

export default Footer;
