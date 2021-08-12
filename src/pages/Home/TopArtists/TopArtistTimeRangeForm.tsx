import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FC } from "react";
import styled from "styled-components";
import { TimeRange } from "../../../api";

interface Props {
  timeRange: TimeRange;
  setTimeRange: Dispatch<SetStateAction<TimeRange>>;
  setNextTopArtistsURL: Dispatch<SetStateAction<string | null>>;
  setPreviousTopArtistsURL: Dispatch<SetStateAction<string | null>>;
}

const Select = styled.select`
  text-transform: capitalize;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TopArtistTimeRangeForm: FC<Props> = ({
  timeRange,
  setTimeRange,
  setNextTopArtistsURL,
  setPreviousTopArtistsURL,
}) => {
  const timeRangeArray = Object.entries(TimeRange).map((entry) => ({
    key: entry[0].toLowerCase(),
    value: entry[1],
  }));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as TimeRange);
    setNextTopArtistsURL(null);
    setPreviousTopArtistsURL(null);
  };

  return (
    <form action="#">
      <Label>
        <p>Time frame:</p>
        <Select
          onChange={handleChange}
          name="topArtistTimeFrame"
          id="topArtistTimeFrame"
          defaultValue={timeRange}
        >
          {timeRangeArray.map(({ key, value }, index) => {
            return (
              <option key={index} value={value}>
                {key}
              </option>
            );
          })}
        </Select>
      </Label>
    </form>
  );
};

export default TopArtistTimeRangeForm;
