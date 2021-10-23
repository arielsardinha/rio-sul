import DataInformation from "@components/dataInformation/dataInformation";
import Link from "@components/link/link";

const Header = () => (
  <header className="header-container containe">
    <DataInformation />
    <div className="box-titles">
      <h1>We help yout to realise your business goals</h1>
      <p>
        since 1890, when the business was founded in germen by jeorge vital bin
        truckpress has grown into one of the world's leading logistics providers
      </p>
      <div>
        <Link href="">Read More</Link>
        <Link href="">Get Quote</Link>
      </div>
    </div>
  </header>
);

export default Header;
