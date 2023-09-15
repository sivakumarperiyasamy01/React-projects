import { render,screen } from "@testing-library/react"
import Rescards from "../rescards"
import MOCK_DATA from "../mockdata/rescard.json"
import '@testing-library/jest-dom'


it("render rescard with props",()=>{

  render(<Rescards resdata={MOCK_DATA}/>)

const name1= screen.getByText(/Chai Point/);

expect(name1).toBeInTheDocument()


})


