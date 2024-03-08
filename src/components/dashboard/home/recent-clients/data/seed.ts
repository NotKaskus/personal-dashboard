import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { statuses } from "./data"

const recentOrders = Array.from({ length: 20 }, () => ({
  id: `ORDER-${faker.number.int({ min: 1000, max: 9999 })}`,
  status: faker.helpers.arrayElement(statuses).value,
  client: {
    name: faker.internet.userName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
  },
  order: faker.commerce.productName(),
  total: faker.commerce.price(),
}))

fs.writeFileSync(
  path.join(__dirname, "recentOrders.json"),
  JSON.stringify(recentOrders, null, 2)
)

console.log("✅ Recent orders data generated.")