import { Observable } from "rxjs";

export interface BaseService<T>{
    getData():Observable<T[]>;
}