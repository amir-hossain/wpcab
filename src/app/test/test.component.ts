import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//   user = {
//     name: 'Arthur',
//     age: 42
// };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
}

}
