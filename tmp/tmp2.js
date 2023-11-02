function updatefName() {
    // Get the new name from the input field.
    const newName = document.getElementById('fname').value;

    // Update the name on the page.
    document.querySelector('.first-name').textContent = newName;
  }
function updatelName() {
    // Get the new name from the input field.
    const newName = document.getElementById('lname').value;

    // Update the name on the page.
    document.querySelector('.last-name').textContent = newName;
    document.querySelector('.email-val').textContent = document.getElementById('email').value;
    document.querySelector('.phone-val').textContent = document.getElementById('phone').value;
    document.querySelector('.linkedin').textContent = document.getElementById('linkedin').value;
    document.querySelector('.position').textContent = document.getElementById('position').value;
    document.querySelector('.desc').textContent = document.getElementById('postion-desc').value;
    // document.querySelector('.position').textContent = document.getElementById('').value;
    document.querySelector('#c1').textContent = document.getElementById('copmany-name-1').value;
    document.querySelector('#c1addre').textContent = document.getElementById('addc1').value;
    document.querySelector('#c1dur').textContent = document.getElementById('durationc1').value;
    document.querySelector('.name2').textContent = document.getElementById('copmany-name-2').value;
    document.querySelector('.addr2').textContent = document.getElementById('durationc2').value;
    document.querySelector('.duration2').textContent = document.getElementById('duratc2').value;
    document.querySelector('#class10').textContent = document.getElementById('10school').value;
    document.querySelector('#10addr2').textContent = document.getElementById('10address').value;
    // document.querySelector('#10dur').textContent = document.getElementById('').value;
    document.querySelector('#10score').textContent = document.getElementById('10schoolpercent').value;
    document.querySelector('#12').textContent = document.getElementById('12school').value;
    document.querySelector('#12addr').textContent = document.getElementById('12addr').value;
    // document.querySelector('#12dur').textContent = document.getElementById('email').value;
    document.querySelector('#12score').textContent = document.getElementById('12schoolpercent').value;
    document.querySelector('#ug').textContent = document.getElementById('ugschool').value;
    document.querySelector('#ugdur').textContent = document.getElementById('ugaddr').value;
    document.querySelector('#ugadd').textContent = document.getElementById('ugaddr').value;
    document.querySelector('#ugstream').textContent = document.getElementById('ugstream').value;
    document.querySelector('#ugscore').textContent = document.getElementById('ugschoolpercent').value;
    document.querySelector('.email-val').textContent = document.getElementById('email').value;
    document.querySelector('.email-val').textContent = document.getElementById('email').value;
    // document.querySelector('.last-name').textContent = newName;




  }