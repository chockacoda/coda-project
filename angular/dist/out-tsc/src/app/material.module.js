import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatToolbarModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
                MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
                MatRadioModule
            ],
            exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
                MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
                MatRadioModule
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());
export { CustomMaterialModule };
//# sourceMappingURL=material.module.js.map