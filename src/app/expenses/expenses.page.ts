import { Component, Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, of } from 'rxjs';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader,
  IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonText,
} from '@ionic/angular';
import { ExpensesService } from '../services/expenses.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [
    FormsModule, DatePipe,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader,
    IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonText,
  ],
})
export class ExpensesPage {
  private expensesService = inject(ExpensesService);

  title = '';
  amount: number | null = null;
  category = '';
  errorMsg = signal('');

  expenses = toSignal(
    this.expensesService.listExpenses().pipe(
      catchError((err: Error) => {
        this.errorMsg.set(err.message);
        return of([] as Expense[]);
      }),
    ),
    { initialValue: [] as Expense[] },
  );

  add() {
    const title = this.title.trim();
    if (!title || this.amount === null || this.amount < 0) return;

    this.expensesService
      .addExpense({ title, amount: this.amount, category: this.category })
      .catch((err: Error) => this.errorMsg.set(err.message));

    this.title = '';
    this.amount = null;
    this.category = '';
  }

  toggle(e: Expense, paid: boolean) {
    this.expensesService.setPaid(e.id, paid)
      .catch((err: Error) => this.errorMsg.set(err.message));
  }

  remove(e: Expense) {
    this.expensesService.deleteExpense(e.id)
      .catch((err: Error) => this.errorMsg.set(err.message));
  }
}