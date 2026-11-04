import { DISPLAY } from './../../components/UI'

const H3 = ({ children }) => (
  <h3
    className={`${DISPLAY} mb-2.5 text-[1.4rem] font-bold leading-[1.1] tracking-[-0.02em]`}
  >
    {children}
  </h3>
)

export default H3
