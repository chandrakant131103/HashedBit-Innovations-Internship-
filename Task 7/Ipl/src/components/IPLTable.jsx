import IPLRow from "./IPLRow";

function IPLTable({ teams }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        {teams.map((team) => (
          <IPLRow
            key={team.No}
            team={team}
          />
        ))}
      </tbody>
    </table>
  );
}

export default IPLTable;