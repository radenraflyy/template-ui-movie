import { useState } from "react"
import ButtonCollapse from "../ButtonCollapse"

// eslint-disable-next-line react/prop-types
const LayoutMovie = ({ element }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="box">
      <ButtonCollapse isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && element}
    </div>
  )
}

export default LayoutMovie
