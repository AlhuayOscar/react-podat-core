import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});
const List = () => {
  const classes = useStyles();
  const rows = [
    {
      id: 1143155,
      product: "Advanced control systems",
      img: "https://cdn-icons-png.flaticon.com/512/73/73443.png",
      customer: "John Smith",
      date: "1 March",
      amount: 78,
      method: "None",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "VLSI design",
      img: "data:image/png;base64,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",
      customer: "Michael Doe",
      date: "1 March",
      amount: 87,
      method: "Questions 9/10",
      status: "Approved",
    },
    {
      id: 2342353,
      product: "Antennas and propagation",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Internet-icon.svg/2048px-Internet-icon.svg.png",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Couldn't assist class",
      status: "Denied",
    },
    {
      id: 2357741,
      product: "Renewable energy",
      img: "https://cdn-icons-png.flaticon.com/512/3208/3208119.png",
      customer: "Jane Smith",
      date: "1 March",
      amount: 92,
      method: "None",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Robotics and automation systems",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/robot-icon.png",
      customer: "Harold Carol",
      date: "1 March",
      amount: 72,
      method: "Tried hard",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Subject</TableCell>
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Grade</TableCell>
            <TableCell className="tableCell">Commentaries</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>{" "}
              <TableCell
                className={`tableCell ${
                  row.amount > 60 ? classes.green : classes.red
                }`}
              >
                {row.amount}
              </TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
