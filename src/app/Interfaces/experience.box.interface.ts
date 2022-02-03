import {ProjectBox} from "./project-box.interface";

export interface ExperienceBox {
  name: string;
  imageSrc: string;
  imageAlt: string;
  startDate: Date;
  endDate?: Date;
  expTitle: string;
  description: string;
  links?: string[];
  projects?: ProjectBox[];
}
