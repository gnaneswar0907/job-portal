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
  const { searchText, location, fullTime, darkMode } = useJobContext()
  return (
    <div
      className="filterContainer"
      style={{
        backgroundColor: darkMode ? "var(--lightBlue)" : "var(--white)",
      }}
    >
      <div
        className="filterOption"
        style={{ borderColor: darkMode ? "#ccc" : "var(--lightGray)" }}
      >
        <Input
          value={searchText}
          prefixIconName="Search"
          placeholder="Filter by title, companies, expertise..."
          onChange={handleSearchChange}
          darkMode={darkMode}
        />
      </div>
      <div
        className="filterOption"
        style={{ borderColor: darkMode ? "#ccc" : "var(--lightGray)" }}
      >
        <Input
          value={location}
          prefixIconName="MapPin"
          placeholder="Filter by location"
          onChange={handleLocationChange}
          darkMode={darkMode}
        />
      </div>
      <div className="searchButtonContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            label=""
            checked={fullTime}
            onChange={handleCheckboxToggle}
            styles={{
              checkbox: { borderColor: darkMode ? "var(--white)" : "black" },
            }}
          ></Checkbox>
          <span
            style={{
              color: darkMode ? "var(--white)" : "unset",
              fontWeight: 600,
              marginLeft: "4px",
            }}
          >
            Full Time Only
          </span>
        </div>
        <Button text="Search" onClick={handleSearchClick} />
      </div>
    </div>
  )
}
