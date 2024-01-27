/* eslint-disable react/prop-types */

function Inputs(props) {
  return (
    <div className={props.divClassName}>
      {props.divClassNameTwo ? (
        <>
          <div className={props.divClassNameTwo}>
            <label htmlFor="price">Maksimum Fiyat:</label>
            <h3 className="total">250000TL </h3>
          </div>
          <div className="input flex">
            <input type="range" min="10000" max="250000" />
            {props.icon}
          </div>
        </>
      ) : (
        <>
          <label className="labels" htmlFor={props.htmlForName}>{props.labelText}</label>
          <div className="input flex">
            <input
              type={props.inputTypeName}
              placeholder={props.placeHolderText}
            />
            {props.icon}
          </div>
        </>
      )}
    </div>
  );
}

export default Inputs;
