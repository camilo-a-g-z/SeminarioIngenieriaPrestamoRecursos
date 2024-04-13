export interface TipoRecurso {
  caracteristicas: {
    personas: string,
  };
  descripcion: string;
  horEntSem: {
    fin: string,
    inicio: string
  };
  horFinSem: {
    fin: string,
    inicio: string
  };
  idTRecurso: string;
  nombre: string,
}
