/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Create an employee record from an array of strings
function createEmployeeRecord(employeeArray) {
    const [firstName, familyName, title, payPerHour] = employeeArray;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  // Create an array of employee records from an array of arrays
  function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(employeeArray => createEmployeeRecord(employeeArray));
  }
  
  // Create a time in event
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    return {
      type: "TimeIn",
      hour,
      date
    };
  }
  
  // Create a time out event
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    return {
      type: "TimeOut",
      hour,
      date
    };
  }
  
//   // Calculate the hours worked on a specific date
//   function hoursWorkedOnDate(employeeRecord, date) {
//     const timeInEvents = employeeRecord.timeInEvents.filter(event => event

