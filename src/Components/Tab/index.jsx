import "./style.css";
const Tab = ({ config }) => {
  return (
    <div>
      {/* <p>Select filter</p> */}
      <div className="tab">
        {config.map((buttonConfig) => {
          return (
            <button onClick={buttonConfig.onClick}>{buttonConfig.label}</button>
          );
        })}
      </div>
    </div>
  );
};
export { Tab };
