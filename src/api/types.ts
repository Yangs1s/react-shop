interface Rating{
    rate?:0
    count?:0
}

export interface ItemProps{
    id:number;
    title:string;
    price:number;
    image:string;
    category:string;
    description:string
    rating:Rating
}[]

