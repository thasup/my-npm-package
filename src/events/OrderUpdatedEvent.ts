import { OrderStatus } from "..";
import { Subjects } from "./Subjects";

interface cartInterface {
  title: string;
  qty: number;
  image: string;
  price: number;
  discount: number;
  productId: string;
}

export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: Date;
    version: number;
    cart?: Array<cartInterface>;
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
