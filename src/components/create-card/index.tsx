import React from "react";
import { InputContainer, StyledButton } from "./styles";

interface InputBoxProps {
  label: string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = function (props) {
  const { label, className = "" } = props;
  return (
    <input
      style={{ minHeight: "24px", ...props.style }}
      value={props.value}
      type="text"
      aria-label={label}
      className={className}
      placeholder={label}
      onChange={(e) =>
        typeof props?.onChange === "function" && props.onChange(e.target.value)
      }
    />
  );
};

const DetailedInputBox: React.FC<InputBoxProps> = function (props) {
  const { label, className = "" } = props;
  return (
    <textarea
      style={{ minHeight: "48px", ...props.style }}
      value={props.value}
      aria-label={label}
      className={className}
      placeholder={label}
      onChange={(e) =>
        typeof props?.onChange === "function" && props.onChange(e.target.value)
      }
    />
  );
};

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = function (props) {
  const { title, onClick, className = "" } = props;
  return (
    <StyledButton onClick={onClick} className={className}>
      {title}
    </StyledButton>
  );
};

type CardType = "card-group" | "card-item";

interface ComponentProps {
  type: CardType;
  onAddCard: (
    type: CardType,
    data: { title: string; description: string }
  ) => void;
  className?: string;
}
const InputCard: React.FC<ComponentProps> = function (props: ComponentProps) {
  const [inputValues, setInputValues] = React.useState({
    title: "",
    description: "",
  });

  const clearValues = React.useCallback(() => {
    setInputValues({
      title: "",
      description: "",
    });
  }, []);

  let element, title;
  switch (props.type) {
    case "card-item":
      element = (
        <InputContainer>
          <InputBox
            label="Enter title"
            value={inputValues.title}
            onChange={(val) => setInputValues({ ...inputValues, title: val })}
          />
          <DetailedInputBox
            label="Enter the text for this card..."
            value={inputValues.description}
            onChange={(val) =>
              setInputValues({ ...inputValues, description: val })
            }
            style={{ marginTop: "8px" }}
          />
        </InputContainer>
      );
      title = "Add card";
      break;
    case "card-group":
      element = (
        <InputContainer>
          <InputBox
            label="Enter list title"
            value={inputValues.title}
            onChange={(val) => setInputValues({ ...inputValues, title: val })}
          />
        </InputContainer>
      );
      title = "Add List";
      break;
  }
  return (
    <div className={props.className}>
      {element}
      <Button
        title={title}
        onClick={() => {
          props.onAddCard(props.type, inputValues);
          clearValues();
        }}
      />
    </div>
  );
};

export default InputCard;
