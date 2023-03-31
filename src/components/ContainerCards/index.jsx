import ProductList from "./styles"


export const ContainerCards = ({ children,name }) => {

    return (
        <section name="containerCards">
            <h1>{name}</h1>
            <ProductList>
                {children}
            </ProductList>

        </section>
    )

}