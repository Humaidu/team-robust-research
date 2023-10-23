import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-spider-lines',
  templateUrl: './spider-lines.component.html',
  styleUrls: ['./spider-lines.component.css']
})
export class SpiderLinesComponent implements OnInit {

  ngOnInit(): void {

  }

  spiderX = 0;
  spiderY = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // const mouseX = event.clientX;
    // const mouseY = event.clientY;

    const container = this.elementRef.nativeElement.getBoundingClientRect();
    const mouseX = event.clientX - container.left;
    const mouseY = event.clientY - container.top;

    this.spiderX = mouseX;
    this.spiderY = mouseY;
  }

}
