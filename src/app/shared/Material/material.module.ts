
import {MatButtonModule  } from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const matArr=[
    MatButtonModule,MatIconModule,MatSnackBarModule,MatDialogModule,MatProgressSpinnerModule,MatPaginatorModule,MatTableModule
]

@NgModule({
    imports:[...matArr],
    exports:[...matArr]
})
export class MaterialModule{}   