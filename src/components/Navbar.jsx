import logo from "../assets/aaryan.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shirnk-0 items-center">
        <img src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://www.linkedin.com/in/singla-aryan/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Aryan-Singla">
          <FaGithub />
        </a>

        <a href="https://x.com/AryanSingla_">
          <FaSquareXTwitter />
        </a>

        <a href="https://www.instagram.com/aryan_singla___/">
          <FaInstagram />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
