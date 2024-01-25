// @ts-ignore
import { UserInfo } from "@services/user/user" ;

export interface ITicket {
    id?: string;
    description: string;
    name: string;
    price: string;
    tourOperator: string;
    location: {
        x: number;
        y: number;
    }
    hotel: string;
}

export interface IVipTicket extends ITicket {
    vipNumber: number;
    vipStatus: string;
}

export type TicketType = ITicket | IVipTicket;

export interface IPostTicketData {
    ticket: TicketType;
    user: UserInfo;
}