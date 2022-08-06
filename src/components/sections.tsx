export function SectionTitle(props){
    return (
        <div className="flex flex-col w-full mt-4 text-center">
          <h3 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {props.title}
          </h3>

          <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {props.subtitle}
          </p>
        </div>
    );
}