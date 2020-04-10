import {Injectable} from '@angular/core';
import {search as search1} from './data-sources/search-api-1';
import {search as search2} from './data-sources/search-api-2';
import {search as search3} from './data-sources/search-api-3';

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
