import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuStructurePojo } from '../Models/MenutStructurePojo'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  menuList: MenuStructurePojo[];
  
  getMenuStructureList(): Observable<MenuStructurePojo[]> {
    this.menuList = [
      { menuId: 1, menuName: 'Dashboard',path:'./dashboard' },
      { menuId: 2, menuName: 'place Order',path:'./dashboard'  }
    ]

    return new Observable(Observer => {
      Observer.next(this.menuList);
    }
    );

  }
}
