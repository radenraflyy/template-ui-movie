// eslint-disable-next-line react/prop-types
const Input = ({ values, handleChange, placeholder, typeInput }) => {
  return (
    <input
      className="search"
      type={typeInput}
      placeholder={placeholder}
      value={values}
      onChange={handleChange}
    />
  )
}

export default Input
