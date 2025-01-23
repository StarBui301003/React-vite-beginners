import "./style.css";
const MyComponent = () => {
  const hello = [1, 2, 3];
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
