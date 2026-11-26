import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  collection, addDoc, updateDoc, deleteDoc, doc,
  query, orderBy, onSnapshot, serverTimestamp, Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Expense, NewExpense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpensesService {
  private expensesRef = collection(db, 'expenses');

  
  listExpenses(): Observable<Expense[]> {
    const q = query(this.expensesRef, orderBy('createdAt', 'desc'));
    return new Observable<Expense[]>((subscriber) => {
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items = snapshot.docs.map((d) => {
            const data = d.data({ serverTimestamps: 'estimate' });
            const created = data['createdAt'];
            return {
              id: d.id,
              title: data['title'] ?? '',
              amount: Number(data['amount'] ?? 0),
              category: data['category'] ?? '',
              paid: data['paid'] ?? false,
              createdAt: created instanceof Timestamp ? created.toDate() : null,
            } as Expense;
          });
          subscriber.next(items);
        },
        (error) => subscriber.error(error),
      );
      return unsubscribe;
    });
  }

  
  addExpense(e: NewExpense) {
    return addDoc(this.expensesRef, {
      title: e.title.trim(),
      amount: Number(e.amount),
      category: e.category.trim(),
      paid: false,
      createdAt: serverTimestamp(),
    });
  }


  setPaid(id: string, paid: boolean) {
    return updateDoc(doc(db, 'expenses', id), { paid });
  }

  
  deleteExpense(id: string) {
    return deleteDoc(doc(db, 'expenses', id));
  }
}