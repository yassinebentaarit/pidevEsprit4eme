import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: 'admin',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: 'admin',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: 'admin',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }

    // {
    //     path: '',
    //     children: [
    //         {
    //             path: 'admin/dashboard',
    //             component: DashboardComponent
    //         },
    //         {
    //             path: 'admin/user-profile',
    //             component: UserProfileComponent
    //         },
    //         {
    //             path: 'admin/table-list',
    //             component: TableListComponent
    //         },
    //         {
    //             path: 'admin/typography',
    //             component: TypographyComponent
    //         },
    //         {
    //             path: 'admin/icons',
    //             component: IconsComponent
    //         },
    //         {
    //             path: 'admin/maps',
    //             component: MapsComponent
    //         },
    //         {
    //             path: 'admin/notifications',
    //             component: NotificationsComponent
    //         },
    //         {
    //             path: 'admin/upgrade',
    //             component: UpgradeComponent
    //         }
    //     ]
    // }



];
