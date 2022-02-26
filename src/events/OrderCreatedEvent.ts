import { OrderStatus } from "..";
import { Subjects } from "./Subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
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
