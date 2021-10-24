const Descriptions = ({ link, title, description }) => (
  <div className="box_descriptions-component" data-aos="fade-up">
    <img src={link} alt={title} title={title} />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Descriptions;
