import React from "react";
import runOperations from "../../helpers/runOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAll,
  updateActions,
  updateValues,
  updateOperations,
  selectActions,
  selectValues,
  selectOperations,
} from "./calculatorSlice";
import { DisplayField } from "./DisplayField";
import { CalculatorButton } from "./CalculatorButton";
import "./style.css";

export const CalculatorPage = () => {
  const dispatch = useDispatch();

  const actions = useSelector(selectActions);
  const values = useSelector(selectValues);
  const operations = useSelector(selectOperations);
  const disableNumbers = values.current.length === 8;

  const onClickHandler = ({ target }) => {
    const { id, classList } = target;
    const btn = classList.value.substring("button".length + 1);

    if (btn === "number") handleNumberClick(id);
    if (btn === "sign") handleSignClick(id);
    if (btn === "all-clear") handleAllClearClick();
    if (btn === "clear") handleClearClick();
    if (btn === "decimal") handleDecimalClick();

    if (btn === "operator") {
      if (id === "equal") {
        handleEqualsClick();
      } else {
        handleOperatorClick(id);
      }
    }
  };

  const handleActionUpdates = (current, type) => {
    dispatch(updateActions({ last: current, current: type }));
  };

  const handleNumberClick = (number) => {
    let current;
    let last;
    if (actions.current !== "number") {
      current = number;
      last = values.current;
      handleActionUpdates(actions.current, "number");
    } else {
      current = `${values.current}${number}`;
      last = values.last;
    }
    dispatch(updateValues({ last, current }));
  };

  const handleOperatorClick = (operator) => {
    if (actions.current) {
      if (actions.current !== "operator") {
        handleActionUpdates(actions.current, "operator");
        dispatch(
          updateOperations({ last: operations.current, current: operator })
        );
        dispatch(
          updateValues({ last: values.current, current: values.current })
        );
      }

      if (actions.current === "operator" && operations.current !== operator) {
        dispatch(
          updateOperations({ last: operations.last, current: operator })
        );
      }

      if (actions.current === "operator" && actions.last === "number") {
				
      }
    }
  };

  const handleEqualsClick = () => {};

  const handleSignClick = (sign) => {};

  const handleDecimalClick = () => {};

  const handleAllClearClick = () => {
    dispatch(resetAll());
  };

  const handleClearClick = () => {};

  return (
    <section className="calculator-container">
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <DisplayField value={values.current} />
            </td>
          </tr>
          <tr className="button-row">
            <td>
              <CalculatorButton
                text={"AC"}
                id={"all-clear"}
                className={"all-clear"}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"C"}
                id={"clear"}
                className={"clear"}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"+/-"}
                id={"sign"}
                className={"sign"}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"\u00F7"}
                id={"divide"}
                className={"operator"}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
          <tr className="button-row">
            <td>
              <CalculatorButton
                text={"9"}
                id={"9"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"8"}
                id={"8"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"7"}
                id={"7"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"x"}
                id={"multiply"}
                className={"operator"}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
          <tr className="button-row">
            <td>
              <CalculatorButton
                text={"6"}
                id={"6"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"5"}
                id={"5"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"4"}
                id={"4"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"-"}
                id={"subtract"}
                className={"operator"}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
          <tr className="button-row">
            <td>
              <CalculatorButton
                text={"3"}
                id={"3"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"2"}
                id={"2"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"1"}
                id={"1"}
                className={"number"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"+"}
                id={"add"}
                className={"operator"}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
          <tr className="button-row">
            <td colSpan="2">
              <CalculatorButton
                text={"0"}
                id={"0"}
                className={"number"}
                wrapperClass={"zero-cell"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"."}
                id={"decimal"}
                className={"decimal"}
                disabled={disableNumbers}
                onClickHandler={onClickHandler}
              />
            </td>
            <td>
              <CalculatorButton
                text={"="}
                id={"equal"}
                className={"operator"}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
