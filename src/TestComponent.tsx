const TestComponent = ({ text, text2, action }) => {
  return (
    <div>
      {text === "1" ? (
        <div>
          The input value is: <strong>{text}</strong> and next value is
          <strong>{text2}</strong>
        </div>
      ) : (
        <div>no text</div>
      )}
      {action && <button onClick={action}>Click me </button>}
    </div>
  );
};

export { TestComponent };
