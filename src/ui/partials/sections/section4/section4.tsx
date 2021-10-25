const SectionFour = () => (
  <section id="equipe" className="box-sessaoFour">
    <h3>CONHEÇA NOSSA EQUIPE DEDICADA</h3>
    <div className="box-grid">
      <AsideJimmy />
      <Tim />
    </div>
  </section>
);
export default SectionFour;

const AsideJimmy = () => (
  <div>
    <h4>Jimmy Morris</h4>
    <h5>Senhor Vice-Presidente</h5>
    <p data-aos="fade-up">
      Quem ama ou persegue ou deseja obter dor de si mesmo, porque é uma dor,
      mas porque ocasionalmente vence, as circunstâncias acontecem labore.
    </p>
  </div>
);

const Tim = () => (
  <div>
    <h4>Tim Caroll</h4>
    <h5>Chefe de Contabilidade</h5>
    <p data-aos="fade-up">
      Denuncie com justa indignação e não goste de homens que são tão enganados
      e desmoralizado pelos encantos do prazer do momento ...
    </p>
  </div>
);
