import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface UserLink {
  title: string,
  url?: string,
  copyText?: string,
  faIcon: IconDefinition,
  label: string
}
