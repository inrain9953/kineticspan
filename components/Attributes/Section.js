const Sec = ({
  id,
  bg = '',
  pad = 'py-10 md:py-[68px]',
  max = 'max-w-6xl',
  children
}) => (
  <section id={id} className={`${pad} ${bg}`}>
    <div className={`mx-auto px-6 ${max}`}>{children}</div>
  </section>
)

export default Sec
