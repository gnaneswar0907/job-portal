import React from "react"
import { TextField, Icon } from "@fluentui/react"

export const Input = ({
  value = "",
  prefixIconName = "",
  onPrefixIconClick = () => {},
  placeholder,
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
  />
)
