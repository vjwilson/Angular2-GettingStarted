import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <div class="well">My First Componeent</div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Pergamene Press';
}
