import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedLanguage = 'th';

  options = [
      { label: 'Thai', value: 'th' },
      { label: 'English', value: 'en' },
 
  ];

}
