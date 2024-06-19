function mysteryOperation() {
  const outcome = Math.random();

  if (outcome < 1) {
    console.log("The operation is successful!");
  } else {
    throw new Error("The operation has failed!");
  }
}
const numOfOperationsInYear = 20;
const vacationDaysIfSuccess = 13;
const vacationDaysIfFail = 1;
const vacationDaysOnAttendance = 3;

let vacationDaysEarned = 0;
for (let i = 0; i < numOfOperationsInYear; i++) {
  try {
    mysteryOperation();
    vacationDaysEarned += vacationDaysIfSuccess;
  } catch (error) {
    vacationDaysEarned += vacationDaysIfFail;
  } finally {
    vacationDaysEarned += vacationDaysOnAttendance;
  }
}

console.log(vacationDaysEarned);
