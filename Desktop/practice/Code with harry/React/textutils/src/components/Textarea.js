import { useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [at, setAt] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text)
  };
  const handleCont = (event) => {
    setFind(event.target.value);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);

    text.length !== 0
      ? props.handleAlert("The text is converted to Upper Case", "success")
      : props.handleAlert("Enter text to covert it to Upper Case", "danger");
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    text.length !== 0
      ? props.handleAlert("The text is converted to Lower Case", "success")
      : props.handleAlert("Enter text to covert it to Lower Case", "danger");
  };
  const handleClearClick = () => {
    setText("");

    text.length !== 0
      ? props.handleAlert("The text is Cleared", "success")
      : props.handleAlert("Enter text to Clear", "danger");
  };
  const handleFind = () => {
    let x = text.split(" ");
    x.forEach((item, index) => {
      item === find && setAt(index + 1);
    });

    setFind("");
  };
  const copyText = () => {
    // let enteredtext = document.getElementById("floatingTextarea2");
    // enteredtext.select();
    // navigator.clipboard.writeText(enteredtext.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    text.length !== 0
      ? props.handleAlert(
          "The text is successfully Copied to the Clipboard",
          "success"
        )
      : props.handleAlert("Enter text to copy it to the Clipboard", "danger");
  };
  const openText = () => {
    if (text.length !== 0) {
      let x = document.querySelector(".content");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    } else props.handleAlert("Enter text in the text area to find", "danger");
  };

  return (
    <div
      className="container"
      style={{
        color:
          (props.mode === "light" && "black") ||
          (props.mode === "dark" && "white") ||
          (props.mode === "success" && "aqua") ||
          (props.mode === "primary" && "red") ||
          (props.mode === "danger" && "yellow") ||
          (props.mode === "warning" && "blue"),
      }}
    >
      <div className="form-floating">
        <textarea
          style={{
            height: "150px",
            width: "50%",
            margin: "auto",
            color: props.mode === "light" ? "black" : "white",
            border:
              props.mode === "light" ? "2px solid black" : "1px solid white",
          }}
          onChange={handleChange}
          value={text}
          className={`form-control text bg-${props.mode}`}
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <div className="btns my-4">
          <button
            type="button"
            className={`btn btn-${props.mode}  mx-1 `}
            onClick={handleUpClick}
          >
            ToUpperCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode}  mx-1 my-1`}
            onClick={handleLoClick}
          >
            ToLowerCase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode}  mx-1 my-1`}
            onClick={handleClearClick}
          >
            ToClear
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode}  mx-1 my-1`}
            onClick={openText}
          >
            Find
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode}  mx-1 my-1`}
            onClick={copyText}
          >
            Copy All
          </button>
        </div>
        <div className="content container" style={{ display: "none" }}>
          <textarea
            className={`bg-${props.mode}`}
            style={{
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "2px solid black" : "1px solid white",
            }}
            onChange={handleCont}
            name="cont"
            id=""
            cols="30"
            rows="02"
            value={find}
          ></textarea>
          <button
            type="button"
            className={`btn btn-${props.mode} my-1`}
            onClick={handleFind}
          >
            Search
          </button>

          <h1>
            The word is at <span style={{ color: "red" }}>{at}</span>
          </h1>
        </div>

        <h5 className="enter-txt my-2">
          {text.length === 0 ? (
            <span style={{ color: "red" }}>
              Please enter text on above textarea to get here
            </span>
          ) : (
            text
          )}
        </h5>
      </div>
      <div style={{ textAlign: "justify" }}>
        <div>
          <h2>Preview</h2>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            total words & {text.length} total letters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read
          </p>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
