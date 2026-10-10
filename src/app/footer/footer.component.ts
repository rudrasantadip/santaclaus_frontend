import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Deterministic snow so the layout is stable between renders
  flakes = Array.from({ length: 26 }, (_, i) => {
    const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
    return {
      x: `${Math.round(r(1) * 100)}%`,
      s: `${3 + Math.round(r(2) * 6)}px`,
      o: (0.25 + r(3) * 0.5).toFixed(2),
      b: `${(r(4) * 1.6).toFixed(1)}px`,
      d: `${(9 + r(5) * 10).toFixed(1)}s`,
      delay: `${(-r(6) * 18).toFixed(1)}s`,
      drift: `${Math.round((r(7) - 0.5) * 120)}px`
    };
  });
}
