const angka1 = document.getElementById("angka1");
const operasi = document.getElementById("operasi");
const angka2 = document.getElementById("angka2");
const hitung = document.getElementById("hitung");
const hasil = document.getElementById("hasil");

hitung.addEventListener("click", () => {
  const num1 = parseFloat(angka1.value);
  const op = operasi.value;
  let num2;

  if (op === "++" || op === "--") {
    num2 = 0;
  } else {
    num2 = parseFloat(angka2.value);
  }

  let result;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        hasil.textContent = "Error: Pembagian oleh nol!";
        return;
      }
      result = num1 / num2;
      break;
    case "**":
      result = Math.pow(num1, num2);
      break;
    case "%":
      result = num1 % num2;
      break;
    case "++":
      result = num1 + 1;
      break;
    case "--":
      result = num1 - 1;
      break;
    default:
      hasil.textContent = "Error: Operasi tidak valid!";
      return;
  }

  hasil.textContent = `Hasil: ${result}`;
});
