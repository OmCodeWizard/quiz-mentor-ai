

const Button = ({text,variant,handleClick}) => {
  return (
    <button onClick={handleClick}
            className={`text-white px-6 py-3 rounded-lg ${
              variant==="primary"
              ?"bg-purple-600 hover:bg-purple-500"
              : "bg-gray-600 hover:bg-gray-500"
            } `}
            >
      {text}
    </button>
  )
}

export default Button
