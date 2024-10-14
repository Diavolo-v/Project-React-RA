import React from "react";
import { useRef, useState } from "react";
function Form() {
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: "white",
    display: "none",
  });
  const input1 = useRef();
  const input2 = useRef();
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");

  const submit = () => {
    if (select === "" || radio === "") {
      return;
    }
    setBoxStyle({
      backgroundColor: radio,
      display: "block",
    });
  };
  const clear = () => {
    input1.current.value = "";
    input2.current.value = "";
    setRadio("");
    setSelect("");

    setBoxStyle({
      backgroundColor: "white",
      display: "none",
    });
  };

  return (
    <div>
      <div>
        <label>
          input 1:
          <input type="text" ref={input1}></input>
        </label>
        <br />
        <label>
          Input2:
          <input type="text" ref={input2}></input>
        </label>
        <br />
        <label>
          select:
          <select onChange={(e) => setSelect(e.target.value)}>
            <option
              value={"GPU"}
            >
              GPU
            </option>
            <option
              value={"CPU"}
            >
              CPU
            </option>
            <option
              value={"RAM"}
            >
              RAM
            </option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radios"
            value={"red"}
            onClick={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          Red
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radios"
            value={"green"}
            onClick={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          Green
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radios"
            value={"blue"}
            onClick={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          Blue
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="radios"
            value={"pink"}
            onClick={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          Pink
        </label>
        <br />
        <input type="button" value={"submit"} onClick={submit}></input>
        <input type="button" value={"clear"} onClick={clear}></input>
      </div>
      <div style={boxStyle}>
        <p>{input1.current?.value}</p>
        <p>{input2.current?.value}</p>
        <p>{select}</p>
      </div>
    </div>
  );
}
export default Form;
