import Heade from "./styles"
import logo from "../../assets/logo.svg"
import { useState } from "react"


export const Header = ({children,setSearch}) => {
    const [valueSearch,setSearchValue] = useState("");

    function submit(event){
        event.preventDefault();
        setSearch(valueSearch);
        setSearchValue("");
    }

return (
    <>
        <Heade>
            <img src={logo} />

            <form onSubmit={submit}>
                <input type="text" value={valueSearch} onChange={(event)=> setSearchValue(event.target.value)} placeholder="Digitar Pesquisa" />
               {children}

            </form>
        </Heade>

    </>


    )
}