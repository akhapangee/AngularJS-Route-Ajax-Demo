import { Component } from "@angular/core";

@Component({
    selector: 'adbox',
    templateUrl: 'adbox.component.html'
})
export class AdboxComponet{
    color:string="";
    colors =[
     'red',
     'green',
     'blue'
    ];

    public addColor(){
        if(this.color ==  ""){
            alert("Pleaser enter color name");
        }else{
        this.colors.push(this.color);
        this.color = "";
        // alert(this.color);
        }
    }
}