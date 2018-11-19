import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './start.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input()
    rating: number;

    @Output()
    ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();


    starWidth: number;

    ngOnChanges(changes: SimpleChanges): void{
        this.starWidth = this.rating * 100 /5
    }

    onClick():void{
        //console.log();
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}