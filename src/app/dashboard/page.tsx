import { CreditCard, DollarSign, LineChart, Users } from "lucide-react";
import { z } from "zod";
import { faker } from "@faker-js/faker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  OverviewBar,
  PieChartAnalytics,
  MeetingSchedule,
  type ClientSched
} from "@/components/dashboard/home";

import { ClientOverview } from "@/components/dashboard/home/client-overview";
import {
  clientSchema,
  statuses,
} from "@/components/dashboard/home/client-overview/data";

// Simulate a database read for tasks.
function getCLients() {
  const data = Array.from({ length: 6 }, () => ({
    id: `#${faker.number.int({ min: 1000, max: 9999 })}`,
    status: faker.helpers.arrayElement(statuses).value,
    client: {
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      discordId: `${faker.number.int({ min: 100000, max: 999999 })}`,
    },
    order: faker.commerce.productName(),
    total: faker.commerce.price(),
  })); // TODO: Fetch Data from db

  return z.array(clientSchema).parse(data);
}

function getClientSchedule() {
  const data = Array.from({ length: 7 }, () => ({
    id: `#${faker.number.int({ min: 1000, max: 9999 })}`,
    client: {
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      discordId: `${faker.number.int({ min: 100000, max: 999999 })}`,
    },
    schedule: {
      start: new Date(faker.date.recent()).toString(),
      end: new Date(faker.date.future()).toString(),
    },
  }));

  return data;
}

const data = {
  anallytics: {
    totalRevenue: {
      value: "$123,123.92",
      percentage: "+10.2%",
    },
    sales: {
      value: "+891",
      percentage: "+10.2%",
    },
    clients: {
      value: "+179",
      percentage: "+91",
    },
    projects: {
      value: "+2466",
      percentage: "+32.2%",
    },
  },
};

export default async function Page() {
  const clients = getCLients();
  const clientSchedule = getClientSchedule();

  return (
    <main className="space-y-8">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Dashboard</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <div className="rounded-full bg-[#16b1ff] w-[2.4rem] h-[2.4rem] items-center justify-center inline-flex">
                <DollarSign size={20} className="text-white" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {data.anallytics.totalRevenue.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {data.anallytics.totalRevenue.percentage} from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <div className="rounded-full bg-[#8c57ff] w-[2.4rem] h-[2.4rem] items-center justify-center inline-flex">
                <CreditCard size={20} className="text-white" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {data.anallytics.sales.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {data.anallytics.sales.percentage} from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients</CardTitle>
              <div className="rounded-full bg-[#56ca00] w-[2.4rem] h-[2.4rem] items-center justify-center inline-flex">
                <LineChart size={20} className="text-white" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {data.anallytics.clients.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {data.anallytics.clients.percentage} since last hour
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Projects Made
              </CardTitle>
              <div className="rounded-full bg-[#ffb400] w-[2.4rem] h-[2.4rem] items-center justify-center inline-flex">
                <Users size={20} className="text-white" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {data.anallytics.projects.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {data.anallytics.projects.percentage} from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <div className="col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <OverviewBar />
              </CardContent>
            </Card>
          </div>

          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Top Installed Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartAnalytics />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <div className="col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Client Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ClientOverview data={clients} />
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <MeetingSchedule data={clientSchedule} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
