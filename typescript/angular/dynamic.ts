import {Component} from "@angular/core";

@Component({
    selector: 'navigation',
    template: `
    <p>NavigationComponent</p>
  `,
})
export class NavigationComponent {

}

@Component({
    selector: 'execute-list',
    template: `
    <p>ExecuteListComponent</p>
  `,
})
export class ExecuteListComponent {

}

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular version 4</h1>
    <pre>{{appLayouts | json}} <br></pre>
    
    <div *ngFor="let layout of appLayouts" [attr.class]="layout.className">
        <div *ngFor="let subLayout of layout.subLayout">
            <div *ngIf="subLayout.component">
                <ng-container *ngComponentOutlet="getClass(subLayout.type)"></ng-container>    
            </div>
            
            <div *ngIf="!subLayout.component" [attr.class]="subLayout.className">
            </div>
            
        </div>
    </div>
   
  `,
})
export class App {

    private components = [
        NavigationComponent
    ];

    public appLayouts = [{
            className: "row page-wrap",
            subLayout: [
                {component: true, type: "NavigationComponent"},
                {component: false, className: "container clearfix display-table", subLayout: [

                ]}
            ]
    }];

    public getClass(className){
        let instance: any = null;
        this.components.filter(component => {
            if (component.name === className) {
                instance = component;
                return true;
            }
        });
        return instance;
    }

}
