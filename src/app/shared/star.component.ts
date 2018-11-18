import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './start.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input()
    rating: number;
    starWidth: number;

    ngOnChanges(changes: SimpleChanges): void{
        this.starWidth = this.rating * 75 /5
    }
}