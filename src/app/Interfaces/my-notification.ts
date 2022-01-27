export interface MyNotification {
  title: string;
  message?: string;
  duration?: number | boolean; //milliseconds | boolean
  type: "success" | "warning" | "error" | "info";
  open?: boolean;
  timestamp?: number;
}
