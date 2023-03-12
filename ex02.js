function verificaFibonacci(num) {
    // Iniciando a sequência de Fibonacci
    const fib = [0, 1];
  
    // Calculando a sequência até o número informado
    while (fib[fib.length - 1] < num) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
  
    // Verificando se o número pertence à sequência
    if (fib.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci!`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  // Chamando a função para verificar o número 13
  console.log(verificaFibonacci(13));
