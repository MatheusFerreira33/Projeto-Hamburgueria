import styled from "styled-components";

const ListProductsCarts = styled.ul`

    background-color: var(--color-grey-0);
    width: 300px;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 16px;
    gap: 30px;
    margin-top: 0px;

    
    h1{
        text-align: center;
        margin: 0px;
        margin-top: 15px;
    }
    span{
        text-align: center;
        
    }

    button{
        border: 1px solid red;
        padding: 16px;
        border-radius: 8px;
        background-color: var(--color-grey-20);
        border: none;
        cursor: pointer;
        color: var(--color-grey-50);
    }
        

    @media(min-width: 850px){
        position: absolute;
        right: 5px;
        top: 65px;
        margin-top: 40px;
        
    }
    
    @media(min-width: 1000px){
        margin-top: 48px;
        
    }

`
export const DivCartsBuy= styled.div`

        width:94%;
        height: 30px;
        display: flex;
        align-items: center;
        color: var(--color-grey-0);
        background-color: var(--color-primary);
        border-radius: 8px 8px 0px 0px;
        padding: 10px;
    

        @media(min-width: 850px){
        width: 311px;
        height: 35px;
        position: absolute;
        right: 5px;
        top: 13px;
        margin-top: 35px;
    }

    @media(min-width: 1000px){
        margin-top: 45px;
        
    }
    
`

export const ValueTotalMoney = styled.div`

    width: 100%;
    margin-top: -5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    

    p{
        color: var(--color-grey-50);
        margin-top: 0px;
    }
    span{
        font-weight: bold;
    }

`
export const Hr = styled.hr`

    width: 100%;
    margin-bottom: 0px;
    background-color: var(--color-grey-50);
`

export default ListProductsCarts;
