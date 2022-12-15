import CarouselList from '../Views/CarouselList';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useRecoilValue,useRecoilState } from 'recoil'
import { itemSelector } from '../store/Atom';
import ItemList from './ItemList';
import { DarkModeState } from '../store/DarkMode';

const Home = () => {
    const itemList = useRecoilValue(itemSelector)
    const darkMode = useRecoilState<boolean>(DarkModeState)


    return (
        <section className={`w-screen h-max flex flex-col justify-center items-center ${darkMode[0] ? "dark":""}` }>
            <div className=" h-full bg-slate-100">
                <CarouselList/>
            </div>
            <div className="mt-10">  
                <h2 className="text-center font-extrabold text-3xl">DIGITAL</h2>
                <div className=" grid-cols-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                { itemList.map((item)=>{
                    return(
                    <div className=" w-72 h-full rounded-lg" key={item.id}>
                    {item.category === "electronics" &&
                        <ItemList id={item.id} title={item.title} price={item.price} image={item.image}/>
                    }
                    </div>
                    )
                })}
            </div>
            </div>

           <div>
                <h2 className="text-center font-extrabold text-3xl m-7">FASHION</h2>
                <div className=" grid-cols-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4" >
                    {itemList.map((item)=>{
                        return(
                            <div className="w-72 h-full" key={item.id}>
                                {item.category === "men's clothing" &&
                                    <ItemList id={item.id} title={item.title} price={item.price} image={item.image} />
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className="text-center font-extrabold text-3xl">ACCESSARY</h2>
                <div className="grid-cols-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {itemList.map((item)=>{
                        return(
                        <div className="w-72 h-full" key={item.id}>
                            { item.category === "jewelery" && 
                         <ItemList id={item.id} title={item.title} price={item.price} image={item.image} />
                            }
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Home;