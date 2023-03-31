import { useState } from 'react';
import { useEffect } from 'react';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { ContainerCards } from "./components/ContainerCards"
import { ContainerCarts } from './components/ContainerCarts';
import { Cards } from './components/Cards';
import { Carts } from './components/Carts';
import { api } from "./services/api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [listProducts, setProductsList] = useState([]);
  const [ListCarts, setProductsCarts] = useState([]);
  const [value, setValue] = useState(false);
  const [search, setSearch] = useState("");
  const [money, setMoney] = useState(0);


  useEffect(() => {
    async function getProducts() {

      try {
        const response = await api.get("products");
        setProductsList(response.data);

      }
      catch (error) {
        console.log(error);

      }
    }
    getProducts();
  }, [])

  let result = {};

  async function renderSelectProduct(id) {

    const response = await api.get("products");
    result = Array.from(response.data).find(element => {

      if (element.id == parseInt(id)) {

        return element;
      }
    })

    console.log(result);
    ListCarts.map(element => {

      if (element.id == result.id) {
        toast.warning("Esse produto ja tem no carrinho");
        result = [];
      }
    })

    console.log(result);
    setProductsCarts([...ListCarts, result]);
    console.log(ListCarts);
  }

  function deleteCard(id) {


    if (ListCarts.length == 1) {
      setValue(false);
    }

    const result = ListCarts.map((element, index) => {

      if (element.id == parseInt(id)) {

        ListCarts.splice(index, 1);


      } else if (element == 0) {

        ListCarts.splice(index, 1)
      } else {

      }
    })

    setProductsCarts([...ListCarts])
  }

  useEffect(() => {
    console.log("money");
    console.log(ListCarts);

    let soma = ListCarts.reduce((acc, valueAtual) => acc + valueAtual.price, 0);
    console.log(soma);
    setMoney(soma.toFixed(2));


  }, [ListCarts])

  const getValueSearch = listProducts.filter((element) => {

    return search == "" ? false : element.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <>
      <GlobalStyle />


      <Header setSearch={setSearch}>
        <button type="submit" className="buttonGreen">Pesquisar</button>
      </Header>

      <main>
        <ContainerCards name={getValueSearch.length != 0 ? `Você pesquisou por: ${getValueSearch[0].name}` : "" } >
          {getValueSearch.length != 0 ? (
            <>
            
             

              {getValueSearch.map((element, index) => {
               
                return (
                  <>
                  
                    <Cards key={index} img={element.img} name={element.name} category={element.category} price={element.price}>
                      <button key={index} id={element.id} onClick={(e) => [renderSelectProduct(e.target.id), setValue(true)]}>Adicionar</button>
                    </Cards>
                  </>
                )

              })}

            </>
          ) : (
            listProducts.map((element, index) => {
              return (
                <Cards key={index} img={element.img} name={element.name} category={element.category} price={element.price}>
                  <button key={index} id={element.id} onClick={(e) => [renderSelectProduct(e.target.id), setValue(true)]}>Adicionar</button>
                </Cards>
              )
            })
          )}
        </ContainerCards>

        <ContainerCarts prop1={value} prop2={() => [setValue(false), setProductsCarts([])]} valor={money}>

          {value &&

            ListCarts.map((element, index) => {

              if (element != 0) {
                if (value == true) {
                  return (

                    <Carts key={index} img={element.img} name={element.name} category={element.category}>
                      <button key={index} id={element.id} onClick={(e) => deleteCard(e.target.id)}>Remover</button>

                    </Carts>
                  )
                }
              } else {
                ListCarts.splice(index, 1);
              }

            })
            ||
            <>
              <h1>Sua sacola está vazia</h1>
              <span>Adicione itens</span>
            </>


          }

        </ContainerCarts>

        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />

      </main>

    </>
  )
}

export default App
