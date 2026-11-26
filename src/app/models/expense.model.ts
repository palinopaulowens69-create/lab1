export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  paid: boolean;
  createdAt: Date | null;
}

export type NewExpense = Pick<Expense, 'title' | 'amount' | 'category'>;