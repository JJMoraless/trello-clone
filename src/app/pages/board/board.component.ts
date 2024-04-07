import { Component } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule],
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
      /* Agrega estilos personalizados para la barra de desplazamiento */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      /* Agrega un efecto hover a la barra de desplazamiento */
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'toDo',
      toDos: [
        {
          id: '1',
          title: 'Get to work',
        },
        {
          id: '2',
          title: 'Pick up groceries',
        },
        {
          id: '3',
          title: 'Go home',
        },
        {
          id: '4',
          title: 'Fall asleep',
        },
      ],
    },
    {
      title: 'doing',
      toDos: [
        {
          id: '5',
          title: 'Get up',
        },
        {
          id: '6',
          title: 'Brush teeth',
        },
      ],
    },
    {
      title: 'done',
      toDos: [
        {
          id: '7',
          title: 'Get up',
        },
        {
          id: '8',
          title: 'Brush teeth',
        },
      ],
    },
  ];

  constructor(
    private dialog: Dialog
  ){}

  drop(event: CdkDragDrop<ToDo[]>) {
    // evento traer informacion de la lista de origen y destino
    // console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      toDos: [],
    });
  }

  dropColumns(event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  onOpenDialogToDo(){
    this.dialog.open(TodoDialogComponent,{
      minWidth: '300px',
      maxWidth: '50%',
    })
  }
}
