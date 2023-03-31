import ListProductsCarts, { DivCartsBuy, ValueTotalMoney,Hr } from "./styles";

export const ContainerCarts = ({ children, prop1, prop2, valor }) => {

    return (
        <section name="containerCarts">
            <DivCartsBuy>
                <h3>Carrinho de compras</h3>
            </DivCartsBuy>

            <ListProductsCarts>
                {children}

                {prop1 ? (
                    <>
                        <Hr/>
                        <ValueTotalMoney>
                            <span>Total</span>
                            <p>R$ {valor}</p>
                        </ValueTotalMoney>
                        <button onClick={prop2}>Remover todos</button>
                    </>
                ) : (
                    <>

                    </>
                )}
            </ListProductsCarts>

        </section>
    )
}