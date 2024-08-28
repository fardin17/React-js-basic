const CustomInput = ({ label, type, placeholder, register, id, error }) => {
  return (
    <div className="flex items-center gap-3 text-lg">
      <label className="w-40 font-semibold">{label}</label>
      <div>
        <input {...register(id)} type={type} placeholder={placeholder} className="px-4 py-2 rounded-md" />
        {error && <p className="text-red-500 italic text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default CustomInput;
