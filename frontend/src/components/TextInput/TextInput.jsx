const TextInput = ({ name }) => {
  return (
    <div className="relative flex flex-col w-48 h-16">
      <input palceholder="" id={name} type="text" className=" border-b-2 rounded p-2 outline-none focus:border-sky-500 peer"/>
      <label htmlFor={name} className="p-2 flex flex-start top-0 absolute 
      peer-focus:text-xs 
      transition-all peer-focus:-top-3 peer-focus:text-sky-500" >{name}</label>
    </div>
  )
}

export default TextInput;