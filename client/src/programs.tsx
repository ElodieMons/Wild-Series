import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3310/api/programs");
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data: Program[] = await response.json();
      setPrograms(data);
    };
    fetchPrograms();
  }, []);

  return (
    <>
      <h1>Liste des Séries</h1>
      <section>
        {programs.map((program) => (
          <section key={program.id}>
            <img src={program.poster} alt={program.title} />
            <section>
              <h2>{program.title}</h2>
              <div>
                <p>Pays : {program.country}</p>
                <p>Annéee : {program.year}</p>
              </div>
              <p>{program.synopsis}</p>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

export default Programs;
