const TestComponent = ({ text, text2, action, acting }) => {
  return (
    <div>
      {text === "1" ? (
        <div>
          The input value is: <strong>{text}</strong> and next value is
          <strong> {text2}</strong>
        </div>
      ) : (
        // <div>EMPTY TEXT</div>
        action && <button onClick={action}>Click me </button>
      )}
      {acting && <button onClick={acting}>Click HERE </button>}
    </div>
  );
};

export { TestComponent };
