'use strict'

var Prestamo = require('../modelos/prestamo.js');


function guardarprestamo(req, res) {
  var today = new Date();
  let prestamo = new Prestamo()
  prestamo.libro = req.body.idlibro
  prestamo.persona = req.body.idpersona
  prestamo.fecha = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  prestamo.save((err, prestamostore) => {
    res.status(200).send({prestamo: prestamostore})
  })

}

function mostrar(req, res) {
  let Datolibro=[]
  Prestamo.find()
    .populate('persona')
    .populate('libro')
    .exec((err, libroconpersona) => {
      libroconpersona.forEach(element =>{
          Datolibro.push({
            nombre_del_libro: element.libro.nombre,
            nombre_persona: element.persona.nombre,
            fecha: element.fecha
          })
      })
      res.status(200).send({prestamo: Datolibro})
    })
} 

function prestamopersona(req,res)
{
 
 Prestamo.find()
 .populate('libro')
 .populate({
   path:'persona',
   select:'nombre',
 })
  .exec((err, resultado) => {
    let final  = resultado.filter(item=> item.persona !=null);
    res.status(200).send({ resultado })
 })

}


module.exports = {
  guardarprestamo,
  mostrar,
  prestamopersona,
};