class PrimeNumberGenerator {
    static generatePrimes(limit) {
      const primes = [2];
      let candidate = 3;
  
      while (primes.length < limit) {
        if (this.isPrime(candidate, primes)) {
          primes.push(candidate);
        }
        candidate += 2;
      }
  
      return primes;
    }
  
    static isPrime(candidate, primes) {
      for (const prime of primes) {
        if (prime * prime > candidate) {
          break;
        }
        if (candidate % prime === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  class PrimeNumberPrinter {
    static printPages(primes, rowsPerPage, columnsPerPage) {
      let pageNumber = 1;
      let pageOffset = 0;
  
      while (pageOffset < primes.length) {
        this.printPage(primes, pageNumber, pageOffset, rowsPerPage, columnsPerPage);
        pageNumber++;
        pageOffset += rowsPerPage * columnsPerPage;
      }
    }
  
    static printPage(primes, pageNumber, pageOffset, rowsPerPage, columnsPerPage) {
      console.log(`Page ${pageNumber}`);
      
      for (let rowOffset = pageOffset; rowOffset < pageOffset + rowsPerPage; rowOffset++) {
        const rowPrimes = [];
  
        for (let col = 0; col < columnsPerPage; col++) {
          const index = rowOffset + col * rowsPerPage;
  
          if (index < primes.length) {
            rowPrimes.push(primes[index]);
          }
        }
        
        console.log(rowPrimes.join('|'));
      }
    }
  }
  
  class PrimeNumberApp {
    static main() {
      const limit = 1000;
      const rowsPerPage = 4;
      const columnsPerPage = 4;
  
      const primes = PrimeNumberGenerator.generatePrimes(limit);
      PrimeNumberPrinter.printPages(primes, rowsPerPage, columnsPerPage);
    }
  }
  
  PrimeNumberApp.main();