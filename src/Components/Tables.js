import { useState, useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled
} from "@mui/material";
import JSONDATA from "../MOCK_DATA.json";
import { searchContext } from "../Context/Context";
import HeadTable from "./HeadTable";
import TablesCell from "./TablesCell";


const StyledTableCell = styled(TableCell)({
  backgroundColor: "#F5F5F5",
  color: "#000",
  textAlign: "left",
  borderRight: "1px solid rgba(224, 224, 224, 1);"
});

const StickyHeadTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const { searchTerm } = useContext(searchContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <HeadTable />
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ backgroundColor: "#F7F8F9" }}>
            <TableRow>
              <StyledTableCell className="state_flag">Flag</StyledTableCell>
              <StyledTableCell className="state_name">State</StyledTableCell>
              <StyledTableCell className="state_abbreviation">Abbreviation</StyledTableCell>
              <StyledTableCell className="state_capital">Capital</StyledTableCell>
              <StyledTableCell className="state_nickname">State-Nickname</StyledTableCell>
              <StyledTableCell className="state_region">Region</StyledTableCell>
              <StyledTableCell className="state_area">Area (sq mi)</StyledTableCell>
              <StyledTableCell className="state_population_per_sqmi">Population per sq mi (2020)</StyledTableCell>
              <StyledTableCell className="state_average_temp">Average temp (in F)</StyledTableCell>
              <StyledTableCell className="state_crime">Crime(per 100000 people)</StyledTableCell>
              <StyledTableCell className="state_median-household_income">Med.household income (in $)</StyledTableCell>
              <StyledTableCell className="state_average_living_cost">Avg.living costs per year(in $)</StyledTableCell>
              <StyledTableCell className="state_average_housing_cost">Avg.Housing cost (in $)</StyledTableCell>
              <StyledTableCell className="state_real_dollar_value">Approx.Dollar equals (in $)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JSONDATA.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                Object.values(val)
                  .join("")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return false;
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TablesCell row={row} key={index} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 50]}
        component="div"
        count={JSONDATA.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
