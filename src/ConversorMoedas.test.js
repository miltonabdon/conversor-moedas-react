import { render, screen } from "@testing-library/react";
import ConversorMoedas from "./ConversorMoedas";
import React from "react";
import ReactDOM from "react-dom";

test("deve rendezirar o componente sem erros", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
