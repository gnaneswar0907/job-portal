import React from "react"
import { Checkbox } from "@fluentui/react"

import { Input } from "components/Input"
import { Button } from "components/Button"
import { useJobContext } from "hooks/context"

import "./styles.css"

const NO_OP = () => {}

export const SearchBox = ({
  handleCheckboxToggle = NO_OP,
  handleLocationChange = NO_OP,
  handleSearchChange = NO_OP,
  handleSearchClick = NO_OP,
}) => {
  const { searchText, location, fullTimeFlag } = useJobContext()
  return (
    <div className="filterContainer">
      <div className="filterOption">
        <Input
          value={searchText}
          prefixIconName="Search"
          placeholder="Filter by title, companies, expertise..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="filterOption">
        <Input
          value={location}
          prefixIconName="MapPin"
          placeholder="Filter by location"
          onChange={handleLocationChange}
        />
      </div>
      <div className="searchButtonContainer">
        <Checkbox
          label="Full Time Only"
          checked={fullTimeFlag}
          onChange={handleCheckboxToggle}
        />
        <Button text="Search" onClick={handleSearchClick} />
      </div>
    </div>
  )
}
