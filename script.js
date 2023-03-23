const button = document.querySelector("#btn");
button.addEventListener("click",calculateAmount);

const buttonTip=document.querySelector("#addTip");
buttonTip.addEventListener("click",showTip);
function showTip(e){
    e.preventDefault();
    tip.style.display="block";
}
function calculateAmount(e){
    e.preventDefault();
    const taxi =document.querySelector("#taxi").value;
    const people = document.querySelector("#people").value;
    const tip =document.querySelector("#tip").value;
    if(taxi === "" || people ==="" || people<1 ){
        Swal.fire({
            icon: 'Error',
            title: 'Error',
            text: 'Please enter your information!',
            
          })
    }
    let amountPerPerson = taxi/people;
    let tipPerPerson = (taxi*tip)/ people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(1);
    tipPerPerson=tipPerPerson.toFixed(1);
    totalSum=totalSum.toFixed(1);

    document.querySelector("#dividedBill").textContent=amountPerPerson;
    document.querySelector("#dividedTip").textContent=tipPerPerson;
    document.querySelector("#billAndTip").textContent=totalSum;




}