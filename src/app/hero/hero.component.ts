import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  bg1 = '';
  bg2 = '';
  leftTransform = 'rotate(-2deg)';
  rightTransform = '';

  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    this.bg1 = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    this.bg2 = `translate(${x * -0.2}px, ${y * -0.2}px)`;

    this.leftTransform = `rotate(-2deg) translate(${x}px, ${y}px)`;
    this.rightTransform = `translate(${-x}px, ${-y}px)`;
  }
}
