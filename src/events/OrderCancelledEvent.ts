import { OrderStatus } from "..";
import { Subjects } from "./Subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: Date;
    version: number;
    paymentMethod: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
    isPaid?: boolean;
    paidAt?: Date;
    isDelivered?: boolean;
    deliveredAt?: Date;
  };
}
