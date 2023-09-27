export default function createReportObject(employeesList) {
  return {
    allEmployees: employeeList,
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeeList).length;
    },
  };
}
