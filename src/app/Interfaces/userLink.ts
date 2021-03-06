import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface UserLink {
  title: String,
  url?: String,
  copyText?: String,
  faIcon: IconDefinition,
  label: String
}
