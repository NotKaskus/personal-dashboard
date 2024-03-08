type Client = {
	id: string;
	client: {
		name: string;
		avatar: string;
		status: ClientStatus;
		role: ClientRole;
		discord_id?: string;
		discord_display_name?: string;
		contact_info: {
			discord_server: {
				id: string,
				name: string,
				invite_url: string,
			}
		}
		payment_method: string;
	};
	orders: Order[];
	plan: PlanType;
	balance: number;
	created_at: string;
	is_blocked: boolean;
}

type ClientRole = 'SERVER_OWNER' | 'SERVER_ADMIN' | 'SERVER_MOD' | 'SERVER_MEMBER' | 'DEVELOPER' | 'STAFF' | 'PARTNER' | 'SUPPORTER' | 'BOOSTER' | 'NONE' | 'UNKNOWN';

type ClientStatus = 'HOLD' | 'PENDING' | 'DONE' | 'CANCELED';

type PlanType = 'BASIC' | 'PREMIUM' | 'PRO';

type Order = {
	id: string;
	total: string;
	status: OrderStatus;
	created_at: string;
	product: Product[];
}

type OrderStatus = 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELED';

type Product = {
	id: 'DISCORD_BOT' | 'WEBSITE';
	price: string;
	stock: number;
}