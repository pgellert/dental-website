export function SectionTitle(props) {
  return (
    <div className="mt-12 mb-6 px-2 flex w-full flex-col text-center">
      <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
        {props.title}
      </h2>

      {
        props.subtitle ?
        <p className="py-4 px-12 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
          {props.subtitle}
        </p>
        :
        <></>
      }
      
    </div>
  )
}
