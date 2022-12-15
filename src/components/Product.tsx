import { useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ItemProps } from '../api/types';
import { itemSelector } from '../store/Atom';
import { DarkModeState } from '../store/DarkMode';
import AddToCartBtn from './AddToCartBtn';
const Product = () => {
    const params = useParams();
    const itemList = useRecoilValue<ItemProps[] | any>(itemSelector)
    const darkMode = useRecoilState<boolean>(DarkModeState)
    const currentId = Number(Object.values(params)[0])

    

    const stars = (val:number) =>{
        return "⭐️".repeat(val)
    }

    return (
        <section className={`w-screen h-[100vh] flex flex-row justify-center items-center  mt-16 ${darkMode[0] ? 'dark' :'light'}`} >
            <div className="flex p-2  items-center justify-center w-3/6 h-4/6 sm:flex-col md:flex-col lg:flex-row" id="wrapper">
                <figure className="flex items-center bg-white lg:w-[900px] h-3/6 md:w-[400px] rounded-lg justify-center border-[1px] shadow-lg">
                    <img src={`${itemList[currentId-1].image}`} alt="제품 사진" className="w-[400px] md:w-[300px] flex p-12 h-5/6"/>
                </figure>

                <div className="p-10 flex flex-col w-5/6 md:w-full justify-center items-start" id='content'>
                    <h2 className="text-3xl mb-2">   
                        {itemList[currentId-1].title}
                    </h2>
                    <p className="w-5/6 md:w-full text-primary text-sm">
                    {itemList[currentId-1].description}
                    </p>

                    <p className="text-xl mt-2">
                        Price: {itemList[currentId-1].price}$
                    </p>
                    <div className="flex flex-row " id="rating">
                        <span>  
                        {stars(itemList[currentId-1].rating.rate)}
                        {itemList[currentId-1].rating.rate} / 
                        </span>
                        <span>{itemList[currentId-1].rating.count} 참여</span>
                    </div>
                    <div className="bg-orange-400 rounded-lg mt-2">
                        <AddToCartBtn/>
                    </div>
                </div>

            </div>
        </section>
        
    );
};

export default Product;