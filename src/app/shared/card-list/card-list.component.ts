import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];
  @Input() displayFields: string[];
  @Input() path: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  formatDisplayField(displayField: string) {
    return displayField = displayField.replace(/_/g, ' ');
  }

  goToDetails(id: string) {
    this.router.navigate([`${this.path}/details/${id}`]);
  }
}
