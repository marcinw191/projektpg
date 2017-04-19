import { Component, OnInit, Input, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'ogloszenie-miniatura',
  templateUrl: './ogloszenie-miniatura.component.html',
  styleUrls: ['./ogloszenie-miniatura.component.css']
})
export class OgloszenieMiniaturaComponent implements OnInit {

  @Input() miniatura: any;
  @Input() orientacja: string;
  zdjecie: string;

  constructor(@Inject(FirebaseApp) private fbApp: firebase.app.App) {

  }

  ngOnInit() {
    if(this.miniatura.pliki.length > 0)
    {
      var _this = this;
      this.fbApp.storage().ref().child(this.miniatura.pliki[0]).getDownloadURL().then(function(url)
        {
          _this.zdjecie = url;
        }
      ).catch(function(error)
      {
        console.log(error);
        _this.zdjecie = "";
      });
    }
    else{
      this.zdjecie = "";
    }
  }

}
