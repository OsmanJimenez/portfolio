import { Component, OnInit } from '@angular/core';
import { CertificationsService } from 'src/app/services/section/certifications/certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  certifications: any[] = [];
  originalCertifications: any[] = [];
  authoritys: { name: string, icon: string, selected: boolean }[] = [];
  viewAll = false;
  jsonLdScript: string;

  constructor(private certificationsService: CertificationsService) { }

  ngOnInit() {
    this.loadCertifications();
  }

  loadCertifications() {
    this.certificationsService.get().subscribe(
      (res) => {
        if (res) {
          this.certifications = res;
          this.originalCertifications = [...this.certifications];
          this.generateAuthoritys();
          this.generateJsonLdScript();
        }
      }
    );
  }

  generateAuthoritys() {
    const uniqueAuthorities = new Set<string>();
    this.certifications.forEach(certification => uniqueAuthorities.add(certification.authority));
    this.authoritys = Array.from(uniqueAuthorities).map(authority => ({
      name: authority,
      icon: this.certifications.find(certification => certification.authority === authority).icon,
      selected: false
    }));
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Certificaciones de Osman Armando Jimenez Cortes",
      "itemListElement": [
        ${this.certifications.map((certification, index) => {
      return `{
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@type": "Course",
                "name": "${certification.name}",
                "provider": {
                  "@type": "Organization",
                  "name": "${certification.authority}"
                },
                "startDate": "${certification.started_On}",
                "url": "${certification.url}"
              }
            }`;
    }).join(',')
      }
      ]
    }`;
  }

  resetFilter() {
    this.authoritys.forEach(authority => authority.selected = false);
    this.certifications = [...this.originalCertifications];
    this.generateJsonLdScript();
  }

  removeFilter(event: Event, authorityName: string) {
    event.stopPropagation();
    const authority = this.authoritys.find(authority => authority.name === authorityName);
    if (authority) {
      authority.selected = false;
      this.applyFilters();
    }
  }

  viewMore() {
    this.viewAll = !this.viewAll;
    if (!this.viewAll) {
      this.certifications = this.certifications.slice(0, 4);
    }
  }

  toggleAuthoritySelection(authority: any) {
    authority.selected = !authority.selected;
    this.applyFilters();
  }

  applyFilters() {
    const selectedAuthorities = this.authoritys.filter(authority => authority.selected);
    if (selectedAuthorities.length === 0) {
      this.resetFilter();
    } else {
      this.certifications = this.originalCertifications.filter(certification =>
        selectedAuthorities.some(authority => certification.authority === authority.name)
      );
      this.generateJsonLdScript();
    }
  }
}
