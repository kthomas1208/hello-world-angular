
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input [(ngModel)]="titleText"/><br/>
        <div>{{ titleText | titleCase }}</div>        
    `
    
})
export class CoursesComponent {
    email = "me@example.com";
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus lacus at tincidunt bibendum. Mauris a leo vitae urna fringilla vestibulum eget quis mi. Quisque malesuada arcu eget ligula aliquet hendrerit. Praesent ut sapien ac magna maximus fringilla. Vestibulum dapibus eget nisl ac euismod. Sed volutpat nisi nunc, a convallis odio suscipit quis. Aenean vitae suscipit sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    `
    titleText: string;

    onKeyUp() {
        console.log(this.email);
    }

}