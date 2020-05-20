import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    //Interpolation
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
    `
})

export class CoursesComponent {
    title = "List Of Courses";
    courses;
    isActive = true;
    email="abc@123.com";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log(this.email);
    }

    onSave($event) {
        console.log("Button was clicked", $event);
    }
}