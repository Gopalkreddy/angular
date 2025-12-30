import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { ContrlFlow } from './components/contrl-flow/contrl-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { AttDirective } from './att-directive/att-directive';
import { GetApi } from './get-api/get-api';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { PipeEx } from './components/pipe-ex/pipe-ex';

export const routes: Routes = [
    {
        path: 'admin',
        component:Admin
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'control-flow',
        component: ContrlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'att-directive',
        component: AttDirective
    },
    {
        path: 'get-api1',
        component: GetApi
    },
    {
        path:'users',
        component:User
    },
    {
        path:'reactive-form',
        component:ReactiveForm
    },
    {
        path: 'pipe',
        component: PipeEx 
    }
];
