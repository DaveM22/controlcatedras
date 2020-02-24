import { OnInit, InputDecorator } from '@angular/core';
import { Options } from 'selenium-webdriver/chrome';
import { Input } from '@angular/compiler/src/core';

export interface IListEntityForm<T> extends OnInit {

    Selected: T;

    modoForm: string;

    fillData(): void;

    onAdd(): void;

    updateModoFormNew(modo: string);

    updateModoFormEdit(obj: any): void;

    updateModoFormDelete(obj: any);

    onEdit(entity: T): void;

    data: T[];

    HabilitarABM: boolean;
}