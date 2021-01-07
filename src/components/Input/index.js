import React from "react"
import { TextField, Icon } from "@fluentui/react"

const NO_OP = () => {}

export const Input = ({
  value = "",
  prefixIconName = "",
  onPrefixIconClick = NO_OP,
  placeholder,
  onChange = NO_OP,
}) => (
  <TextField
    borderless
    value={value}
    onRenderPrefix={() => (
      <span onClick={onPrefixIconClick}>
        <Icon iconName={prefixIconName} />
      </span>
    )}
    placeholder={placeholder}
    onChange={onChange}
  />
)
