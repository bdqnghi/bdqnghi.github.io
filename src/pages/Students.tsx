import { students } from "@/data/students";

const Students = () => {
  const currentStudents = students.filter(student => student.status === 'current');
  const alumni = students.filter(student => student.status === 'alumni');

  return (
    <div className="main-content">
      <h1 className="text-2xl font-bold mb-4">Students</h1>

      <div className="divide-y divide-border">
        {currentStudents.map((student) => (
          <div key={student.id} className="py-3 first:pt-0">
            <h3 className="text-sm font-semibold">{student.name}</h3>
            {student.year && (
              <p className="text-xs text-muted-foreground mt-0.5" dangerouslySetInnerHTML={{__html: student.year}}></p>
            )}
            <p className="text-xs font-medium text-muted-foreground mt-0.5">
              {student.researchArea}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5" dangerouslySetInnerHTML={{__html: student.description}}>
            </p>
          </div>
        ))}
        {alumni.map((student) => (
          <div key={student.id} className="py-3">
            <h3 className="text-sm font-semibold">{student.name}</h3>
            {student.position && (
              <p className="text-xs text-muted-foreground mt-0.5" dangerouslySetInnerHTML={{__html: student.position}}></p>
            )}
            <p className="text-xs font-medium text-muted-foreground mt-0.5">
              Research: {student.researchArea}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5" dangerouslySetInnerHTML={{__html: student.description}}>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
