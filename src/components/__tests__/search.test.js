import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mockdata/rescard.json"


global.fetch=jest.fn(()=>{
        return Promise.resolve({
          json:()=>{
            return Promise.resolve(MOCK_DATA)
          }
        })

})

it("should test search component",()=>{

    render(<Body/>)


})