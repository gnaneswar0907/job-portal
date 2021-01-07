import React from "react"
import { Checkbox } from "@fluentui/react"

import { Input } from "components/Input"
import { Button } from "components/Button"

import "./styles.css"

export const SearchBox = (props) => {
  return (
    <div className="filterContainer">
      <div className="filterOption">
        <Input
          value=""
          prefixIconName="Search"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div className="filterOption">
        <Input
          value=""
          prefixIconName="MapPin"
          placeholder="Filter by location"
        />
      </div>
      <div className="searchButtonContainer">
        <Checkbox label="Full Time Only" />
        <Button text="Search" />
      </div>
    </div>
  )
}
