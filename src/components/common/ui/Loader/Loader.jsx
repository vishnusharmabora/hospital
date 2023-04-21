import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      style={{
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        position: "fixed",
        zIndex: "99999999",
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Loader;
