function parseCount(n) {
    let parseResult = Number.parseFloat(n);
    if(Number.isNaN(parseResult)) throw new Error("Невалидное значение");
    return parseResult;
}

function validateCount(n){
    
    try{
        return parseCount(n);
    }
    catch(error){
        return error;

    } 
}

class Triangle
{
    constructor(a,b,c)
    {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b + c || b > a + c || c > a + b){
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    get Perimeter() {
        return this.a + this.b + this.c;
    }
    get Area() {
        const p = this.Perimeter * 0.5;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return area;
        
     }  

}

function getTriangle (a, b, c)
 {
     try{
       
        return new Triangle(a, b, c);
     }
     catch (error)
     {
        return {
           get Area() { return "Ошибка! Треугольник не существует" },
        get Perimeter() { return "Ошибка! Треугольник не существует" }
        }
     }
     
 }

