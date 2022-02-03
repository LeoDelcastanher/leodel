export interface ProjectBox {
  name: string;
  startDate: Date;
  endDate?: Date;
  imageSrc?: string;
  imageAlt?: string;
  links?: string[];
  description: string;
  extra?: string;
  mainTasks: string[];
  stack: any[];
}
