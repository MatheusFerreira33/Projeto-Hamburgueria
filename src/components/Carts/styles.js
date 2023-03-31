import styled from "styled-components";

const Cart = styled.li`

    width: 300px;
    background-color: var(--color-grey-0);
    display: flex;
    gap: 10px;

    img{
        background-color: var(--color-grey-20);
        height: 90px;
        border-radius: 8px;
    }
    h3{
        font-size: 20px;
    }
    .box1{
        width: 100%;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        h3{
            width: 113px;
            font-size: 19px;

        }

        button{
            height: 20px;
            background-color: var(--color-grey-0);
            border: none;
            color: var(--color-grey-50);
            cursor: pointer;
        }
    }

`

export default Cart;