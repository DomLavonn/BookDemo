import React, {useState} from "react";
import Book from "../models/Book";

type ABook = {
     arr: Book[],
     changeBookName: ( id: number ) => void
     changeLogin:() => void,
     isLoggedIn: boolean

    //  id: number;
    //  name: string;
    //  img: string;
    //  quantity: number;
    //  price: number;
}

// Book context
const BookStore = React.createContext<ABook>({
     arr: [],
     changeBookName: () => {},
     changeLogin:() =>{},
     isLoggedIn: false

})


export const BookStoreProvider:React.FC = (props) => {
  let bdArr =   [ 
        new Book(1, "Name 1", "src", 99, 33), 
        new Book(2, "Name 2", "src", 44, 12), 
        new Book(3, "Name 3", "src", 44, 100), 
        new Book(4, "Name 4", "src", 22, 55)
    ]



    const [arr, setArr] = useState<Book[]>(bdArr)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const ChangeNameHandler = (id: number) => {
           
        setArr( (prevState) => {
             return prevState.filter( item => item.getId() == id)
        } )

        //    setArr( (prevState) => {
        //          prevState.map(item  => { if (item.getId() == prevState[id].getId() ){
        //                     item.setName("Changed from function ")
        //            }
        //            }
                    
        //        )
        //    }
        //    )

        }
    
        const changeLog = ()=> {
            setIsLoggedIn(true)
        }
        
        
    


    let bookCtx:ABook = {
        arr: arr,
        changeBookName: ChangeNameHandler,
        changeLogin: changeLog,
        isLoggedIn: isLoggedIn
    }

    return <BookStore.Provider value={bookCtx}>
         {props.children}

    </BookStore.Provider>


}


export default BookStore

