import {Injectable} from '@angular/core';
import {searchVehicles as search1} from './data-sources/search-api-1';
import {searchVehicles as search2} from './data-sources/search-api-2';
import {searchVehicles as search3} from './data-sources/search-api-3';

@Injectable({
  providedIn: 'root'
})
export class VehicleSearchService {

  constructor() {
  }

  search(query): Promise<{}> {
    return Promise.all([search1(query), search2(query), search3(query)])
  }
}
