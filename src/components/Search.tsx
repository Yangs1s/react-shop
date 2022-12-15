import { ChangeEvent, FormEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { itemSelector } from '../store/Atom';
import { DarkModeState } from '../store/DarkMode';
import { searchKeywordState, searchListState } from '../store/Search';
import Card from '../Views/Card';



const Search = () => {
    const [searchKeyword,setSearchKeyword] = useRecoilState(searchKeywordState) // 키워드 값
    const [searchList,setSearchList] = useRecoilState(searchListState) // 리스트
    const itemList = useRecoilValue(itemSelector)
    const darkMode = useRecoilValue(DarkModeState)

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault()
        setSearchKeyword(event.target.value.toLowerCase())
    }

    const filterTitle = itemList.filter((keyword) =>{
        return keyword.title.replace(" ","").toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase())
    })
    console.log(filterTitle.length)
    return (
        <>
        <form action="" className="w-[400px]">
            <input 
            id="keyword"
            type="text" 
            className={`w-full h-[50px] rounded-lg bg-slate-400 sm:1/5 md:w-4/5 ${darkMode?"dark-input":"light-input"} p-3`}
            placeholder="Search Items!!"
            onChange={handleChange}
            value={searchKeyword}
            />
            {
            searchKeyword.length > 0 ? 
                <ul className="max-w-[400px] max-h-[250px] absolute top-[70px] right-auto overflow-scroll">
            {filterTitle.slice(0,6).map((item) =>
            <>
                <Card id={item.id} title={item.title} price={item.price}/>
            </>
            )
            }
            </ul>
            : <ul className="hidden"> </ul>
            }
        </form>
        </>
    );
};

export default Search;


