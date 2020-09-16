import { Component } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  controls = [
    {
      id: 1,
      name: 'Subflows',
      items: [
        {
          id: 1,
          name: 'Subflows 1'
        },
        {
          id: 2,
          name: 'Subflows 2'
        },
      ]
    },
    {
      id: 2,
      name: 'Storage',
      items: [
        {
          id: 3,
          name: 'Bigquery Query'
        },
        {
          id: 4,
          name: 'Bigquery Insert'
        }
      ]
    }
  ];

  panelOpenState = false;
  fields: string[] = [];

  itemDropped(event: CdkDragDrop<string[]>) {
    this.addField(event.item.data, event.currentIndex);
  }

  addField(fieldType: any, index: number) {
    console.log(fieldType);
    this.fields.splice(index, 0, fieldType.name);
  }

  mouseEnterHandler(event: MouseEvent, chapterExpansionPanel: MatExpansionPanel) {
    if (event.buttons && !chapterExpansionPanel.expanded) {
      chapterExpansionPanel.open();
    }
  }

}
