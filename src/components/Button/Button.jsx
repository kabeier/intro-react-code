function Button({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-md bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button