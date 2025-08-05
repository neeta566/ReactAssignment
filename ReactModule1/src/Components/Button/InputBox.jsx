function InputBox({label,type='text',value,onChange}){
    return(
        <label>
        {label}
        <input
        className="bg-green-200 text-xl ml-4 color-red py-2 px-4 border border-gray-500 rounded-md-w-full flex-1/2"
        onChange={onChange}
        type={type}
        value={value}
        placeholder={label}
        ></input>
        </label>
    )
}
export default InputBox;