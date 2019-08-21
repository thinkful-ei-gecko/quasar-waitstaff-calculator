'use strict';

const STORE = {
  meals: [
    {price: 10.00, 
      taxRate: 0.045, 
      tipPercentage: 0.15, 
      subtotal: 0.0, 
      tip: 0.0}, 
    {price: 10.00, 
      taxRate: 0.045, 
      tipPercentage: 0.15, 
      subtotal: 0.0, 
      tip: 0.0} 
  ],
  tipTotal: 0,
  averageTip: 0
};



// render meal details section of page
function renderMealSection() {
  let formHTML = `
    <form id='js-sale-form'>
      <fieldset>
        <label for='base-price-entry'>Base Meal Price: $
          <input type='number' name='base-price-entry' class='js-base-price-entry' placeholder='' required>
        </label>

        <label for='tax-rate-entry'>Tax Rate: %
          <input type='number' name='rax-rate-entry' class='js-tax-rate-entry' placeholder='' required>
        </label>

        <label for='tip-percent-entry'>Tip Percentage: %
          <input type='number' name='tip-percent-entry' class='js-tip-percent-entry' placeholder='' required>
        </label>
      </fieldset>

      <input type='submit' class='js-submit' value='Submit'></input>
      <input type='submit' class='js-cancel' value='Cancel'></input>
    </form>
  `;

  $('.js-payment-details').html(formHTML);

}

function logPayment() {
  STORE.meals.push();
  const price = $('.js-base-price-entry').val();
  const taxRate = $('.js-tax-rate-entry').val();
  const tipPercentage = $('.js-tip-percent-entry').val();
  const subTotal = price * (1 + (taxRate/100));
  const tip = price * (tipPercentage/100);

  console.log({price,taxRate,tipPercentage,subTotal,tip});
  STORE.meals.push({price,taxRate,tipPercentage,subTotal,tip});

}

// verify boxes are filled and input are numbers
function verifyPaymentDetails() {

}

// 
function handleSubmitPayment() {
  $('.js-payment-details').on('click', '.js-submit', e => {
    $('#js-sale-form').submit(false);
    logPayment();
  });
}

function handleCancelPayment() {
  $('.js-payment-details').on('click', '.js-cancel', e => {
    e.preventDefault();
  });
}



// render 'customer charges' section of page
function renderLastPayment() {
  let paymentTableHTML = `
  <table>
    <tr>
      <td>Subtotal</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Tip</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>0.00</td>
    </tr>
  </table>
`;

}

// render 'my earnings info' section of page
function renderEarningsSection() {
  let earningsHTML = `
  <table>
    <tr>
      <td>Tip Total</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Meal Count</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Average Tip Per Meal</td>
      <td>0.00</td>
    </tr>
  </table>
  `;

}


function main() {
  renderMealSection();
  handleSubmitPayment();
  handleCancelPayment();
}

$(main);