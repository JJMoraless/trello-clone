import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'boards',
    loadComponent: () =>
      import('./pages/boards/boards.component').then((m) => m.BoardsComponent),
  },
  {
    path: 'board',
    loadComponent: () =>
      import('./pages/board/board.component').then((m) => m.BoardComponent),
  },
];
