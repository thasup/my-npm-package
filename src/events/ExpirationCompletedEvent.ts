import { Subjects } from "./Subjects";

export interface ExpirationCompletedEvent {
  subject: Subjects.ExpirationCompleted;
  data: {
    orderId: string;
  };
}
