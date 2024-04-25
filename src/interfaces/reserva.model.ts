export interface Reserva {
  dia: Date;
  horario: {
    fin: string,
    inicio: string
  };
  idReserva: string;
  idUsuario: string;
}
