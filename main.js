
    const priceToggle = document.getElementById('priceToggle');
    const priceDisplay = document.querySelector('.priceDisplay');
    const priceDisplayYear = document.querySelector('.priceDisplayYear');
    const toggle = document.getElementById('toggle');
    const viewDisplay = document.getElementById("view")
    const monthPrice = [8, 12, 16, 24, 36];
    const viewPer  = ["10K", "50K", "100K", "500K", "1M"];
    // Set initial price display
    viewDisplay.textContent = viewPer[2];
    priceDisplay.textContent =  '$' + monthPrice[2] + '.00';

    // Add input event listener to update price display
    priceToggle.addEventListener('input', function () {
        const selectedPriceIndex = parseInt(priceToggle.value);
        const showPrice = monthPrice[selectedPriceIndex];
        const selectedPrice = '$' + showPrice + '.00';
        priceDisplay.textContent = selectedPrice;

        const selectedView = priceToggle.value;
        const showView = viewPer[selectedView];
        viewDisplay.textContent = showView;
      let value =   this.value * 25;
this.style.background = `linear-gradient(
    to right,
    var(--Soft-Cyan) 0%,
    var(--Soft-Cyan) ${value}%,
    var(--Light-Grayish-Blue) 0%,
    var(--Light-Grayish-Blue) 100%
    )`;

        
        // You can perform additional actions with the selected price here
    });

    // year payment 
priceDisplayYear.textContent = '$' + (monthPrice[2] - (monthPrice[2] * 25)/100) + '.00';
priceToggle.addEventListener('input', function () {
    const selectedPriceIndex = parseInt(priceToggle.value);
    const showPrice =(monthPrice[selectedPriceIndex] - (monthPrice[selectedPriceIndex] * 25)/100) ;
    const selectedPrice = '$' + showPrice + '.00';
    priceDisplayYear.textContent = selectedPrice;

    const selectedView = priceToggle.value;
    const showView = viewPer[selectedView];
    viewDisplay.textContent = showView;
    
    // You can perform additional actions with the selected price here
});


// 
toggle.addEventListener('change', function(){
    if(toggle.checked){
        priceDisplay.style.display= "none";
        priceDisplayYear.style.display= "flex";
    }else{
        priceDisplay.style.display= "flex";
        priceDisplayYear.style.display= "none";
    }
})

