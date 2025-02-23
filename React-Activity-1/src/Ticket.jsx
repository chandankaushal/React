import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <>
      {ticket.map((el, idx) => {
        return <TicketNum num={el} key={idx}></TicketNum>;
      })}
      <br></br>
    </>
  );
}
