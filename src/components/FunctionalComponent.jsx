import { useCallback, useContext, useEffect, useState } from "react";
import CounterComponent from "./CounterComponent";
import { CounterContext } from "../context/counter-context";
import CustomInput from "./CustomInput";

function FunctionalComponent() {
  const [totalCountValue, setTotalCountValue] = useState(0);
  const { count } = useContext(CounterContext);
  let buttonNames = ["Counter-1", "Counter-2", "Counter-3"];

  const handleTotalCounter = useCallback(
    () => setTotalCountValue((prev) => prev + 1),
    []
  );
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    if (count === 5) setTheme("dark");
    else setTheme("white");
  }, [count]);
  
  const [formData, setFormData] = useState({
    title: "",
    "title 2": "",
    "title 3": "",
    "title 4": "",
    "title 5": "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`${theme == "dark" ? "bg-blue" : "bg-red"} `}>
      {/* Conditional rendering to display Total Count or a message */}
      {totalCountValue ? (
        <h2>Total Count: {totalCountValue}</h2>
      ) : (
        <h2>No value added</h2>
      )}

      {buttonNames.map((buttonName, index) => (
        <CounterComponent key={index} {...{ handleTotalCounter, buttonName }} />
      ))}
      {formDatas.map((item) => (
        <CustomInput
          key={item.name}
          {...{
            label: item.label,
            type: item.type,
            name: item.name,
            placeholder: item.placeholder,
            changeHandler: inputChangeHandler,
            value: formData[item.name],
          }}
        />
      ))}
    </div>
  );
}

export default FunctionalComponent;

const formDatas = [
  { label: "title 1", type: "text", name: "title", placeholder: "Enter Tile" },
  {
    label: "title 2",
    type: "email",
    name: "title 2",
    placeholder: "Enter Tile",
  },
  {
    label: "title 3",
    type: "text",
    name: "title 3",
    placeholder: "Enter Tile ",
  },
  {
    label: "title 4",
    type: "text",
    name: "title 4",
    placeholder: "Enter Tile",
  },
  {
    label: "title 5",
    type: "text",
    name: "title 5",
    placeholder: "Enter Tile",
  },
];