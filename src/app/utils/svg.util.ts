import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export const locnSvgRegisty = (ir:MdIconRegistry ,ds:DomSanitizer) => {
    const imgDir='assets/img';
    const sidebarDir=`${imgDir}/sidebar`;
    const iconMoveu=`${imgDir}/icons`;

    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl('assets/img/avatar/avatars.svg'));
    ir.addSvgIconSetInNamespace('unassigned',ds.bypassSecurityTrustResourceUrl('assets/img/avatar/unassigned.svg'));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/day.svg'));
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/month.svg'));
    ir.addSvgIcon('project',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/project.svg'));
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/week.svg'));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/projects.svg'));
    ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconMoveu}/move.svg`));
    ir.addSvgIcon('add',ds.bypassSecurityTrustResourceUrl(`${iconMoveu}/add.svg`));
    ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconMoveu}/delete.svg`));
}