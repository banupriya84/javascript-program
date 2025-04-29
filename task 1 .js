function fibonacciSeries(n) {
    const series = [];
    let a = 0, b = 1;
  
    for (let i = 0; i < n; i++) {
      series.push(a);
      const next = a + b;
      a = b;
      b = next;
    }
  
    return series;
  }
  
  const h = 20; 
  console.log(fibonacciSeries(h));
