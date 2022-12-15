
import { Link } from "react-router-dom";

interface ItemListProps{
  id:number
  image:string
  title:string;
  price:number;
}


const ItemList = ({ id, image, title, price }: ItemListProps) => {
  return (
    <>
      <div key={id} className=" bg-white h-98 border-2 sm:rounded-lg shadow-lg">
        <figure className=" flex h-80 rounded-t-lg bg-white justify-center p-20">
          <Link to={`product/${id}`}>
          <img
            src={image}
            alt="상품 이미지"
            className="h-full rounded-t-lg md:w-full md:h-4/5 lg:w-full lg:h-4/5"
          />
          </Link>
        </figure>
        <div
          className=" h-40 p-2 rounded-b-lg text-white flex text-base font-bold flex-col bg-slate-600"
          key={id}
        >
          <span className="mb-3">{title}</span>
          <span className="text-2xl">{price} $</span>
        </div>
      </div>
    </>
  );
};

export default ItemList;
