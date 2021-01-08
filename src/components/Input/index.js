import React from "react"
import { TextField, Icon } from "@fluentui/react"
import { isEmpty } from "ramda"

import { useWindowSize } from "hooks/useWindowSize"

const NO_OP = () => {}

export const Input = ({
  value = "",
  prefixIconName = "",
  suffixIconName = "",
  onPrefixIconClick = NO_OP,
  placeholder,
  onChange = NO_OP,
  darkMode,
}) => (
  <TextField
    borderless
    value={value}
    onRenderPrefix={() =>
      !isEmpty(prefixIconName) ? (
        <span onClick={onPrefixIconClick}>
          <Icon iconName={prefixIconName} />
        </span>
      ) : (
        <></>
      )
    }
    onRenderSuffix={() =>
      !isEmpty(suffixIconName) ? <Icon iconName={suffixIconName} /> : <></>
    }
    styles={{
      field: { backgroundColor: darkMode ? "var(--darkBlue)" : "unset" },
      prefix: { backgroundColor: darkMode ? "var(--darkBlue)" : "unset" },
      suffix: { backgroundColor: darkMode ? "var(--darkBlue)" : "unset" },
      fieldGroup: { height: useWindowSize()?.width < 641 ? "60px" : "unset" },
    }}
    placeholder={placeholder}
    onChange={onChange}
  />
)
