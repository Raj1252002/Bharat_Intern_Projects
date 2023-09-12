function convertTemprature(){
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");
    const celsius = parseFloat(celsiusInput.value);

    if(!isNaN(celsius)){
        const fahrenheit = ( celsius*9/5) + 32;
        
        resultElement.textContent = `${celsius} degree celsius is ${fahrenheit.toFixed(2)}degree F`;
    }
    else{
        resultElement.textContent = "Please enter a valid temprature in Celsius";
    }
}