export interface MyNotification {
  title: string;
  message?: string;
  duration?: number; //milliseconds
  type: "success" | "warning" | "error" | "info";
  open?: boolean;
  timestamp?: number;
}
