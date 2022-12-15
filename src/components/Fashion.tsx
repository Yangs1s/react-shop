import { ItemProps } from '../api/types'
import { useRecoilValue, useRecoilState } from 'recoil'
import { itemSelector } from '../store/Atom'
import { DarkModeState } from '../store/DarkMode'
import { Link } from 'react-router-dom'

const Fashion = () => {
    const itemList = useRecoilValue<ItemProps[]>(itemSelector)
    const darkMode = useRecoilState<boolean>(DarkModeState)
    const women = "women's clothing"
    const men = "men's clothing"
    return (
        <section
            className={`w-screen h-100 flex flex-col justify-center items-center mt-16 ${
                darkMode[0] ? 'dark' : ''
            }`}
        >
            <h3 className=" mt-10 text-xl">HOME {'>'} Fashion</h3>
            <div className="mt-10 mb-20">
                <h2 className="text-center font-extrabold text-3xl">Fashion</h2>
                <div className=" p-2 grid-cols-4 grid-rows-3 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {itemList.map((item) => {
                        return (
                            <>
                                {item.category === `${women}` && (
                                    <Link to={`/product/${item.id}`}>
                                        <div
                                            key={item.id}
                                            className="border-2 bg-white h-98 sm:rounded-lg my-12 shadow-lg mt-3 md:mt-12"
                                        >
                                            <figure className="flex h-72 rounded-t-lg items-center bg-white justify-center p-20 md:flex">
                                                <img
                                                    src={item.image}
                                                    alt="상품 이미지"
                                                    className="h-40 w-40 md:w-20 md:h-20 lg:w-52 lg:h-52"
                                                />
                                            </figure>
                                            <div className=" h-48 p-3 rounded-b-lg text-white flex text-lg md:text-sm lg:text-lg font-bold flex-col bg-slate-600 ">
                                                <span className="mb-3">{item.title}</span>
                                                <span>{item.price} $</span>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                                {item.category === `${men}` && (
                                    <Link to={`/product/${item.id}`}>
                                        <div
                                            key={item.id}
                                            className="border-2 bg-white h-98 sm:rounded-lg my-12 shadow-lg mt-3 md:mt-12"
                                        >
                                            <figure className="flex h-72 rounded-t-lg items-center bg-white justify-center p-20 md:flex">
                                                <img
                                                    src={item.image}
                                                    alt="상품 이미지"
                                                    className="h-40 w-40 md:w-20 md:h-20 lg:w-52 lg:h-52"
                                                />
                                            </figure>
                                            <div className=" h-48 p-3 rounded-b-lg text-white flex text-lg md:text-sm lg:text-lg font-bold flex-col bg-slate-600 ">
                                                <span className="mb-3">{item.title}</span>
                                                <span>{item.price} $</span>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Fashion
