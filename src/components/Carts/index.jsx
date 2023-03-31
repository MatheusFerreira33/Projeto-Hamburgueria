import Cart from "./styles";


export const Carts = ({img,name,children,category})=>{

    return(

        <Cart>
            <img src={img} />

            <div className="box1">

                <h3>{name}</h3>
                {children}
                <span>{category}</span>

            </div>
        </Cart>
    )
}