import React from "react"
import { TextField, Icon } from "@fluentui/react"

const NO_OP = () => {}

export const Input = ({
  value = "",
  prefixIconName = "",
  onPrefixIconClick = NO_OP,
  placeholder,
  onChange = NO_OP,
  darkMode,
}) => (
  <TextField
    borderless
    value={value}
    onRenderPrefix={() => (
      <span onClick={onPrefixIconClick}>
        <Icon iconName={prefixIconName} />
      </span>
    )}
    styles={{
      field: { backgroundColor: darkMode ? "var(--darkBlue)" : "unset" },
      prefix: { backgroundColor: darkMode ? "var(--darkBlue)" : "unset" },
    }}
    placeholder={placeholder}
    onChange={onChange}
  />
)
