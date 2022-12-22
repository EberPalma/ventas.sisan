// * Imports
import productosList from "../../scripts/productos.json";

export default function TableFoot(props) {
  return (
    <tr>
      <th className="importe-msg" colSpan={3}>
        Importe total:
      </th>
      <td className="producto-total">{calcTotal(props.rows)}</td>
    </tr>
  );
}
