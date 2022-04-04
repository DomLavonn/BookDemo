import React, {useState} from "react";
import Book from "../models/Book";

type ABook = {
     arr: Book[]
     
    //  id: number;
    //  name: string;
    //  img: string;
    //  quantity: number;
    //  price: number;
}

// Book context
const BookStore = React.createContext<ABook>({
     arr: []

})


export const BookStoreProvider:React.FC = (props) => {
  let bdArr =   [ 
        new Book(1, "Name 1", "src", 99, 33), 
        new Book(2, "Name 2", "src", 44, 12), 
        new Book(3, "Name 3", "src", 44, 100), 
        new Book(4, "Name 4", "src", 22, 55)
    ]



    const [arr, setArr] = useState<Book[]>(bdArr)

    let bookCtx:ABook = {
        arr: arr
    }

    return <BookStore.Provider value={bookCtx}>
         {props.children}

    </BookStore.Provider>


}


export default BookStore

