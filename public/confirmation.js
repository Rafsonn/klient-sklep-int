document.addEventListener('DOMContentLoaded', () => {
  const orderSummaryElement = document.getElementById('order-summary');
  const lastOrder = JSON.parse(localStorage.getItem('lastOrder') || '{}');
  
  if (lastOrder.items && lastOrder.items.length) {
    // Display order details
    const orderDate = new Date(lastOrder.date);
    const formattedDate = orderDate.toLocaleDateString('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    let summaryHTML = `
      <h2>Szczegóły zamówienia</h2>
      <p>Data: ${formattedDate}</p>
      <div class="order-items">
    `;
    
    lastOrder.items.forEach(item => {
      const price = item.product.price.main + (item.product.price.fractional / 100);
      const subtotal = price * item.quantity;
      const formattedPrice = `${price.toFixed(2).replace('.', ',')} zł`;
      const formattedSubtotal = `${subtotal.toFixed(2).replace('.', ',')} zł`;
      
      summaryHTML += `
        <div class="order-item">
          <div>
            <strong>${item.product.name}</strong> x ${item.quantity}
            <div>${formattedPrice} / szt.</div>
          </div>
          <div>${formattedSubtotal}</div>
        </div>
      `;
    });
    
    const formattedTotal = `${lastOrder.totalPrice.toFixed(2).replace('.', ',')} zł`;
    
    summaryHTML += `
      </div>
      <div class="order-total">
        Łączna kwota: ${formattedTotal}
      </div>
    `;
    
    orderSummaryElement.innerHTML = summaryHTML;
    
    // Clear the cart in localStorage
    localStorage.removeItem('cart');
  } else {
    // If no order data, redirect to home page
    //window.location.href = '/';
  }
});
