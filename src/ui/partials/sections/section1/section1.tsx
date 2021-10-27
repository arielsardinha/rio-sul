import Attributes from "@components/informationSections/sessao1/attributes";
import Descriptions from "@components/informationSections/sessao1/descriptions";
import QuantityDetailsUsers from "@components/informationSections/sessao1/quantityDeteils";

const SectionOne = () => (
  <section id="nossosServicos">
    {/* <Attributes /> */}
    <div className="box_sec1-title" data-aos="fade-up">
      <h3>NOSSOS SERVIÇOS DE QUALIDADE</h3>
      <p>
        Quem não sabe como buscar o prazer racionalmente encontra consequências
        que são extremamente dolorosos. Também não há ninguém que ame.
      </p>
    </div>
    <aside className="box-description-section1">
      <Descriptions
        link={"/icondescription/earth-globe.png"}
        description={
          "Melhore o controle de veículos da sua operação, reduza custos, saiba onde estão seus carros e garanta que os motoristas estão cumprindo todas as boas práticas de conduta."
        }
        title={"Rastreamento de Caminhões"}
      />
      <Descriptions
        link={"/icondescription/road.png"}
        description={
          "Melhore o controle de veículos da sua operação, reduza custos, saiba onde estão seus carros e garanta que os motoristas estão cumprindo todas as boas práticas de conduta."
        }
        title={"Rastreamento de carros"}
      />
    </aside>
    {/* <aside>
      <QuantityDetailsUsers />
    </aside> */}
  </section>
);

export default SectionOne;
