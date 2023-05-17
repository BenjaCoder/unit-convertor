window.onload = () => {

    const unitInput = document.getElementById("unitInput");
    const convertButton = document.getElementById("convertButton");
    const metersFeetText = document.getElementById("metersFeetText");
    const litersGallonsText = document.getElementById("litersGallonsText");
    const kilogramsPoundsText = document.getElementById("kilogramsPoundsText");

    const metersFeetFactor = 3.28084;
    const litersGallonsFactor = 3.78541;
    const kilogramsPoundsFactor = 2.20462;
    const MAX_B4_EXPONENT = 1000000;

    convertButton.addEventListener("click", () => {
        const inputValue = unitInput.value;
        if (!isNaN(inputValue)) {
            const meters = feetToMeters(inputValue) > MAX_B4_EXPONENT ? feetToMeters(inputValue).toExponential(3) : feetToMeters(inputValue).toFixed(3);
            const feet = metersToFeet(inputValue) > MAX_B4_EXPONENT ? metersToFeet(inputValue).toExponential(3) : metersToFeet(inputValue).toFixed(3);
            metersFeetText.innerText = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;

            const liters = gallonsToLiters(inputValue) > MAX_B4_EXPONENT ? gallonsToLiters(inputValue).toExponential(3) : gallonsToLiters(inputValue).toFixed(3);
            const gallons = litersToGallons(inputValue) > 1000000 ? litersToGallons(inputValue).toExponential(3) : litersToGallons(inputValue).toFixed(3);
            litersGallonsText.innerText = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;

            const kilograms = poundsToKilograms(inputValue) > MAX_B4_EXPONENT ? poundsToKilograms(inputValue).toExponential(3) : poundsToKilograms(inputValue).toFixed(3);
            const pounds = kilogramsToPounds(inputValue) > MAX_B4_EXPONENT ? kilogramsToPounds(inputValue).toExponential(3) : kilogramsToPounds(inputValue).toFixed(3);
            kilogramsPoundsText.innerText = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilograms} kilos`;
        }
        else {
            alert("Please enter a number")
        }
    });

    unitInput.addEventListener("input", () => {
        unitInput.style.width = unitInput.value.length * 26 + "px"
    })

    const metersToFeet = (meters) => {
        return meters * metersFeetFactor;
    }

    const feetToMeters = (feet) => {
        return feet / metersFeetFactor;
    }

    const litersToGallons = (liters) => {
        return liters / litersGallonsFactor;
    }

    const gallonsToLiters = (gallons) => {
        return gallons * litersGallonsFactor;
    }

    const kilogramsToPounds = (kilograms) => {
        return kilograms * kilogramsPoundsFactor;
    }

    const poundsToKilograms = (pounds) => {
        return pounds / kilogramsPoundsFactor;
    }
}