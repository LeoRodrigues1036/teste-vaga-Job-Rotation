function gerador_fibonacci(numero){
    var fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    for (var i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }
    return fibonacci
}

var x = gerador_fibonacci(10)

console.log(x)

//Leonardo Rodrigues Desenvolvedor 2023