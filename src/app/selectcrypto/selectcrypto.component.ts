import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectcrypto',
  templateUrl: './selectcrypto.component.html',
  styleUrls: ['./selectcrypto.component.scss']
})
export class SelectcryptoComponent {
  
  constructor(
    private route: ActivatedRoute
  ) { }
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    alert(id);
  }
}
