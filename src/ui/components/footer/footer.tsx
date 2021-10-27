import Link from "@components/link/link";
import Menu from "./component/menu";

const Footer = () => (
  <>
    <footer id="footer">
      <div>
        <div className="box-length">
          <img
            src="logo-rio-sul-green.svg"
            alt="rio sul rastreamento"
            title="Rio Sul rastreamento"
          />
          <p>
            A Rio Sul Rastreamento está no mercado a mais de 10 anos, a empresa
            nasceu da necessidade de ofertar mais um produto para os usuários da
            Rio Sul Benefícios que já usufrui de um serviço premium de proteção
            veicular.
          </p>
        </div>
        <Menu />
      </div>
      <div className="footer-bottom">
        <address>
          © 2021 Rio Sul Rastreamento Todos os Direitos Reservados. CNPJ:
          04.782.980/0001-82 - RIO SUL RASTREAMENTO DE VEICULOS LTDA
          Desenvolvido por TecnoPalmas Soluções em T.I
        </address>
      </div>
    </footer>
  </>
);

export default Footer;
