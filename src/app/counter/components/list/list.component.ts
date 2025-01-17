import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>list works!</p>`,
    styleUrl: './list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
