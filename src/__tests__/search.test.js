import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockdata/mocklist.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Rescards from "../rescards";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should test search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const allcards = screen.getAllByTestId("rescardss");

  expect(allcards.length).toBe(20);

  // find search btn
  const btn = screen.getByRole("button", { name: "search" });

  //find search input by passing  test id

  const searchinput = screen.getByTestId("searchbtn");

  // change input value and get that value

  fireEvent.change(searchinput, { target: { value: "pizzas" } });

  // click search button

  fireEvent.click(btn);

  // after clciking what we see in screen or find in screen get all cards by passing test id

  const cards = screen.getAllByTestId("rescardss");

  // expect from screen

  expect(cards.length).toBe(2);
});
