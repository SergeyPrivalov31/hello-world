let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        return this.a = +prompt("a?", 0),
               this.b = +prompt("b?", 0);
    }
}

calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );