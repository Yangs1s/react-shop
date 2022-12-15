import { Carousel } from 'react-responsive-carousel';
import { FaShopify } from "react-icons/fa"

const ACC_IMG ="https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/6/27/Know_all_about_accessory_designing.webp"
const IPHONE_IMG = "https://post-phinf.pstatic.net/MjAyMjA5MDhfMTMx/MDAxNjYyNjI2NDE1MzA5.DI8BE8NfFOQEHTQPgFzl_tA5sspUsx_EfpriSkSk6oEg.xHkxY5dSLWIubcbzeMTAPBGemi2mxmhwspW_Ji497ncg.PNG/%EC%95%84%EC%9D%B4%ED%8F%B014_%ED%94%84%EB%A1%9C_Dynamic_Island.png?type=w1200"
const FASHION_IMG = "https://storage.heypop.kr/assets/2022/09/15154455/%EC%82%AC%EC%A7%84%EC%9E%90%EB%A3%8C1-%EA%B8%B0%EB%85%B8%EC%8B%9C%ED%83%80-%EB%8B%A4%EC%B9%B4%ED%9E%88%EB%A1%9C-%EC%9C%A0%EB%8B%88%ED%81%B4%EB%A1%9C-%EB%AA%A8%EA%B8%B0%EC%97%85-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%85%8C%EC%9D%BC%EB%A7%81-%EA%B7%B8%EB%A3%B9-%EC%88%98%EC%84%9D-%EA%B2%BD%EC%98%81-%EC%B1%85%EC%9E%84-%EB%B0%8F-%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%B4%9D%EA%B4%84_HEYPOP-2048x1366.jpg"



const CarouselList = () => {
    return (
        <Carousel autoPlay className="h-full" interval={4000} infiniteLoop={true}>
            <div className="w-full h-42 bg-[#001100]">
                <figure className="bg-black w-2/5 m-auto ">
                <img src={IPHONE_IMG} alt="디지털" className="" />
                </figure>
                <div className="absolute left-20 top-80 flex flex-col items-baseline">
                    <h3 className="text-white text-3xl flex font-extrabold left-5"> 최신 폰 구매는 <strong className="flex">
                        <FaShopify/>
                        MYSHOP
                    </strong>에서</h3>
                    <p className="text-yellow-50 text-left text-xl mt-2">IPhone 14pro 판매중</p>
                    <a href="/acc" className=" bg-yellow-500 p-2 text-center flex m-4 rounded-md hover:bg-stone-600">바로가기</a>
                </div>
            </div>
            <div className="w-full h-42">
                <img src={FASHION_IMG} alt="패션" />
                <div className="absolute left-20 top-96 flex flex-col items-baseline">
                    <h3 className="text-slate-700 text-3xl flex font-extrabold left-5">트랜디한 패션은 <strong className="flex">
                        <FaShopify/>
                        MYSHOP
                    </strong>에서</h3>
                    <p className="text-slate-700 text-left text-xl mt-2">맨투맨 할인중</p>
                    <a href="/acc" className=" bg-yellow-500 p-2 text-center flex m-4 rounded-md hover:bg-stone-600">바로가기</a>
                </div>
            </div>
            <div className="w-full h-42">
                <img src={ACC_IMG} alt="패션" />
                <div className="absolute left-20 top-96 flex flex-col items-baseline">
                    <h3 className="text-yellow-50 text-3xl flex font-extrabold left-5" >패션 악세사리는 <strong className="flex">
                        <FaShopify/>
                        MYSHOP
                    </strong>에서</h3>
                    <p className="text-yellow-50 text-left text-xl mt-2">최대 80%까지 할인중</p>
                    <a href="/acc" className=" bg-yellow-500 p-2 text-center flex m-4 rounded-md hover:bg-stone-600">바로가기</a>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselList;