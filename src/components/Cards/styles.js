import styled from "styled-components";

const Cards = styled.li`

    min-width: 240px;
    
    border: 2px solid  var( --color-grey-20);
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    img{
        background-color: var( --color-grey-0);
        width: 100%;
        height: 210px;
    }
    h3{
        margin: 0px;
        margin-left: 10px;
        font-size: var(--font-size-h3);
        font-weight: bold;
    }
    span{
        margin-left: 10px;
        font-size: 0.75rem;
    }
    p{
        margin: 0px;
        margin-left: 10px;
        color: var(--color-primary);
        font-size: var(--font-size-h4);
        font-weight: bold;
    }
    button{
        padding: 10px;
    background-color: var(--color-primary);
    font-family: 'Inter',sans-serif;
    color: var(--color-grey-0);
    border: none;
    border-radius: 8px;
    width: 80px;
    margin: 10px 10px;
    cursor: pointer;
    }
        


`

export default Cards;