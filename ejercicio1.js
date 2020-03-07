var factura = {
    empresa:  {
      nombre: "Webmpresa",
      direccion: "Calle soledad 666",
      telefono: 01287653,
      NIF: "BY32",
    },
    cliente: {
        nombre: "", 
        direccion: "",
        telefono: 3242
    },
    detalle: {
        descripcion: "",
        precio: 444,
        cantidad: 3,

    },
    inf: ['importe_total', 'tipo_IVA','forma_pago'],
      
    
  }
  var importe_final = (factura.detalle.cantidad * factura.detalle.precio);
  console.log(factura.inf.splice( 0, 1, importe_final));
  console.log(factura);
  console.log("Importe Final: "+importe_final);
