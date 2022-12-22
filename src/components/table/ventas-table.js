// * Imports
import productosList from "../../scripts/productos.json";

// * Componentes
import TableRow from "./table-row";
import TableHead from "./table-head";
//import TableFoot from "./table-foot";

export default function VentasTable(props) {
  let rows = props.rows.map((row) => (
    <TableRow
      key={row.key}
      name={row.name}
      cant={row.cant}
      precio={
        productosList.filter((producto) => producto.name == row.name)[0].precio
      }
    />
  ));
  return (
    <div className="ventas-table">
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <th className="importe-msg" colSpan={3}>
              Importe total:
            </th>
            <td className="producto-total">{calcTotal(props.rows)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function calcTotal(prod) {
  let total = 0;
  prod.map((el) => {
    total +=
      el.cant *
      productosList.filter((producto) => producto.name == el.name)[0].precio;
  });

  const format = { style: "currency", currency: "MXN" };
  const nf = new Intl.NumberFormat("es-MX", format);

  return nf.format(total);
}
