import BsButton from 'react-bootstrap/Button'

function Button({ children, ...props }) {
  return (
    <BsButton variant="primary" {...props}>
      {children}
    </BsButton>
  )
}

export default Button