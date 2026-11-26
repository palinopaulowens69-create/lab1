export interface Note {
 id: string;
 title: string;
 body: string;
 done: boolean;
 createdAt: Date | null;
}




export type NewNote = Pick<Note, 'title' | 'body'>;