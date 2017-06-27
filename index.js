var assert=require("assert");
//Ejercicio 1
function sumaNumeros(numInicial,numFinal){
  var objeto ={
    inicio: numInicial,
    fin: numFinal,
    suma: function(){
      var total=0;
      for(var i=this.inicio;i<=this.fin;i++){
        total+=i;
      }
      return total;
    }
  }
  return objeto.suma();
}

//Ejercicio 2
function SuperCoder(nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.mensaje=function(){
    var ocupation=this.ocupacion.toUpperCase();
    var mensajeFinal="";
    if( this.edad>17 && this.genero.toUpperCase()=="FEMENINO" && ( ocupation=="WEB DEVELOPER" || ocupation=="ESTUDIANTE LABORATORIA" )){
      mensajeFinal="You're awesome";
    } else {mensajeFinal="Upsiii";}
    return mensajeFinal;
  }
}

//Ejercicio 3
function objeto(arreglo){
  var propiedad = new Object();
  for(var i in arreglo){
    var j=parseInt(i)+1;
    propiedad["propiedad"+j]=arreglo[i];
  }
  var propiedades=Object.keys(propiedad);
  var resultado=[];
  for(var i in propiedades){
    resultado.push(propiedades[i]+"-->"+arreglo[i]);
  }
  return resultado.join(",");
}

//Ejercicio 4
function Paciente(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.ficha=function(){
  return "Nombre: " + this.nombre + " " + this.apellido + "\nEdad: " + this.edad + "\nPais: " + this.pais;
  }
}


describe("Objetos 2",function(){
  describe("Ejercicio 1",function(){
    it("Prueba de suma de numeros del 1 al 10",function(){
      assert.equal(55,sumaNumeros(1,10));
    });
  });
  describe("Ejercicio 2",function(){
    it("Prueba Tamara de 22, estudiante laboratoria y femenino",function(){
      var tami = new SuperCoder("Tamara",22,"Estudiante Laboratoria","Femenino");
      assert.equal("You're awesome",tami.mensaje());
    });
  });
  describe("Ejercicio 3",function(){
    it ("Prueba para arreglo [6,5,4,3,2,1]",function () {
      assert.equal("propiedad1-->6,propiedad2-->5,propiedad3-->4,propiedad4-->3,propiedad5-->2,propiedad6-->1",objeto([6,5,4,3,2,1]));
    });
  });
  describe("Ejercicio 4",function(){
    it ("Prueba Blanca Perez, de 19, femenino, de Santiago de Chile",function () {
      var blanca = new Paciente("Blanca","Perez",19,"Femenino", "Santiago","Chile");
    assert.equal("Nombre: Blanca Perez"+"\nEdad: 19" +"\nPais: Chile",blanca.ficha());
    });
  });
});
