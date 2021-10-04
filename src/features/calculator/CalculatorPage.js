import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAll,
  updateOperations,
  updateValues,
  updateDisableOperator,
  updateOperationQueued,
  selectValues,
  selectCurrentValue,
  selectLastValue,
  selectOperations,
  selectCurrentOperation,
  selectLastOperation,
  selectDisableOperator,
  selectOperationQueued,
} from "./calculatorSlice";
import { DisplayField } from "./DisplayField";
import { CalculatorButton } from "./CalculatorButton";
import "./style.css";

export const CalculatorPage = () => {
  const dispatch = useDispatch();
  const values = useSelector(selectValues);
  const currentValue = useSelector(selectCurrentValue);
  const lastValue = useSelector(selectLastValue);
  const operations = useSelector(selectOperations);
  const currentOperation = useSelector(selectCurrentOperation);
  const lastOperation = useSelector(selectLastOperation);
  const operationQueued = useSelector(selectOperationQueued);
  const disableOperator = useSelector(selectDisableOperator);
  const disableNumbers = currentValue.length === 8;

  const onClickHandler = ({ target }) => {
    const { id, classList } = target;
    const btn = classList.value.substring("button".length + 1);

    if (btn === "number") handleNumberClick(id);
    if (btn === "operator") handleOperatorClick(id);
    if (btn === "sign") handleSignClick(id);
    if (btn === "all-clear") handleAllClearClick();
    if (btn === "clear") handleClearClick();
    if (btn === "decimal") handleDecimalClick();
  };

  const handleNumberClick = (number) => {
    console.log(currentValue);
    if (currentValue === "0" || operationQueued) {
      dispatch(updateValues(number));
      dispatch(updateDisableOperator());
      if (operationQueued) {
        dispatch(updateOperationQueued());
      }
    } else {
      dispatch(updateValues(`${currentValue}${number}`));
    }
  };

  const handleOperatorClick = (operator) => {
    dispatch(updateOperations(operator));
    dispatch(updateOperationQueued());
  };

  const handleSignClick = (sign) => {};

  const handleAllClearClick = () => {
    dispatch(resetAll());
  };

  const handleClearClick = () => {};

  const handleDecimalClick = () => {};

  return (
    <section className="calculator-container">
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <DisplayField value={currentValue} />
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
                disabled={disableOperator}
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
                disabled={disableOperator}
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
                id={"minus"}
                className={"operator"}
                disabled={disableOperator}
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
                disabled={disableOperator}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
          <tr className="button-row">
            <td>
              <span></span>
            </td>
            <td>
              <CalculatorButton
                text={"0"}
                id={"0"}
                className={"number"}
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
                disabled={disableOperator}
                onClickHandler={onClickHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
