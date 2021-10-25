import Attributes from "@components/informationSections/sessao1/attributes";
import Descriptions from "@components/informationSections/sessao1/descriptions";
import QuantityDetailsUsers from "@components/informationSections/sessao1/quantityDeteils";

const SectionOne = () => (
  <section id="nossosServicos">
    <Attributes />
    <div className="box_sec1-title" data-aos="fade-up">
      <h3>NOSSOS SERVIÇOS DE QUALIDADE</h3>
      <p>
        Quem não sabe como buscar o prazer racionalmente encontra consequências
        que são extremamente dolorosos. Também não há ninguém que ame.
      </p>
    </div>
    <aside className="box-description-section1">
      <Descriptions
        link={"/icondescription/packages.png"}
        description={
          "Embalagem é a tecnologia de encerrar ou proteger produtos para distribuição, armazenamento, venda e uso."
        }
        title={"Embalagem e armazenamento"}
      />
      <Descriptions
        link={"/icondescription/earth-globe.png"}
        description={
          "Somos uma das empresas de transporte em todo o mundo, prestamos serviço pontual."
        }
        title={"Transporte Mundial"}
      />
      <Descriptions
        link={"/icondescription/door-to-door.png"}
        description={
          "Tecnologia de encerrar ou proteger produtos para distribuição, armazenamento, venda e uso."
        }
        title={"Entrega porta a porta"}
      />
      <Descriptions
        link={"/icondescription/road.png"}
        description={
          "Empresa de transporte mundial, prestamos serviço pontual por via terrestre."
        }
        title={"Transporte terrestre"}
      />
    </aside>
    <aside>
      <QuantityDetailsUsers />
    </aside>
  </section>
);

export default SectionOne;
