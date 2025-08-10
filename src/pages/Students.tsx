// Layout moved to App-level; this page renders content only.
import { students } from "@/data/students";

const Students = () => {
  const currentStudents = students.filter(student => student.status === 'current');
  const alumni = students.filter(student => student.status === 'alumni');

  return (
    <div className="main-content">
      <div className="section-spacing">
        <h1 className="text-4xl font-bold mb-lg">Students</h1>
        
        {/* Students */}
        <div className="section-spacing">
          <div className="space-y-lg">
            {currentStudents.map((student) => (
              <div key={student.id} className="border-b border-border pb-lg last:border-b-0">
                <div className="flex flex-col space-y-xs">
                  <h3 className="text-lg font-medium">{student.name}</h3>
                  {student.year && (
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: student.year}}></p>
                  )}
                  <p className="text-sm font-medium text-muted-foreground">
                    {student.researchArea}
                  </p>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: student.description}}>
                  </p>
                </div>
              </div>
            ))}
            {alumni.map((student) => (
              <div key={student.id} className="border-b border-border pb-lg last:border-b-0">
                <div className="flex flex-col space-y-xs">
                  <h3 className="text-lg font-medium">{student.name}</h3>
                  {student.position && (
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: student.position}}></p>
                  )}
                  <p className="text-sm font-medium text-muted-foreground">
                    Research: {student.researchArea}
                  </p>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: student.description}}>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship Philosophy */}
        <div className="section-spacing">
          <h2 className="text-2xl font-semibold mb-lg">Mentorship Philosophy</h2>
          <div className="text-base leading-relaxed space-y-md">
            <p>
              I believe in fostering an environment where students can develop both technical 
              expertise and research independence. My approach to mentorship emphasizes 
              collaborative exploration of cutting-edge problems in software engineering and AI, 
              where students are encouraged to take ownership of their research while receiving 
              guidance on methodology, implementation, and academic writing.
            </p>
            <p>
              Each student brings unique perspectives to our research in autonomous coding agents 
              and CodeLLMs. I work closely with them to identify research directions that align 
              with their interests and career goals while contributing to our broader mission of 
              advancing AI-assisted software development. Regular research meetings, code reviews, 
              and involvement in the broader AI and software engineering communities are central 
              to our collaborative approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;