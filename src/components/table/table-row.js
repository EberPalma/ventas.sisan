// * Imports

export default function TableRow(props) {
  return (
    <tr>
      <td>{props.cant}</td>
      <td>{props.name}</td>
      <td className="producto-precio">{parsePrecio(props.precio)}</td>
      <td className="producto-total">{parseTotal(props.cant, props.precio)}</td>
    </tr>
  );
}

function parsePrecio(precio) {
  const format = { style: "currency", currency: "MXN" };
  const nf = new Intl.NumberFormat("es-MX", format);

  return nf.format(precio);
}

function parseTotal(cant, precio) {
  const format = { style: "currency", currency: "MXN" };
  const nf = new Intl.NumberFormat("es-MX", format);

  return nf.format(cant * precio);
}
