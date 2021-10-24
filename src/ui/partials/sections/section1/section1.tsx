import Attributes from "@components/informationSections/sessao1/attributes";
import Descriptions from "@components/informationSections/sessao1/descriptions";
import QuantityDetailsUsers from "@components/informationSections/sessao1/quantityDeteils";

const SectionOne = () => (
  <section>
    <Attributes />
    <div className="box_sec1-title" data-aos="fade-up">
      <h3>OUR QUALITY SERVICES</h3>
      <p>
        Who do not know how to pursue pleasure rationally encounter consequences
        that are extremely painful. Nor again is there anyone who loves.
      </p>
    </div>
    <aside className="box-description-section1">
      <Descriptions
        link={"/icondescription/packages.png"}
        description={
          "Packaging is the technology of enclosing or protecting products for distribution, storage, sale, and use."
        }
        title={"Packaging And Storage"}
      />
      <Descriptions
        link={"/icondescription/earth-globe.png"}
        description={
          "We are one of teh worlwide transport company in the world, we provide on time service."
        }
        title={"Worldwide Transport"}
      />
      <Descriptions
        link={"/icondescription/door-to-door.png"}
        description={
          "Technology of enclosing or protecting products for distribution, storage, sale, and use."
        }
        title={"Door to Door delivery"}
      />
      <Descriptions
        link={"/icondescription/road.png"}
        description={
          "Worlwide transport company in the world, we provide on time service through ground."
        }
        title={"Ground Transport"}
      />
    </aside>
    <aside>
      <QuantityDetailsUsers />
    </aside>
  </section>
);

export default SectionOne;
