export default function Options({ options }) {
    return (
        <div className="sm:w-full md:w-1/2 lg:w-1/3">

            <form>
                {options.map(option => {
                    return (
                        <div key={option.name} className="min-w-full">
                            <h3 className="flex h-16 bg-gray-100 px-3 items-center font-bold">{option.name}</h3>
                            {option.opts.map((opt, i, { length }) => {
                                return (
                                    <div key={opt}>
                                        <div className="flex justify-between items-center h-16 px-3">
                                            <label htmlFor={opt}>{opt}</label>
                                            <input type="checkbox" id={opt} name={opt}
                                                className="h-5 w-5 rounded-sm " />
                                        </div>
                                        {i + 1 != length && <hr className="mx-2" />}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </form>
        </div >
    )
}