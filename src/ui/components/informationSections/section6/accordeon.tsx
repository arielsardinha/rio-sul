import { useState } from "react";

const Accordeon = () => {
  const [rastreador, setRastreador] = useState(""),
    [gps, setGps] = useState(""),
    [rastreamento, setRastreamento] = useState(""),
    [veiculo, setVeiculo] = useState("");
  return (
    <div className="box-accordeon">
      <div>
        <div
          onClick={() =>
            setRastreador(rastreador === "rastreador" ? "" : "rastreador")
          }
        >
          <Box />
          <p>O que é um rastreador ?</p>
        </div>
        <div className={`${rastreador === "rastreador" ? "active" : ""}`}>
          <p>
            Rastreador é equipamento utilizado em veículos terrestres, aéreos e
            marítimos para monitorar informações logísticas e geográficas, da
            localização do mesmo, seja para fim de segurança de carga valiosa,
            controle de frota ou otimização dos procedimentos logísticos.
          </p>
        </div>
      </div>

      <div>
        <div onClick={() => setGps(gps === "GPS" ? "" : "GPS")}>
          <Box />
          <p>O que é GPS ?</p>
        </div>
        <div className={`${gps === "GPS" ? "active" : ""}`}>
          <p>
            GPS – Sistema de Posicionamento Global, mantido pelo Governo dos
            Estados Unidos, é composto por 24 satélites que estão em órbita e se
            movem constantemente a aproximadamente 20.000 km da superfície da
            terra. Os satélites transmitem para o equipamento (rastreador)
            informações de horário, data, velocidade e posição (longitude e
            latitude) atual.
          </p>
          <p>
            Sermos capazes de fazer o que mais gostamos, todos os prazeres são
            bem-vindos e todas as dores determinadas circunstâncias.
          </p>
        </div>
      </div>

      <div>
        <div
          onClick={() =>
            setRastreamento(
              rastreamento === "rastreamento" ? "" : "rastreamento"
            )
          }
        >
          <Box />
          <p>
            Qual é a área de cobertura do sistema de rastreamento Brasil
            Localize Rastreamento?
          </p>
        </div>
        <div className={`${rastreamento === "rastreamento" ? "active" : ""}`}>
          <p>
            O sistema de rastreamento da Brasil Localize Rastreamento tem
            cobertura GPS em todo o território nacional. Podendo sofrer ausência
            de sinal GPRS de acordo com a cobertura da operadora de telefonia
            móvel a qual contratamos.
          </p>
        </div>
      </div>

      <div>
        <div onClick={() => setVeiculo(veiculo === "veiculo" ? "" : "veiculo")}>
          <Box />
          <p>O Rastreador interfere no sistema eletrônico do veiculo?</p>
        </div>
        <div className={`${veiculo === "veiculo" ? "active" : ""}`}>
          <p>
            Não. A instalação é feita seguindo rigorosas normas técnicas por
            isso não há interferência no sistema elétrico/eletrônico do veículo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;

const Box = () => (
  <div className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-magic"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
    </svg>
  </div>
);
