import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Checkbox } from "./Checkbox";

// const noop = () => {};

storiesOf("Components", module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  // @ts-ignore
  .add("Checkbox", () => <Checkbox />);
