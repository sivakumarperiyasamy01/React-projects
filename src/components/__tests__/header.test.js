import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import Appstore from "../utils/appstore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

it("should load login button",()=>{
      
      render(
        <BrowserRouter>
        <Provider store={Appstore}>
        <Header/>
        </Provider>
        </BrowserRouter>
      
        )
      
      const findButton= screen.getByRole("button",{name:"login"})

      expect(findButton).toBeInTheDocument()


});

it("should render cart items",()=>{
      
  render(
    <BrowserRouter>
    <Provider store={Appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>
  
    )
  
    // quarru -find something on the screen
  const cart= screen.getByText(/Cart/)

  // assertion expect 

  expect(cart).toBeInTheDocument()


});



it("should load login logout  button",()=>{
      
  render(
    <BrowserRouter>
    <Provider store={Appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>
  
    )
  
  const login= screen.getByRole("button",{name:"login"})

  fireEvent.click(login)

  const logout =screen.getByRole("button",{name:"logout"})

  expect(logout).toBeInTheDocument();
  


});