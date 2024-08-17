const CustomInput = ({
  label,
  type,
  name,
  placeholder,
  changeHandler,
  value,
}) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
