export default function Row(props) {
  return (
    <tr>
      <td>{props.cliente}</td>
      <td>{props.id}</td>
      <td>Ver</td>
    </tr>
  );
}
