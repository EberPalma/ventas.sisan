// * Imports
import productosList from "../scripts/productos.json";
import { useState } from "react";
import PouchDB from "../scripts/pouchdb.min.js";

// * Components
import Options from "./table/options";
import VentasTable from "./table/ventas-table";

export default function VentasForm() {
  let [productos, setProductos] = useState([]);

  function addRow(e) {
    e.preventDefault();
    let name = document.querySelector("#select-producto").value;
    let cant = parseFloat(document.querySelector("#cant-producto").value);
    setProductos([
      ...productos,
      { name: name, cant: cant, key: productos.length + 1 },
    ]);
    document.querySelector("#cant-producto").value = "";
  }

  let options = productosList.map((producto) => (
    <Options key={producto.id} name={producto.name} />
  ));

  function clearInputs() {
    setProductos([]);
    document.querySelector("#cant-producto").value = "";
    document.querySelector("#cliente-venta").value = "";
  }

  function storeVenta(e) {
    e.preventDefault();
    var db = new PouchDB("ventas");
    var venta = {
      _id: new Date().toISOString(),
      venta: productos,
      cliente: document.querySelector("#cliente-venta").value,
    };
    db.put(venta)
      .then(() => {
        clearInputs();
        alert("Listo");
      })
      .catch(console.log);
    db.changes({
      since: "now",
      live: true,
    }).on("change");
  }

  return (
    <div className="ventas-form">
      <form onSubmit={addRow}>
        <select id="select-producto">{options}</select>
        <input id="cant-producto" type={"number"}></input>
        <button>+</button>
      </form>

      <VentasTable rows={productos} />
      <input id="cliente-venta" type={"text"} placeholder={"Cliente"}></input>
      <button onClick={storeVenta} id="agregar-venta">
        Registrar venta
      </button>
    </div>
  );
}
