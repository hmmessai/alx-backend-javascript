export default function createReportObject(employeesList) {
  return {
    allEmployees: employeeList,
    getNumberOfDepartments(employeeList) {
      Object.keys(employeeList).length;
    },
  };
}
