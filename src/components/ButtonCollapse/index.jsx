// eslint-disable-next-line react/prop-types
const ButtonCollapse = ({isOpen, setIsOpen}) => {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  )
}

export default ButtonCollapse
