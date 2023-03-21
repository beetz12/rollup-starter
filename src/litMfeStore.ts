import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from './data.state';
import { dataAdapter, DataState } from './data.state';

export class LitMfeStore extends ComponentStore<{}> {
    readonly data$: Observable<Data[]> = this.select<DataState>((state) =>
        dataAdapter.getSelectors().selectAll(state)
    );
}
