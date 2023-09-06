function bubbleSort(array) {
  const length = array.length;
  let check = true;

  while (check) {
    check = false;
    for (let index = 0; index < length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        let num = array[index];
        array[index] = array[index + 1];
        array[index + 1] = num;
        check = true;
      }
    }
  }
}

const myArray = [7, 34, 11, 5, 52, 29, 3];
bubbleSort(myArray);
console.log(myArray);

// Роботу виконав Жир Владислав Владиславович
// Студент групи ІПЗ-14
