export interface Recurso {
  caracteristicas: {
    personas: string;
    description: string;
    ubicacion: string;
  };
  idRecurso: string;
  idTRecurso: string;
  nombre: string;
  prestado: boolean;
}
