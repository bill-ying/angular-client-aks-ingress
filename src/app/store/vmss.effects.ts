import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import * as VmssActions from "./vmss.actions";

// const hostlink = 'http://127.0.0.1:5000/';
const hostlink = 'http://4.174.162.207/server/';  // REST API server

@Injectable()
export class VmssEffects {
    getVmssVmStatus$ = createEffect(() => this._actions$.pipe(
        ofType(VmssActions.getVmssVmStatus),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink).pipe(
                map(f => {
                    return VmssActions.getVmssVmStatusSuccess({ status: f });
                }),
                catchError(e => of(VmssActions.getVmssVmStatusFailure(e)))
            );
        }),

    ));

    testKeyVaultAccess$ = createEffect(() => this._actions$.pipe(
        ofType(VmssActions.testKeyVaultAccess),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'test').pipe(
                map(f => {
                    return VmssActions.testKeyVaultAccessSuccess({ status: f });
                }),
                catchError(e => of(VmssActions.getVmssVmStatusFailure(e)))
            );
        }),

    ));

    constructor(private _actions$: Actions, private _http: HttpClient) { }
}