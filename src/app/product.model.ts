export interface Category {
 id: string
 name: string;

}


export interface Product{
  title: string;
  price: number;
  images:string [];
  id   :string;
  description: string ;
  category: Category ;
}
