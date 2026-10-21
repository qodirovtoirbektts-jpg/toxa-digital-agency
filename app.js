// Cyber Digital Agency Interactive Script
function showToast(msg) {
  const toast = document.getElementById('cyberToast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  const rngBudget = document.getElementById('rngBudget');
  const selIndustry = document.getElementById('selIndustry');
  const lblBudget = document.getElementById('lblBudget');
  const resRevenue = document.getElementById('resRevenue');
  const resProfit = document.getElementById('resProfit');

  function updateSimulator() {
    const budget = parseInt(rngBudget.value);
    const roas = parseFloat(selIndustry.value);

    lblBudget.textContent = '$' + budget.toLocaleString() + ' / oy';

    const revenue = Math.round(budget * roas);
    const profit = Math.round(revenue - budget);

    resRevenue.textContent = '$' + revenue.toLocaleString();
    resProfit.textContent = '$' + profit.toLocaleString();
  }

  if (rngBudget && selIndustry) {
    rngBudget.addEventListener('input', updateSimulator);
    selIndustry.addEventListener('change', updateSimulator);
    updateSimulator();
  }

  const btnLaunch = document.getElementById('btnLaunchCampaign');
  if (btnLaunch) {
    btnLaunch.addEventListener('click', () => {
      showToast('Kiber-kampaniya sozlamalari saqlandi! Strategimiz tez orada aloqaga chiqadi.');
    });
  }
});