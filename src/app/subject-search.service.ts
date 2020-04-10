import { Injectable } from '@angular/core';
import { searchSubjects as search1 } from './data-sources/search-api-1';
import { searchSubjects as search2 } from './data-sources/search-api-2';
import { searchSubjects as search3 } from './data-sources/search-api-3';

@Injectable({
  providedIn: 'root'
})



export class SubjectSearchService {

  constructor() {}

  search(query): Promise<{}> {
    return Promise.all([search1(query), search2(query), search3(query)])
  }
}
