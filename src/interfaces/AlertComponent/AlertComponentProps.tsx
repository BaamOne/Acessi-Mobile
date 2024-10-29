export interface AlertComponentProps {
  message: string;
  status: "success" | "error" | "info" | "warning" | "";
  onClose?: () => void; // Callback para fechar o alerta
  timerTimeout?: number | null; // Tempo em milissegundos para fechar o alerta automaticamente
}
