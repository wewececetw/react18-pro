function Hello({ person, seatNumbers }) {
  return (
    <div>
      {person.message} {person.name} {person.emoji} {person.seatNumbers}
    </div>
  );
}
export default Hello;
