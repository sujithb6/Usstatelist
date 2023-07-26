import { TableCell, styled, TableRow } from "@mui/material";
import '../App.css'

const StyledTableCellInner = styled(TableCell)({
  textAlign: "left",
  borderRight: "1px solid rgba(224, 224, 224, 1)"
});

const TablesCell = ({ row }) => {
  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <StyledTableCellInner>
          <div >
          <img className="image" src={row.Flag} alt="" />
        </div>
        </StyledTableCellInner>
        <StyledTableCellInner >{row.State}</StyledTableCellInner>
        <StyledTableCellInner className="state_abbreviation">{row.Abbreviation}</StyledTableCellInner>
        <StyledTableCellInner className="state_capital">{row.Capital}</StyledTableCellInner>
        <StyledTableCellInner className="state_nickname">{row.State_Nickname}</StyledTableCellInner>
        <StyledTableCellInner className="state_region">{row.Region}</StyledTableCellInner>
        <StyledTableCellInner className="state_area">{row.Area_in_sqmi}</StyledTableCellInner>
        <StyledTableCellInner className="state_population_per_sqmi">{row.Population_per_square_mi}</StyledTableCellInner>
        <StyledTableCellInner className="state_temp">{row.Average_temp_inF}</StyledTableCellInner>
        <StyledTableCellInner className="state_crime_rate">{row.Crime_rate_per_100000_a_year}</StyledTableCellInner>
        <StyledTableCellInner className="state_median_household_income">{row.Median_household_income_in$}</StyledTableCellInner>
        <StyledTableCellInner className="state_average_cost_of_living">{row.Average_cost_of_living}</StyledTableCellInner>
        <StyledTableCellInner className="state_housing_cost">{row.Average_housing_cost_in$}</StyledTableCellInner>
        <StyledTableCellInner className="state_real_value_of_dollar">{row.Value_per_dollar}</StyledTableCellInner>
      </TableRow>
    </>
  );
};

export default TablesCell;
