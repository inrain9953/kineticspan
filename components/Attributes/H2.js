import { DISPLAY } from './../../components/UI'

const H2 = ({ className = '', children }) => (
  <h2
    className={`${DISPLAY} text-3xl font-bold leading-[1.08] tracking-[-0.02em] md:text-[2.7rem] ${className}`}
  >
    {children}
  </h2>
)

export default H2
