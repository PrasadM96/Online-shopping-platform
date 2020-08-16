import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Online shopping/i);
  expect(linkElement).toBeInTheDocument();
});
