 // Ambil elemen kalkulator
 const calculator = document.querySelector('.calculator');

 // Ambil elemen tampilan
 const display = document.getElementById('value');

 // Inisialisasi nilai tampilan
 let displayValue = '0';

 // Fungsi untuk memperbarui tampilan
 const updateDisplay = () => {
     display.textContent = displayValue;
 };

 // Fungsi untuk menambahkan angka atau operator pada tampilan
 const appendValue = (input) => {
     if (displayValue === '0') {
         displayValue = input;
     } else {
         displayValue += input;
     }
     updateDisplay();
 };

 // Tambahkan event listener pada tombol-tombol kalkulator
 document.querySelectorAll('.buttons button').forEach(button => {
     button.addEventListener('click', () => {
         const buttonText = button.textContent;

         switch (buttonText) {
             case 'C':
                 displayValue = '0';
                 break;
             case '=':
                 displayValue = eval(displayValue);
                 break;
             default:
                 appendValue(buttonText);
                 break;
         }

         updateDisplay();
     });
 });