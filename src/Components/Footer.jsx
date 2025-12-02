import { Facebook, Github, Instagram } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/aboutgameHub" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/allgames" className="link link-hover">
          All games
        </Link>

        <nav className="grid grid-flow-col gap-4">
          <button
            className="link link-hover"
            onClick={() =>
              navigate("/", { state: { scrollTo: "popular-games" } })
            }
          >
            Popular Games
          </button>
        </nav>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* GitHub */}
          <a href="https://github.com/alihasna32" target="_blank">
            <Github className="w-7 h-7" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/md.ali.hasan.164567"
            target="_blank"
          >
            <Facebook className="w-7 h-7" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/md_ali_hasan121/" target="_blank">
            <Instagram className="w-7 h-7" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Gamehub
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
