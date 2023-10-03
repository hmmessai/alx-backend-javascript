export default function getStudentIdsSum(list) {
  if (!(list instanceof Array)) {
    return [];
  }

  return list.reduce((accumulator, currentValue) => currentValue.id + accumulator, 0);
}
