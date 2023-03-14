import { axios } from "../common";
import { useEffect, useState } from "react";
import { Booking } from "../common";
import moment from "moment";
import "../assets/pages/_bookingList.scss";
import { Table, Button } from "react-bootstrap";

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [sortColumn, setSortColumn] = useState<string>("bookingDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/getBookings");
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings: ", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/deleteBooking?id=${id}`);
      const { data } = await axios.get("/getBookings");
      setBookings(data);
    } catch (error) {
      console.error(`Failed to delete booking with ID ${id}: ${error}`);
    }
  };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedBookings = bookings.sort((a, b) => {
    const columnA = a[sortColumn as keyof Booking];
    const columnB = b[sortColumn as keyof Booking];
    if (columnA < columnB) {
      return sortDirection === "asc" ? -1 : 1;
    } else if (columnA > columnB) {
      return sortDirection === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort("bookingDate")}>
            Booking Date{" "}
            {sortColumn === "bookingDate" &&
              (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th onClick={() => handleSort("location")}>
            Booking Location{" "}
            {sortColumn === "location" && (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th onClick={() => handleSort("username")}>
            Booked By{" "}
            {sortColumn === "username" && (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedBookings.map((booking) => (
          <tr key={booking.id}>
            <td>{moment(booking.bookingDate).format("MMMM Do YYYY")}</td>
            <td>{booking.location}</td>
            <td>{booking.username}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(booking.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
