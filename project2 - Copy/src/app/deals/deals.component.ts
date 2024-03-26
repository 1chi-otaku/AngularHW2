import { Component } from '@angular/core';
import { deals } from '../deals';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  deals = deals;
}
