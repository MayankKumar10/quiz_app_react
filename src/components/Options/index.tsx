import classNames from "classnames";
import "./options.css";

type OptionProps = {
  id: string;
  option: string;
  selection: string;
  type: string;
  answer: string;
  handleOptionChange: (option: string) => void;
};

export function Options({
  id,
  option,
  selection,
  type,
  answer,
  handleOptionChange,
}: OptionProps): JSX.Element {
  const select = option === selection;
  const ans = option === answer;
  const ans1 = option !== answer;

  return (
    <>
      <input
        type="radio"
        id={id}
        name="option"
        checked={type === "quiz" && select}
        onChange={() => handleOptionChange(option)}
      />
      <label
        htmlFor={id}
        className={`col-12 ${classNames(
          type === "result" && select && ans && "correct",
          type === "result" && select && ans1 && "wrong",
          type === "result" && ans && "correct"
        )}`}
      >
        {option}
      </label>
    </>
  );
}
