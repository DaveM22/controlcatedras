import { OnInit } from '@angular/core';

export interface INewForm extends OnInit {

    Add(): void;

    ReturnToListEvent(): void;

    cancelCreate(): void;

}