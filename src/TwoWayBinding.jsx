// FileName: TwoWayBinding.jsx

function TwoWayBinding() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1></h1>

      {/* Box 1: Input Field (Source) */}
      <div
        style={{
          margin: "20px",
          border: "1px solid #007bff",
          padding: "15px",
          width: "300px",
        }}
      >
        <h2>Type Here</h2>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{ padding: "10px", width: "100%", fontSize: "16px" }}
        />
      </div>

      {/* <hr style={{ width: "50%" }} /> */}

      {/* Box 2: Display Field (Reflection) */}
      <div
        style={{
          margin: "20px",
          border: "1px solid #28a745",
          padding: "15px",
          width: "300px",
        }}
      >
        <h2></h2>
        <p style={{ fontSize: "18px", fontWeight: "bold", minHeight: "20px" }}>
          {inputText}
        </p>
      </div>
    </div>
  );
}

export default TwoWayBinding;
