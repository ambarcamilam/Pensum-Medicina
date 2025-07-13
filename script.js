const materias = [
  // Semestre 1
  { nombre: "Biología I", id: "bio1", requiere: [], semestre: 1 },
  { nombre: "Orientación Universitaria", id: "orient", requiere: [], semestre: 1 },
  { nombre: "Química General I", id: "quim1", requiere: [], semestre: 1 },
  { nombre: "Lengua y Literatura I", id: "leng1", requiere: [], semestre: 1 },
  { nombre: "Matemática I", id: "mate1", requiere: [], semestre: 1 },
  { nombre: "Inglés", id: "ing1", requiere: [], semestre: 1 },
  { nombre: "Deporte y Cultura", id: "deporte", requiere: [], semestre: 1 },
  { nombre: "Electiva 1", id: "electiva1", requiere: [], semestre: 1 },

  // Semestre 2
  { nombre: "Biología II", id: "bio2", requiere: ["bio1"], semestre: 2 },
  { nombre: "Química General II", id: "quim2", requiere: ["quim1"], semestre: 2 },
  { nombre: "Lengua y Literatura II", id: "leng2", requiere: ["leng1"], semestre: 2 },
  { nombre: "Matemática II", id: "mate2", requiere: ["mate1"], semestre: 2 },
  { nombre: "Física Básica I", id: "fisica1", requiere: ["mate1"], semestre: 2 },
  { nombre: "Inglés II", id: "ing2", requiere: ["ing1"], semestre: 2 },
  { nombre: "Historia Universal", id: "historia", requiere: [], semestre: 2 },

  // Semestre 3
  { nombre: "Química Orgánica I", id: "qorg1", requiere: ["quim2"], semestre: 3 },
  { nombre: "Ciencia de la Conducta I", id: "conducta1", requiere: [], semestre: 3 },
  { nombre: "Física Básica II", id: "fisica2", requiere: ["fisica1"], semestre: 3 },
  { nombre: "Inglés III", id: "ing3", requiere: ["ing2"], semestre: 3 },
  { nombre: "Ciencias Sociales I", id: "csoc1", requiere: ["historia"], semestre: 3 },
  { nombre: "Electiva 2", id: "electiva2", requiere: [], semestre: 3 },
  { nombre: "Electiva 3", id: "electiva3", requiere: [], semestre: 3 },

  // Semestre 4
  { nombre: "Metodología de la Investigación Científica", id: "metodo", requiere: ["orient"], semestre: 4 },
  { nombre: "Química Orgánica II", id: "qorg2", requiere: ["qorg1"], semestre: 4 },
  { nombre: "Ciencias Sociales II", id: "csoc2", requiere: ["csoc1"], semestre: 4 },
  { nombre: "Electiva 4", id: "electiva4", requiere: [], semestre: 4 },
  { nombre: "Intro a la Anatomía y Fisiología Humana", id: "anat1", requiere: ["bio2"], semestre: 4 },
  { nombre: "Inglés Profesional", id: "ingprof", requiere: ["ing3"], semestre: 4 },
  { nombre: "Ciencia de la Conducta II", id: "conducta2", requiere: ["conducta1"], semestre: 4 }
];
//  Semestre 5
{ nombre: "Historia de la Medicina", id: "histmed", requiere: [], semestre: 5 },
{ nombre: "Embriología y Anatomía Humana", id: "anat2", requiere: ["anat1"], semestre: 5 },
{ nombre: "Histología", id: "histo", requiere: [], semestre: 5 },
{ nombre: "Genética Clínica", id: "genetica", requiere: ["qorg2"], semestre: 5 },
{ nombre: "Destrezas Clínicas I", id: "destreza1", requiere: [], semestre: 5 },
{ nombre: "Intro. Investigación en Ciencias de la Salud", id: "invest1", requiere: ["metodo"], semestre: 5 },

//  Semestre 6
{ nombre: "Destrezas Clínicas II", id: "destreza2", requiere: ["destreza1"], semestre: 6 },
{ nombre: "Bioquímica y Metabolismo Humano", id: "bioq", requiere: ["genetica"], semestre: 6 },
{ nombre: "Fisiología Humana", id: "fisio", requiere: ["anat2"], semestre: 6 },
{ nombre: "Bioestadística y Epidemiología", id: "epidemio", requiere: ["invest1"], semestre: 6 },
{ nombre: "Psicología Clínica", id: "psicoclinica", requiere: [], semestre: 6 },

//  Semestre 7
{ nombre: "Destrezas Clínicas III y Soporte de Vida", id: "destreza3", requiere: ["destreza2"], semestre: 7 },
{ nombre: "Neurociencias", id: "neuro", requiere: ["fisio"], semestre: 7 },
{ nombre: "Farmacología y Toxicología", id: "farma", requiere: ["bioq"], semestre: 7 },
{ nombre: "Introducción a la Patología", id: "patointro", requiere: ["histo"], semestre: 7 },
{ nombre: "Microbiología e Inmunología", id: "microbio", requiere: ["epidemio"], semestre: 7 },

//  Semestre 8
{ nombre: "Electiva Profesional 1", id: "electivaprof1", requiere: [], semestre: 8 },
{ nombre: "Salud Pública y Medicina Preventiva", id: "saludpub", requiere: ["microbio"], semestre: 8 },
{ nombre: "Patología de Sistemas I", id: "pato1", requiere: ["neuro"], semestre: 8 },
{ nombre: "Semiología I", id: "semio1", requiere: ["destreza3"], semestre: 8 },
{ nombre: "Nutrición Clínica", id: "nutri", requiere: ["farma"], semestre: 8 }
//  Semestre 9
{ nombre: "Medicina Tropical y Salud Global", id: "tropical", requiere: ["saludpub"], semestre: 9 },
{ nombre: "Patología de Sistemas II", id: "pato2", requiere: ["pato1"], semestre: 9 },
{ nombre: "Semiología II", id: "semio2", requiere: ["semio1"], semestre: 9 },
{ nombre: "Investigación Clínica", id: "investclinica", requiere: ["tropical"], semestre: 9 },

//  Semestre 10
{ nombre: "Aspectos Éticos y Legales de la Medicina", id: "etica", requiere: ["psicoclinica"], semestre: 10 },
{ nombre: "Curso Integrado en Ciencias Básicas", id: "cicb", requiere: ["pato2"], semestre: 10 },
{ nombre: "Trabajo Profesional I", id: "trab1", requiere: ["investclinica"], semestre: 10 },

//  Semestre 11
{ nombre: "Psiquiatría", id: "psiquiatria", requiere: ["etica"], semestre: 11 },
{ nombre: "Gerencia en Servicios de Salud", id: "gerencia", requiere: [], semestre: 11 },
{ nombre: "Bloque Medicina Interna I", id: "medint1", requiere: ["cicb"], semestre: 11 },
{ nombre: "Bloque Medicina Interna II", id: "medint2", requiere: ["medint1"], semestre: 11 },

//  Semestre 12
{ nombre: "Bloque Quirúrgico", id: "quirurgico", requiere: ["medint2"], semestre: 12 },
{ nombre: "Emergencias y Especialidades Quirúrgicas", id: "emergencias", requiere: ["medint1"], semestre: 12 },
{ nombre: "Dermatología", id: "dermato", requiere: ["patointro"], semestre: 12 },
{ nombre: "Medicina Familiar", id: "fam", requiere: ["gerencia"], semestre: 12 }
//  Semestre 13
{ nombre: "Electiva Profesional 2", id: "electivaprof2", requiere: [], semestre: 13 },
{ nombre: "Ginecología y Obstetricia", id: "gineco", requiere: ["quirurgico"], semestre: 13 },
{ nombre: "Pediatría y Neonatología", id: "pediatria", requiere: ["emergencias"], semestre: 13 },
{ nombre: "Medicina Física y Rehabilitación", id: "rehab", requiere: ["fam"], semestre: 13 },

//  Semestre 14
{ nombre: "Internado de Cirugía y Traumatología", id: "intcirugia", requiere: ["gineco"], semestre: 14 },
{ nombre: "Internado de Psiquiatría", id: "intpsiquiatria", requiere: ["psiquiatria"], semestre: 14 },
{ nombre: "Trabajo Profesional II", id: "trab2", requiere: ["trab1"], semestre: 14 },
{ nombre: "Internado de Gineco-Obstetricia", id: "intgineco", requiere: ["intcirugia"], semestre: 14 },

//  Semestre 15
{ nombre: "Internado de Pediatría", id: "intpediatria", requiere: ["pediatria"], semestre: 15 },
{ nombre: "Internado de Medicina Interna", id: "intmed", requiere: ["intpediatria"], semestre: 15 },

//  Semestre 16
{ nombre: "Internado en Atención Primaria y Salud Familiar", id: "intfam", requiere: ["rehab"], semestre: 16 },
{ nombre: "Internado de Medicina Interna Final", id: "intmedfinal", requiere: ["intmed"], semestre: 16 },
{ nombre: "Trabajo Profesional Final", id: "trabfinal", requiere: ["trab2"], semestre: 16 }

const contenedor = document.getElementById("pensum");

function crearSemestres(materias) {
  const agrupado = {};
  materias.forEach(m => {
    if (!agrupado[m.semestre]) agrupado[m.semestre] = [];
    agrupado[m.semestre].push(m);
  });

  Object.entries(agrupado).forEach(([semestre, lista]) => {
    const sem = document.createElement("div");
    sem.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    sem.appendChild(titulo);

    const box = document.createElement("div");
    box.className = "materias";

    lista.forEach(materia => {
      const btn = document.createElement("div");
      btn.className = "materia bloqueada";
      btn.id = materia.id;
      btn.textContent = materia.nombre;
      btn.dataset.requiere = JSON.stringify(materia.requiere);
      box.appendChild(btn);
    });

    sem.appendChild(box);
    contenedor.appendChild(sem);
  });
}

function actualizarBloqueos() {
  document.querySelectorAll(".materia").forEach(btn => {
    if (btn.classList.contains("aprobada")) return;

    const requisitos = JSON.parse(btn.dataset.requiere);
    const todosAprobados = requisitos.every(reqId =>
      document.getElementById(reqId)?.classList.contains("aprobada")
    );

    if (todosAprobados) {
      btn.classList.remove("bloqueada");
    } else {
      btn.classList.add("bloqueada");
    }
  });
}

contenedor.addEventListener("click", e => {
  if (!e.target.classList.contains("materia")) return;
  if (e.target.classList.contains("bloqueada")) return;

  e.target.classList.toggle("aprobada");
  actualizarBloqueos();
});

crearSemestres(materias);
actualizarBloqueos();
