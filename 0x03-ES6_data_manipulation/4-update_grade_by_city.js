export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!(list instanceof Array)) {
    return [];
  }

  const defaultGrade = { grade: 'N/A' };

  return list
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
