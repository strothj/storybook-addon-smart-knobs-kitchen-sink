import React, { SFC } from "react";

interface IProps {
  /** Specifies the id of the checkbox */
  id: string;
  /** Specifies a testid for testing the checkbox */
  testid: string;
  /** The onChange event fires the moment when the value of the element is changed. */
  onChange: () => void;
  /** The onBlur event fires the moment that the element loses focus. */
  onBlur?: () => void;
  /** The onFocus event fires the moment when the element gets focus. */
  onFocus?: () => void;
  /**
   * Specifies a name for the checkbox
   * @default ""
   */
  name?: string;
  /**
   * Specifies a label for the checkbox
   * @default ""
   */
  label?: string;
  /**
   * Specifies the size for the checkbox
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * Sets the checkbox to disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If set to true, the label is before the checkbox
   * @default false
   */
  labelBefore?: boolean;
  /**
   * Specifies the state for the checkbox.
   * @default ""
   */
  state?: "success" | "warning" | "error";
  /**
   * Specifies the value of the checkbox
   * @default ""
   */
  value?: string;
  /**
   * Specifies if the checkbox is checked
   * @default false
   */
  checked?: boolean;
}

/** Checkbox component description text */
export const Checkbox: SFC<IProps> = _props => {
  return <div>Checkbox</div>;
};
