import "./Loading.css";

const Loading = () => {
  return (
    <div className="ui-abstergo" style={{ marginTop: 20 }}>
      <div className="abstergo-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="ui-text">
        Synchronization
        <div className="ui-dot"></div>
        <div className="ui-dot"></div>
        <div className="ui-dot"></div>
      </div>
    </div>
  );
};

export default Loading;
