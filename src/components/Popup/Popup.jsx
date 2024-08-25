import "./style.css";

const Popup = (props) => {
  const width = props.size === "wide" ? "900px" : "500px";

  const getFooter = () => {
    if (props.primaryButtonText || props.secondaryButtonText) {
      return (
        <footer className="popup-footer">
          {props.primaryButtonText && (
            <button className="primary" onClick={props.primaryButtonAction}>
              {props.primaryButtonText}
            </button>
          )}
          {props.secondaryButtonText && (
            <button className="secondary" onClick={props.secondaryButtonAction}>
              {props.secondaryButtonText}
            </button>
          )}
        </footer>
      );
    } else {
      <></>;
    }
  };

  return (
    <div className="overlay">
      <div className="popup" style={{ width: width }}>
        <header className="popup-header">This is popup header</header>
        <div className="popup-body">{props.children}</div>
        {getFooter()}
      </div>
    </div>
  );
};

export default Popup;
