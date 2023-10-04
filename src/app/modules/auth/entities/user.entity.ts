export interface User {
  id_usuario: number;
  correo_electronico: string;
  contrasena: string;
  correo_confirmado: number;
  nombre_operacion_prueba: string;
  periodo_prueba: number;
  auth_strategy: string;
  inicio_prueba: Date;
  fin_prueba: Date;
  estatus: number;
  fecha_alta: Date;
  fecha_baja: Date;
  //suscriptor: Suscriptor;
}
