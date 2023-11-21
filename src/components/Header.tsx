import { type HeaderProps } from "../types";

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};
export default Header;
