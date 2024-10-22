import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectVmss } from './store/vmss.selectors';
import * as VmssActions from "./store/vmss.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-client-aks-ingress';

  vmss$: Observable<Record<string, string>>;

  constructor(private _store: Store<{vmss: Record<string, string>}>) {
    this.vmss$ = _store.select(selectVmss);
  }

  ngOnInit(): void {
    this._store.dispatch(VmssActions.getVmssVmStatus());
  }

  testKeyVaultAccess(): void {
    this._store.dispatch(VmssActions.testKeyVaultAccess());
  }
}
