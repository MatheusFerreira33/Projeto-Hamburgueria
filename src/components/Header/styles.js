import styled from "styled-components";

const Heade = styled.header`
    max-width: 100%;
    background-color: var(--color-grey-0);
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    
    gap: 10px;

   form{
    border: 1px solid black;
    border-color: var(--color-grey-20);
    background-color: white;
    border-radius: 8px;

    input{
        padding: 10px;
        border: none;
        border-radius:8px 0px 0px 8px;
        font-family: 'Inter',sans-serif;
        z-index: 2;
    }

    input:focus{
        outline: none;
    }
   }
`

export default Heade;