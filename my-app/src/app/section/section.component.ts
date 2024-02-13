import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent 
{
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() color: string = 'black';
  @Output() newColor = new EventEmitter<string>();

  newColorFunction() 
  {
    this.newColor.emit(this.color);
  }
}
