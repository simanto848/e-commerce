import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-red-600 text-white text-center py-4">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://github.com/simanto848"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size="24" />
          </a>
          <a
            href="https://facebook.com/simanto166"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF size="24" />
          </a>
          <a
            href="https://linkedin.com/in/simanto848"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedinIn size="24" />
          </a>
          <a
            href="https://instagram.com/simanto848"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size="24" />
          </a>
        </div>
        <p>&copy; 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
