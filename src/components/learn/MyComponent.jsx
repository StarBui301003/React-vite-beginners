import "./style.css";
const MyComponent = () => {
  const hello = true;
  return (
    <>
      <div>{hello} World</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};
export default MyComponent;
