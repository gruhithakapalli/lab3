const billTotalInput = document.getElementById('bill-total');
const tipPercentageSlider = document.getElementById('tip-percentage');
const tipPercentageValue = document.getElementById('tip-percentage-value');
const tipAmountInput = document.getElementById('tip-amount');
const totalBillInput = document.getElementById('total-bill');

tipPercentageSlider.addEventListener('input', function() {
  const billTotal = parseFloat(billTotalInput.value);
  if (isNaN(billTotal)) {
    alert('Please enter a valid number for the bill total.');
    return;
  }

  const tipPercentage = parseFloat(tipPercentageSlider.value);
  tipPercentageValue.value = `${tipPercentage}%`; // Update tip percentage value

  const tipAmount = billTotal * (tipPercentage / 100);
  const totalBill = billTotal + tipAmount;

  tipAmountInput.value = tipAmount.toFixed(2);
  totalBillInput.value = totalBill.toFixed(2);
});
