export function SectionTitle(props) {
  return (
    <div className="mt-4 flex w-full flex-col text-center">
      <h3 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
        {props.title}
      </h3>

      <p className="py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
        {props.subtitle}
      </p>
    </div>
  )
}
