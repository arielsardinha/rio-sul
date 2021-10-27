import Link from "@components/link/link";
import { useState } from "react";

const Nav = () => {
  const [opem, setOpem] = useState("");
  return (
    <>
      <div className="box-menu-nav">
        <Link href="/">
          <img
            src="/logo-rio-sul-green.svg"
            alt="rio sul"
            className="logo-menu"
            title="Rio sul"
          />
        </Link>
        <button
          className={`btn-menu ${opem === "opem" ? "active-opem" : ""} ${
            opem === "close" && "acctive-close"
          }`}
          onClick={() => {
            setOpem(opem === "opem" ? "close" : "opem");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-3x3-gap"
            viewBox="0 0 16 16"
          >
            <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`container-nav-menu ${opem === "opem" ? "active-menu" : ""}`}
      >
        <button
          className="back-left"
          onClick={() => {
            setOpem(opem === "opem" ? "close" : "opem");
          }}
        ></button>
        <nav className="back-right">
          <Link href="/#home">home</Link>
          <Link href="/#nossosServicos">Nossos Serviços</Link>
          <Link href="/#equipeDedicada">Conheça nossa equipe dedicada</Link>
          <Link href="/#duvidas">duvidas frequentes</Link>
          <Link href="/#footer">contatos</Link>
          <a
            href="http://acesso.riosulrastreamento.com/release.html"
            target="_blank"
            rel="noreferrer"
          >
            Rastreamento
          </a>
          <a href="https://WA.me/556333221580" target="_blank" rel="noreferrer">
            Adquira nossos serviços
          </a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
