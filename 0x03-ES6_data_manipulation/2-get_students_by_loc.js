export default function getStudentsByLocation(list, city) {
  if (!(list instanceof Array)) {
    return [];
  }

  return list.filter((a) => a.location === city);
}
