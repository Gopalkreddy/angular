import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { ContrlFlow } from './components/contrl-flow/contrl-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { AttDirective } from './att-directive/att-directive';

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
    }
];
