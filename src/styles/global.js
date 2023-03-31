import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

main{
   width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

 body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter',sans-serif;
    font-size: 0.875rem;
 }

 :root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-seconday: #EB5757;
    --color-grey-100:#333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0:#F5F5F5;
    --color-feedback-negative: #E60000;
    --color-feedback-warning: #FFCD07;
    --color-feedback-sucess: #168821;
    --color-feedback-information: #155BCB;
 }

 :root{
    --font-size-h1: 1.625rem;
    --font-size-h2: 1.375rem;
    --font-size-h3: 1.125rem;
    --font-size-h4: 0.875rem;
 }

 .buttonGreen{
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

 .buttonGreen:hover{
    background-color: var(--color-primary-50);
 }


 @media(min-width: 850px){
   main{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 50px;
      flex-wrap: wrap;
      padding: 0px;
      position: relative;
      margin: auto;
     
   }
 }

 @media(min-width: 1000px){
   main{
      width: 90%;
      padding: 10px;
   }
 }
 @media(min-width: 1200px){
   main{
      width: 90%;
   }
 }


`


export default GlobalStyle