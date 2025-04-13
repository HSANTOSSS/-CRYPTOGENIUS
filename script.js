fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl')
  .then(response => response.json())
  .then(data => {
    const btcPrice = data.bitcoin.brl;
    const ethPrice = data.ethereum.brl;
    document.getElementById('btc-price').textContent = `R$ ${btcPrice}`;
    document.getElementById('eth-price').textContent = `R$ ${ethPrice}`;
  })
  .catch(error => console.log('Erro ao carregar dados:', error));