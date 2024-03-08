import React from "react";
import { z } from "zod";
import { faker } from "@faker-js/faker";

import ClientStatistics from "@/components/dashboard/clients/client-statistics";
import { ClientLists } from "@/components/dashboard/clients/client-lists";
import { columns } from "@/components/dashboard/clients/client-lists/columns";
import { clientSchema, client_status } from "@/components/dashboard/types";

function getClients() {
  const data = Array.from({ length: 6 }, () => ({
    id: `#${faker.number.int({ min: 1000, max: 9999 })}`,
    client: {
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      discord_id: `${faker.number.int({ min: 100000000, max: 999999999 })}`,
      discord_display_name: faker.internet.userName(),
      status: faker.helpers.arrayElement(client_status).value,
      role: faker.helpers.arrayElement([
        "SERVER_OWNER",
        "SERVER_ADMIN",
        "SERVER_MOD",
        "DEVELOPER",
        "STAFF",
        "UNKNOWN",
      ]),
      contact_info: {
        discord_server: {
          id: `${faker.number.int({ min: 100000000, max: 999999999 })}`,
          name: faker.internet.domainName(),
          invite_url: faker.internet.url(),
        },
      },
      payment_method: faker.helpers.arrayElement([
        "PAYPAL",
        "STRIPE",
        "GCASH",
        "PAYMAYA",
        "CASH",
      ]),
    },
    orders: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      () => ({
        id: faker.string.uuid(),
        total: faker.number.int({ min: 10, max: 100 }),
        status: faker.helpers.arrayElement([
          "ORDERED",
          "SHIPPED",
          "DELIVERED",
          "CANCELED",
        ]),
        created_at: faker.date.past(),
        product: Array.from(
          { length: faker.number.int({ min: 1, max: 3 }) },
          () => ({
            id: `#${faker.number.int({ min: 1000, max: 9999 })}`,
            price: faker.number.int({ min: 10, max: 50 }),
            stock: faker.number.int({ min: 1, max: 10 }),
          })
        ),
      })
    ),
    plan: faker.helpers.arrayElement(["BASIC", "PREMIUM", "PRO"]),
    balance: faker.number.int({ min: 0, max: 1000 }),
    created_at: faker.date.past(),
    is_blocked: faker.datatype.boolean(),
  }));

	return z.array(clientSchema).parse(data)
}

export default function Page() {
	const clients = getClients();
  return (
    <main className="space-y-8">
      <div className="space-y-4">
        <ClientStatistics />

        <div>
          <ClientLists data={clients} columns={columns} />
        </div>
      </div>
    </main>
  );
}
