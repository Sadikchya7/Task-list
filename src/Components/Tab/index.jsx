import "./style.css";
const Tab = ({ config }) => {
  return (
    <div>
      {/* <p>Select filter</p> */}
      <div className="tab">
        {config.map((buttonConfig, index) => {
          return (
            <button onClick={buttonConfig.onClick} key={index}>
              {buttonConfig.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export { Tab };
