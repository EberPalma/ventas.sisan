// * Imports
import PouchDB from "../../scripts/pouchdb.min.js";
import { useState } from "react";

//* Components
import Row from "./row.js";

export default function VentasList() {
  let [ventas, setVentas] = useState([]);

  var db = new PouchDB("ventas");

  let rows = db
    .allDocs({ include_docs: true, descending: true })
    .then((docs) => docs.rows)
    .catch(console.log);
  rows.then((rows) => {
    let list = rows.map((row) => (
      <Row key={row.doc._id} cliente={row.doc.cliente} id={row.doc._id} />
    ));
    setVentas(list);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>{ventas}</tbody>
      </table>
    </div>
  );
}
