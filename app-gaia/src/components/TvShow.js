import React from "react";
import PropType from "prop-types";

class TvShow extends React.Component {
  render() {
    const { tvShowInfo } = this.props;
    
    return (
      <article>
        <h2>{tvShowInfo.name}</h2>
        <img src={tvShowInfo.image} alt={tvShowInfo.name} />
        <p><strong>Tipo:</strong> {tvShowInfo.genre}</p>
        <p>
          <strong>Descrição:</strong>{" "}
          {tvShowInfo.characters.map((name, index) => (
            <small key={index}>{name} </small>
          ))}
        </p>
        <p>
          <strong>PV:</strong>{" "}
          <small>{tvShowInfo.info.pv} de vida.</small>
        </p>
        <p>
          <strong>PE:</strong>{" "}
          <small>{tvShowInfo.info.pe} de energia.</small>
        </p>
        <p>
          <strong>Dado de vida:</strong>{" "}
          <small>{tvShowInfo.info.dicePV}</small>
        </p>
        <p>
          <strong>Dado de energia:</strong>{" "}
          <small>{tvShowInfo.info.dicePE}</small>
        </p>
        <p>
          <strong>Perícias:</strong>{" "}
          <small>{tvShowInfo.info.skills}</small>
        </p>
        <p>
          <strong>Atributos:</strong>{" "}
          <small>{tvShowInfo.info.attributes}</small>
        </p>
        <p>
          <strong>Raciais do Delahks:</strong>{" "}
          {tvShowInfo.info.raceSkills.map((element, index) => (
            <small key={index}>
              {element.name}
              {element.type}
              {element.params}
              {element.description}
            
            / </small>
          ))}
        </p>
      </article>
    );
  }
}

TvShow.propTypes = {
  tvShowInfo: PropType.shape({
    name: PropType.string,
    image: PropType.string,
    genre: PropType.string,
    info: PropType.shape({
      pv: PropType.number, 
      pe: PropType.number,
      dicePV: PropType.string,
      dicePE: PropType.string,
      skills: PropType.string,
      attributes:PropType.string,
    }),
  }).isRequired
};

export default TvShow;