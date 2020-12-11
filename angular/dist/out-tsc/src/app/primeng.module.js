import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DropdownModule, PanelModule, ButtonModule } from 'primeng/primeng';
var CustomPrimengModule = /** @class */ (function () {
    function CustomPrimengModule() {
    }
    CustomPrimengModule = tslib_1.__decorate([
        NgModule({
            imports: [AccordionModule, MegaMenuModule, TableModule, DropdownModule, ButtonModule, PanelModule
            ],
            exports: [AccordionModule, MegaMenuModule, TableModule, DropdownModule, ButtonModule, PanelModule
            ],
        })
    ], CustomPrimengModule);
    return CustomPrimengModule;
}());
export { CustomPrimengModule };
//# sourceMappingURL=primeng.module.js.map