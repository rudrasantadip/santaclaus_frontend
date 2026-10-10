import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Normalised pointer position, -0.5 to 0.5
  mx = 0;
  my = 0;

  sceneTransform = 'rotateX(0deg) rotateY(0deg)';
  ghostTransform = '';
  leftTransform = '';

  // Deterministic snow with varied depth (size + blur)
  flakes = Array.from({ length: 44 }, (_, i) => {
    const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
    const depth = r(2);
    return {
      x: `${Math.round(r(1) * 100)}%`,
      s: `${(3 + depth * 11).toFixed(0)}px`,
      o: (0.25 + depth * 0.55).toFixed(2),
      b: `${(depth > 0.75 ? 2.5 : 0).toFixed(1)}px`,
      d: `${(14 - depth * 7 + r(5) * 4).toFixed(1)}s`,
      delay: `${(-r(6) * 20).toFixed(1)}s`,
      drift: `${Math.round((r(7) - 0.5) * 160)}px`
    };
  });

  onMouseMove(e: MouseEvent) {
    this.mx = e.clientX / window.innerWidth - 0.5;
    this.my = e.clientY / window.innerHeight - 0.5;
    this.apply();
  }

  onMouseLeave() {
    this.mx = 0;
    this.my = 0;
    this.apply();
  }

  private apply() {
    this.sceneTransform = `rotateX(${(-this.my * 22).toFixed(2)}deg) rotateY(${(this.mx * 40).toFixed(2)}deg)`;
    this.ghostTransform = `translate(${(this.mx * -50).toFixed(1)}px, ${(this.my * -24).toFixed(1)}px)`;
    this.leftTransform = `translate(${(this.mx * 18).toFixed(1)}px, ${(this.my * 12).toFixed(1)}px)`;
  }
}
