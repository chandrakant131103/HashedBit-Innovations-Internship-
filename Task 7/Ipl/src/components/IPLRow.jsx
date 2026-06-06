function IPLRow({ team }) {
  return (
    <tr>
      <td>{team.No}</td>
      <td>{team.Team}</td>
      <td>{team.Matches}</td>
      <td>{team.Won}</td>
      <td>{team.Lost}</td>
      <td>{team.Tied}</td>
      <td>{team.NRR}</td>
      <td>{team.Points}</td>
    </tr>
  );
}

export default IPLRow;