
export function Section({title, children, anchor}) {
  return (
    <section id={anchor}>
      <SectionTitle title={title}/>
      {children}
    </section>
  )
}

function SectionTitle(props) {
  return (
    <div className="mt-12 mb-6 px-2 flex w-full flex-col text-center">
      <h2 className="text-3xl leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
        {props.title}
      </h2>
    </div>
  )
}
