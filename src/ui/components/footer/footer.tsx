import Link from "@components/link/link";
import Menu from "./component/menu";

const Footer = () => (
  <footer>
    <div>
      <div className="box-length">
        <h2>Prensa de caminhão</h2>
        <h4>nós entregamos carga em todo o mundo</h4>
        <p>
          Desde 1890, quando a empresa foi fundada em Germen, Austrália, por
          Jeorge Vital Bin e Jeorge Binny Van, a Truckpress tornou-se um dos
          principais fornecedores de logística do mundo. A entrega de encomendas
          de frete rodoviário é a transferência e as mercadorias por meio de
          transportadora rodoviária.
        </p>
      </div>
      <Menu />
    </div>
    <div className="footer-bottom">
      <p>
        Criado por TecnoPalmas © 2021 Rio Sul Rastreamento Todos os Direitos
        Reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
