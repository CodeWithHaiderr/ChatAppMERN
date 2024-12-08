import { FaSearch } from "react-icons/fa";


function Search() {
    return (
        <div className='p-4'>
            <form action=''>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <FaSearch/>
            </label>
            </form>
        </div>
    )
}

export default Search