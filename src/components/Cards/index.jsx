import Card from "./styles"


export const Cards = ({ children,img,name,category,price}) => {

    return (

        <Card>
            <img src={img}/>

            <h3>{name}</h3>
            <span>{category}</span>

            <p>R$ {price}</p>
            {children}

        </Card>
    )
}