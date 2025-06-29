import CreateTransactionDialog from '@/app/(dashboard)/_components/CreateTransactionDialog';
import History from '@/app/(dashboard)/_components/History';
import Overview from '@/app/(dashboard)/_components/Overview';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect('/wizard');
  }

  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="text-3xl font-bold">Hello, {user.firstName}! </p>

          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={'outline'}
                  className="  bg-emerald-500 text-white rounded-xl hover:bg-emerald-400 hover:text-white p-4 text-sm"
                >
                  Add income
                </Button>
              }
              type="income"
            />

            <CreateTransactionDialog
              trigger={
                <Button
                  variant={'outline'}
                  className="border-rose-500 bg-rose-500 text-white hover:bg-rose-400 hover:text-white rounded-xl text-sm p-4"
                >
                  Add expense
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
      <Overview userSettings={userSettings} />
      <History userSettings={userSettings} />
    </div>
  );
}

export default page;
