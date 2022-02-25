import { OrderStatus } from "..";
import { Subjects } from "./Subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    product: {
      id: string;
      title: string;
      price: number;
      image: string;
      colors?: string;
      sizes?: string;
      countInStock: number;
    };
  };
}
