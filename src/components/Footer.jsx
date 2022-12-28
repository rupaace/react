import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-purple-300 py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center font-semibold">
          <div className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Ace
          </div>
        </div>
    </footer>
  );
}

export default Footer;
