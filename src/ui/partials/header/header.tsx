import DataInformation from "@components/dataInformation/dataInformation";
import Link from "@components/link/link";

const Header = () => (
  <header id="home" className="header-container containe">
    <DataInformation />
    <div className="box-titles" data-aos="fade-up">
      <h1>Nós o ajudamos a realizar seus objetivos de negócios</h1>
      <p>
        desde 1890, quando a empresa foi fundada em germen por jeorge vital bin
        truckpress tornou-se um dos principais fornecedores de logística do
        mundo
      </p>
      <div>
        <Link href="">Adquira o serviço</Link>
      </div>
    </div>
  </header>
);

export default Header;
