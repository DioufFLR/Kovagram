import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";

const Explore = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className='explore-container'>
            <div className="explore-inner_container">
                <h2 className='h3-bold md:h2-bold w-full'>Search Posts</h2>
                <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
                    <img src="/assets/icons/search.svg" alt="search" width={24} height={24}/>
                    <Input
                        type='text'
                        placeholder='Search'
                        className='explore-search'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Explore;