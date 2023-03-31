import styled from "styled-components";

const ProductList = styled.ul`

        list-style: none;
        display: flex;
        padding: 0px;
        overflow-y: scroll;
        width: 330px;
        gap: 25px;
        padding-left: 5px;
        


        @media(min-width: 500px){
                width: 450px;
                
        }

        @media(min-width: 700px){
                width: 600px;
                
        }

        @media(min-width: 850px){
                width: 510px;
                position: absolute;
                top: 0px;
                left: 0px;
                gap: 15px;
                overflow: hidden;
                flex-wrap: wrap;
                margin-top: 50px;
                padding-left: 5px;

        }

        @media(min-width: 1000px){
                width: 600px;
                margin-top: 60px;
                

        }

        @media(min-width: 1200px){
                width: 800px;
                margin-top: 60px;

        }

        

`

export default ProductList;