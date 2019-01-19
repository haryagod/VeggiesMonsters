import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuStructurePojo } from '../Models/MenutStructurePojo';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    menuList:Observable<MenuStructurePojo[]> = this._commonService.getMenuStructureList();

    
  constructor(private breakpointObserver: BreakpointObserver,
              private _commonService:CommonService) {}

}
