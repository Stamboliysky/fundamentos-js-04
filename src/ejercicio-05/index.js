// Ejercicio 5:
class Rectangle {
    constructor(width,heigt){
      this.width = width
      this.heigt = heigt 
    }
    calcularArea() {
        return this.width*this.heigt
    }
}
const rectangle = new Rectangle(5,10)

console.log('Area:', rectangle.calcularArea())


