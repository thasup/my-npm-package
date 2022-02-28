import { Subjects } from "./Subjects";

export interface ProductDeletedEvent {
  subject: Subjects.ProductDeleted;
  data: {
    id: string;
    version: number;
  };
}
